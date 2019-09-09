---
title: React Internals
date: "2019-09-06"
description: Notes taken while going through React Internals by Matt Greer
---

## 🚀 [React Internals](http://www.mattgreer.org/articles/react-internals-part-one-basic-rendering/)

👨‍💻 By [Matt Greer](http://www.mattgreer.org)

### 🎈 Part One: basic rendering

#### ✨ **Some Background: Elements and Components**

At the heart of React are three different types of entities:

- native DOM elements
- virtual elements
- components.

> The truth is the components we create are incomplete. React will take our component class, and wrap it in a `ReactCompositeComponentWrapper`, which then gives the components we wrote the full lifecycle hooks and ability to participate in React.

#### ✨ **React is declarative**

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

#### ✨ **A tiny, fake React called Feact**

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

#### ✨ **What should Feact.render() do?**

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

#### ✨ **Adding user defined components**

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

#### ✨ **Improving Feact.render()**

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

#### ✨ **An improvement for composite components**

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

#### ✨ **Fixing Feact.render() again**

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

#### ✨ **First, fix createClass**

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

#### ✨ **Addressing mountComponent’s shortcut**

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

#### ✨ **Tweaking Feact.render()**

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

#### ✨ **Finally adding componentWillMount and componentDidMount**

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

### 🎈 Part Three: Basic Updating

#### ✨ Simple updating

Calling setState() in a component is the primary way people cause their React apps to update. But React also supports updating through React.render(). Take this contrived example

```js
React.render(<h1>hello</h1>, root);

setTimeout(function() {
  React.render(<h1>hello again</h1>, root);
}, 2000);
```

#### ✨ Doing the update

```js
const Feact = {
    ...
    render(element, container) {
        const prevComponent =
            getTopLevelComponentInContainer(container);

        if (prevComponent) {
            return updateRootComponent(
                prevComponent,
                element
            );
        } else {
            return renderNewRootComponent(element, container);
        }
    }
    ...
}

function renderNewRootComponent(element, container) {
    const wrapperElement =
        Feact.createElement(TopLevelWrapper, element);

    const componentInstance =
        new FeactCompositeComponentWrapper(wrapperElement);

    return FeactReconciler.mountComponent(
        componentInstance,
        container
    );
}

function getTopLevelComponentInContainer(container) {
    // need to figure this out
}

function updateRootComponent(prevComponent, nextElement) {
    // need to figure this out too
}
```

This is looking pretty promising. If we rendered before, then take the state of the previous render, grab the new desired state, and pass that off to a function that will figure out what DOM updates need to happen to update the app. Otherwise if there’s no signs of a previous render, then render into the DOM exactly how we did in part one and two.

#### ✨ Remembering what we did

For each render, We need to store the components we created, so we can refer to them in a subsequent render. Where to store them? Why not on the DOM nodes they create?

```js
function renderNewRootComponent(element, container) {
  const wrapperElement = Feact.createElement(TopLevelWrapper, element);

  const componentInstance = new FeactCompositeComponentWrapper(wrapperElement);

  const markUp = FeactReconciler.mountComponent(componentInstance, container);

  // new line here, store the component instance on the container
  // we want its _renderedComponent because componentInstance is just
  // the TopLevelWrapper, which we don't need for updates
  container.__feactComponentInstance = componentInstance._renderedComponent;

  return markUp;
}
```

Well, that was easy. Similarly retrieving the stashed component is easy too:

```js
function getTopLevelComponentInContainer(container) {
return container.\_\_feactComponentInstance;
}
function getTopLevelComponentInContainer(container) {
return container.\_\_feactComponentInstance;
}
```

#### ✨ Updating to the new state

This is the simple example we are working through

```js
Feact.render(Feact.createElement("h1", null, "hello"), root);

setTimeout(function() {
  Feact.render(Feact.createElement("h1", null, "hello again"), root);
}, 2000);
```

2 seconds has elapsed, so we are now calling Feact.render() again, but this time with an element that looks like

```js
{
    type: 'h1',
    props: {
        children: 'hello again'
    }
}
```

Since Feact determined this is an update, we ended up in `updateRootComponent`, which is just going to delegate to the component

```js
function updateRootComponent(prevComponent, nextElement) {
  prevComponent.receiveComponent(nextElement);
}
```

```js
class FeactDOMComponent {
    ...
    receiveComponent(nextElement) {
        const prevElement = this._currentElement;
        this.updateComponent(prevElement, nextElement);
    }

    updateComponent(prevElement, nextElement) {
        const lastProps = prevElement.props;
        const nextProps = nextElement.props;

        this._updateDOMProperties(lastProps, nextProps);
        this._updateDOMChildren(lastProps, nextProps);

        this._currentElement = nextElement;
    }

    _updateDOMProperties(lastProps, nextProps) {
        // nothing to do! I'll explain why below
    }

    _updateDOMChildren(lastProps, nextProps) {
        // finally, the component can update the DOM here
        // we'll implement this next
    }
};
```

`receiveComponent` just sets up updateComponent, which ultimately calls \_updateDOMProperties and \_updateDOMChildren which are the meaty functions which will finally cause the actual DOM to get updated. \_updateDOMProperties is mostly concerned with updating CSS styles. We’re not going to implement it in this blog post series, but just pointing it out as that is the method React uses to deal with style changes.

\_updateDOMChildren in React this method is pretty complex, handling a lot of different scenarios. But in Feact the children is just the text contents of the DOM element, in this case the children will go from "hello" to "hello again"

```js
class FeactDOMComponent {
    ...
    _updateDOMChildren(lastProps, nextProps) {
        const lastContent = lastProps.children;
        const nextContent = nextProps.children;

        if (!nextContent) {
            this.updateTextContent('');
        } else if (lastContent !== nextContent) {
            this.updateTextContent('' + nextContent);
        }
    }

    updateTextContent(text) {
        const node = this._hostNode;

        const firstChild = node.firstChild;

        if (firstChild && firstChild === node.lastChild
                && firstChild.nodeType === 3) {
            firstChild.nodeValue = text;
            return;
        }

        node.textContent = text;
    }
};
```

#### ✨ Updating composite components

```js
Feact.render(
  Feact.createElement(MyCoolComponent, { myProp: "hello" }),
  document.getElementById("root")
);

setTimeout(function() {
  Feact.render(
    Feact.createElement(MyCoolComponent, { myProp: "hello again" }),
    document.getElementById("root")
  );
}, 2000);
```

So all we need to do is add `receiveComponent` to `FeactCompositeComponentWrapper` and we’re good!

```js
class FeactCompositeComponentWrapper {
    ...
    receiveComponent(nextElement) {
        const prevElement = this._currentElement;
        this.updateComponent(prevElement, nextElement);
    }

    updateComponent(prevElement, nextElement) {
        const nextProps = nextElement.props;

        this._performComponentUpdate(nextElement, nextProps);
    }

    _performComponentUpdate(nextElement, nextProps) {
        this._currentElement = nextElement;
        const inst = this._instance;

        inst.props = nextProps;

        this._updateRenderedComponent();
    }

    _updateRenderedComponent() {
        const prevComponentInstance = this._renderedComponent;
        const inst = this._instance;
        const nextRenderedElement = inst.render();

        prevComponentInstance.receiveComponent(nextRenderedElement);
    }
}
```

#### ✨ Let’s use FeactReconciler again

```js
const FeactReconciler = {
    ...
    receiveComponent(internalInstance, nextElement) {
        internalInstance.receiveComponent(nextElement);
    }
};


function updateRootComponent(prevComponent, nextElement) {
    FeactReconciler.receiveComponent(prevComponent, nextElement);
}

class FeactCompositeComponentWrapper {
    ...
    _updateRenderedComponent() {
        const prevComponentInstance = this._renderedComponent;
        const inst = this._instance;
        const nextRenderedElement = inst.render();

        FeactReconciler.receiveComponent(
            prevComponentInstance, nextRenderedElement);
    }
}
```

#### ✨ shouldComponentUpdate and componentWillReceiveProps

```js
class FeactCompositeComponentWrapper {
    ...
    updateComponent(prevElement, nextElement) {
        const nextProps = nextElement.props;
        const inst = this._instance;

        if (inst.componentWillReceiveProps) {
            inst.componentWillReceiveProps(nextProps);
        }

        let shouldUpdate = true;

        if (inst.shouldComponentUpdate) {
            shouldUpdate = inst.shouldComponentUpdate(nextProps);
        }

        if (shouldUpdate) {
            this._performComponentUpdate(nextElement, nextProps);
        } else {
            // if skipping the update,
            // still need to set the latest props
            inst.props = nextProps;
        }
    }
    ...
}
```

https://codepen.io/navinnavi19/pen/MWgQPpj

**NOTE:** We only did the Virtual DOM Modification for rerender. Element will not unmount and mount in our Feact example so the componentWillMount and componentDidMount will not work on rerender.

### 🎈 Part Four: setState

#### ✨ Adding state to Feact

#### ✨ getInitialState

```js
const Feact = {
  createClass(spec) {
    function Constructor(props) {
      this.props = props;

      // new lines added for state
      const initialState = this.getInitialState ? this.getInitialState() : null;
      this.state = initialState;
    }

    Constructor.prototype = Object.assign(Constructor.prototype, spec);

    return Constructor;
  }
};
```

#### ✨ Adding a simple setState()

Whenever a component wants to update, it needs to tell Feact “hey, I’d like to render again!”, and `this.setState()` is the primary way to accomplish that. `setState` updates `this.state`, and triggers a render, which will send the component through the lifecycle methods `shouldComponentUpdate` -> `componentWillUpdate` -> `render` -> `componentDidUpdate` (which Feact doesn’t have, but of course React does).
