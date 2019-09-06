---
title: React Internals
date: "2019-09-06"
description: Notes taken while going through React Internals by Matt Greer
---

## 🚀 [React Internals](http://www.mattgreer.org/articles/react-internals-part-one-basic-rendering/)

👨‍💻 By [Matt Greer](http://www.mattgreer.org)

### 🎈 Part One: basic rendering

✨ **Some Background: Elements and Components**

At the heart of React are three different types of entities:

- native DOM elements
- virtual elements
- components.

> The truth is the components we create are incomplete. React will take our component class, and wrap it in a `ReactCompositeComponentWrapper`, which then gives the components we wrote the full lifecycle hooks and ability to participate in React.

✨ **React is declarative**

```js
class MyComponent extends React.Component {
  render() {
    return <div>hello</div>;
  }
}
```

That bit of JSX gets translated into this by the compiler:

```js
class MyComponent extends React.Component {
  render() {
    return React.createElement("div", null, "hello");
  }
}
```

✨ **A tiny, fake React called Feact**

Let’s pretend we want to create this tiny Feact app:

```js
Feact.render(<h1>hello world</h1>, document.getElementById("root"));
```

For starters, let’s ditch the JSX.

```js
Feact.render(
  Feact.createElement("h1", null, "hello world"),
  document.getElementById("root")
);
```

we will use Feact.createElement instead of JSX,

```js
const Feact = {
  createElement(type, props, children) {
    const element = {
      type,
      props: props || {}
    };

    if (children) {
      element.props.children = children;
    }

    return element;
  }
};
```

✨ **What should Feact.render() do?**

```js
const Feact = {
  createElement() {
    /* as before */
  },

  render(element, container) {
    const componentInstance = new FeactDOMComponent(element);
    return componentInstance.mountComponent(container);
  }
};
```

When `render()` finishes, we have a finished webpage. So based on that, we know `FeactDOMComponent` is truly digging in and creating DOM for us. Let’s go ahead and take a stab at implementing it

```js
class FeactDOMComponent {
  constructor(element) {
    this._currentElement = element;
  }

  mountComponent(container) {
    const domElement = document.createElement(this._currentElement.type);
    const text = this._currentElement.props.children;
    const textNode = document.createTextNode(text);
    domElement.appendChild(textNode);

    container.appendChild(domElement);

    this._hostNode = domElement;
    return domElement;
  }
}
```

https://codepen.io/navinnavi19/pen/MWgrVWG

✨ **Adding user defined components**

```js
const Feact = {
    createClass(spec) {
        function Constructor(props) {
            this.props = props;
        }

        Constructor.prototype.render = spec.render;

        return Constructor;
    },

    render(element, container) {
        // our previous implementation can't
        // handle user defined components,
        // so we need to rethink this method
    }
};

const MyTitle = Feact.createClass({
    render() {
        return Feact.createElement('h1', null, this.props.message);
    }
};

Feact.render({
    Feact.createElement(MyTitle, { message: 'hey there Feact' }),
    document.getElementById('root')
);
```

Remember, we’re not dealing with JSX for this blog post series, because we’ve got plenty to deal with already. If we had JSX available, the above would look like

```js
Feact.render(
  <MyTitle message="hey there Feact" />,
  document.getElementById("root")
);
```

✨ **Improving Feact.render()**

If you trace back through the code so far, you will see that Feact.render() as it stands now can’t handle composite components, so let’s fix that:

```js
Feact = {
  render(element, container) {
    const componentInstance = new FeactCompositeComponentWrapper(element);

    return componentInstance.mountComponent(container);
  }
};

class FeactCompositeComponentWrapper {
  constructor(element) {
    this._currentElement = element;
  }

  mountComponent(container) {
    const Component = this._currentElement.type;
    const componentInstance = new Component(this._currentElement.props);
    const element = componentInstance.render();

    const domComponentInstance = new FeactDOMComponent(element);
    return domComponentInstance.mountComponent(container);
  }
}
```

Notice how `FeactCompositeComponentWrapper` is directly creating a `FeactDOMComponent`? That’s a tight coupling which isn’t so great. We’ll fix this later. If React was this tightly coupled, it’d only ever be able to build web apps. Keeping ReactCompositeComponentWrapper in the dark about other component types surely made building React Native easier.

✨ **An improvement for composite components**

```js
const MyMessage = Feact.createClass({
    render() {
        if (this.props.asTitle) {
            return Feact.createElement(MyTitle, {
                message: this.props.message
            });
        } else {
            return Feact.createElement('p', null, this.props.message);
        }
    }
}
```

This composite component’s render() is either going to return a primitive element or a composite component element. Currently Feact can’t handle this, if `asTitle` was `true`, `FeactCompositeComponentWrapper` would give `FeactDOMComponent` a non-native element, and `FeactDOMComponent` would blow up. Let’s fix `FeactCompositeComponentWrapper`

```js
class FeactCompositeComponentWrapper {
  constructor(element) {
    this._currentElement = element;
  }

  mountComponent(container) {
    const Component = this._currentElement.type;
    const componentInstance = new Component(this._currentElement.props);
    let element = componentInstance.render();

    while (typeof element.type === "function") {
      element = new element.type(element.props).render();
    }

    const domComponentInstance = new FeactDOMComponent(element);
    domComponentInstance.mountComponent(container);
  }
}
```

> Heads up, this “fix” is a short cut that’s just good enough to meet our current needs. Notice how it repeatedly calls render until it gets down to a primitive element? That’s not good enough, because those subcomponents need to participate in the entire lifecycle. For example, if we had support for componentWillMount, those subcomponents would never get their’s called. We’ll fix this later.

✨ **Fixing Feact.render() again**

```js
const TopLevelWrapper = function(props) {
  this.props = props;
};

TopLevelWrapper.prototype.render = function() {
  return this.props;
};

const Feact = {
  render(element, container) {
    const wrapperElement = this.createElement(TopLevelWrapper, element);

    const componentInstance = new FeactCompositeComponentWrapper(
      wrapperElement
    );

    // as before
  }
};
```

`ToplevelWrapper` is basically a simple composite component. It could have been defined by calling Feact.createClass(). Its render method just returns the user provided element. Since `TopLevelWrapper` will get wrapped in a `FeactCompositeComponentWrapper`, we don’t care what type the user provided element was, `FeactCompositeComponentWrapper` will do the right thing regardless.

https://codepen.io/navinnavi19/pen/bGbavOM

### 🎈 Part Two: componentWillMount and componentDidMount

✨ **First, fix createClass**

`createClass` back in part one only supported only `render`

Adding the entire spec to the component’s prototype. That allows methods like componentWillMount, but it also allows any arbitrary methods the user defined to be used.

```js
const Feact = {
    createClass(spec) {
        function Constructor(props) {
            this.props = props;
        }

        Constructor.prototype =
            Object.assign(Constructor.prototype, spec);

        return Constructor;
    }
    ...
}
```

✨ **Addressing mountComponent’s shortcut**

Fixing the mountComponent to do the proper mounting for all the Composite Component

```js
class FeactCompositeComponentWrapper {
    ...
    mountComponent(container) {
        const Component = this._currentElement.type;
        const componentInstance =
            new Component(this._currentElement.props);
        this._instance = componentInstance;

        const markup = this.performInitialMount(container);

        return markup;
    }

    performInitialMount(container) {
        const renderedElement = this._instance.render();

        const child = instantiateFeactComponent(renderedElement);
        this._renderedComponent = child;

        return FeactReconciler.mountComponent(child, container);
    }
}

const FeactReconciler = {
    mountComponent(internalInstance, container) {
        return internalInstance.mountComponent(container);
    }
};

function instantiateFeactComponent(element) {
    if (typeof element.type === 'string') {
        return new FeactDOMComponent(element);
    } else if (typeof element.type === 'function') {
        return new FeactCompositeComponentWrapper(element);
    }
}
```

✨ **Tweaking Feact.render()**

FeactReconciler deal with all mounting

```js
const Feact = {
    ...
    render(element, container) {
        const wrapperElement =
            this.createElement(TopLevelWrapper, element);

        const componentInstance =
            new FeactCompositeComponentWrapper(wrapperElement);

        return FeactReconciler.mountComponent(
            componentInstance,
            container
        );
    }
}
```

✨ **Finally adding componentWillMount and componentDidMount**

```js
class FeactCompositeComponentWrapper {
    ...
    mountComponent(container) {
        const Component = this._currentElement.type;
        const componentInstance =
            new Component(this._currentElement.props);
        this._instance = componentInstance;

        if (componentInstance.componentWillMount) {
            componentInstance.componentWillMount();
        }

        const markUp = this.performInitialMount(container);

        if (componentInstance.componentDidMount) {
            componentInstance.componentDidMount();
        }

        return markUp;
    },
    ...
}
```

https://codepen.io/navinnavi19/pen/PoYEazM
