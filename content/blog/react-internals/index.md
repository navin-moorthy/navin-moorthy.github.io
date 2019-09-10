---
title: React Internals
date: "2019-09-10"
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

#### ✨ Defining setState on the component

```js
function FeactComponent() {}

FeactComponent.prototype.setState = function() {
  // to be implemented later
};

function mixSpecIntoComponent(Constructor, spec) {
  const proto = Constructor.prototype;

  for (const key in spec) {
    proto[key] = spec[key];
  }
}

const Feact = {
  createClass(spec) {
    function Constructor(props) {
      this.props = props;

      // new lines added for state
      const initialState = this.getInitialState ? this.getInitialState() : null;
      this.state = initialState;
    }

    Constructor.prototype = new FeactComponent();

    mixSpecIntoComponent(Constructor, spec);
    return Constructor;
  }
};
```

Prototypical inheritance in action. `mixSpecIntoComponent` in React is more complicated (and robust), dealing with things like mixins and making sure users don’t accidentally clobber a React method.

#### ✨ Threading setState over to updateComponent

Utilizing both internal Intanse and public instance

```js
function FeactComponent() {}

FeactComponent.prototype.setState = function(partialState) {
  const internalInstance = getMyInternalInstancePlease(this);

  internalInstance._pendingPartialState = partialState;

  FeactReconciler.performUpdateIfNecessary(internalInstance);
};
```

React solves the “get my internal instance” problem with an instance map, which really just stores the internal instance on the public instance

```js
const FeactInstanceMap = {
  set(key, value) {
    key.__feactInternalInstance = value;
  },

  get(key) {
    return key.__feactInternalInstance;
  }
};
```

```js
class FeactCompositeComponentWrapper {
    ...
    mountComponent(container) {
        const Component = this._currentElement.type;
        const componentInstance =
            new Component(this._currentElement.props);
        this._instance = componentInstance;

        FeactInstanceMap.set(componentInstance, this);
        ...
    }
}
```

We have one other unimplemented method, `FeactReconciler.performUpdateIfNecessary`, but just like other reconciler methods, it will just delegate to the instance

```js
const FeactReconciler = {
    ...
    performUpdateIfNecessary(internalInstance) {
        internalInstance.performUpdateIfNecessary();
    }
    ...
}

class FeactCompositeComponentWrapper {
    ...
    performUpdateIfNecessary() {
        this.updateComponent(this._currentElement, this._currentElement);
    }
}
```

Whenever `updateComponent` is called with the same element, then React knows only state is getting updated, otherwise props are updating.

```js
class FeactCompositeComponentWrapper {
    ...
    updateComponent(prevElement, nextElement) {
        const nextProps = nextElement.props;
        const inst = this._instance;

        const willReceive = prevElement !== nextElement;

        if (willReceive && inst.componentWillReceiveProps) {
            inst.componentWillReceiveProps(nextProps);
        }
        ...
    }
}
```

#### ✨ Updating with the new state

```js
class FeactCompositeComponentWrapper {
    ...
    updateComponent(prevElement, nextElement) {
        const nextProps = nextElement.props;
        const inst = this._instance;

        const willReceive = prevElement !== nextElement;

        if (willReceive && inst.componentWillReceiveProps) {
            inst.componentWillReceiveProps(nextProps);
        }

        let shouldUpdate = true;
        const nextState =
            Object.assign({}, inst.state, this._pendingPartialState);
        this._pendingPartialState = null;

        if (inst.shouldComponentUpdate) {
            shouldUpdate =
                inst.shouldComponentUpdate(nextProps, nextState);
        }

        if (shouldUpdate) {
            this._performComponentUpdate(
                nextElement, nextProps, nextState
            );
        } else {
            inst.props = nextProps;
            inst.state = nextState;
        }
    }

    _performComponentUpdate(nextElement, nextProps, nextState) {
        this._currentElement = nextElement;
        const inst = this._instance;

        inst.props = nextProps;
        inst.state = nextState;

        this._updateRenderedComponent();
    }

    _updateRenderedComponent() {
        const prevComponentInstance = this._renderedComponent;
        const inst = this._instance;
        const nextRenderedElement = inst.render();

        FeactReconciler.receiveComponent(
            prevComponentInstance,
            nextRenderedElement
        );
    }
    ...
}
```

https://codepen.io/navinnavi19/pen/ZEzrPjq

#### ✨ Batching setState calls

Calling setState within a second render inside componentWillReceiveProps to discard 2nd render and proceed with 3rd render.

https://codepen.io/navinnavi19/pen/ExYEWzy

#### ✨ Batching step one, a place to store the batched state changes

We need a place to store more than one state update, so we will change \_pendingPartialState into an array

```js
function FeactComponent() {
}

FeactComponent.prototype.setState = function(partialState) {
    const internalInstance = FeactInstanceMap.get(this);

    internalInstance._pendingPartialState =
        internalInstance._pendingPartialState || [];

    internalInstance._pendingPartialState.push(partialState);
    ...
}
```

Over in updateComponent, let’s pull the state processing out into its own method

```js
class FeactCompositeComponentWrapper {
    ...
    updateComponent(prevElement, nextElement) {
        ...
        const nextState = this._processPendingState();
        ...
    }

    _processPendingState() {
        const inst = this._instance;
        if (!this._pendingPartialState) {
            return inst.state;
        }

        let nextState = inst.state;

        for (let i = 0; i < this._pendingPartialState.length; ++i) {
            nextState =
                Object.assign(nextState, this._pendingPartialState[i]);
        }

        this._pendingPartialState = null;
        return nextState;
    }
}
```

#### ✨ Batching step two, batching up the state changes into one render

For Feact, we will batch updates while rendering, otherwise, we won’t batch them. So during updateComponent, we just set a flag that tells the world we are rendering, then unset it at the end. If setState sees we are rendering, it will set the pending state, but not cause a new render, as it knows the current render that is going on will pick up this state change

```js
class FeactCompositeComponentWrapper {
    ...
    updateComponent(prevElement, nextElement) {
        this._rendering = true;

        // entire rest of the method

        this._rendering = false;
    }
}

function FeactComponent() {
}

FeactComponent.prototype.setState = function(partialState) {
    const internalInstance = FeactInstanceMap.get(this);

    internalInstance._pendingPartialState =
        internalInstance._pendingPartialState || [];

    internalInstance.push(partialState);

    if (!internalInstance._rendering) {
        FeactReconciler.performUpdateIfNecessary(internalInstance);
    }
}
```

#### ✨ setState pitfalls

Now that we understand how setState works and the overall concept on how batching works, we can see there are some pitfalls in setState. The problem is it takes several steps to update a component’s state, as each pending partial state needs to get applied one by one. That means using this.state when setting state is dangerous

```js
componentWillReceiveProps(nextProps) {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
}
```

This contrived example shows what I mean. You might expect counter to get 2 added to it, but since states are being batched up, the second call to setState has the same values for this.state as the first call, so counter will only get incremented once.

React solves this problem by allowing a callback to be passed into setState

```js
componentWillReceiveProps(nextProps) {
    this.setState((currentState) => ({
        counter: currentState.counter + 1
    });
    this.setState((currentState) => ({
        counter: currentState.counter + 1
    });
}
```

By using the callback flavor of setState, you get access to the intermediate values state works through. If Feact were to implement this, it’d look like

```js
_processPendingState() {
    const inst = this._instance;
    if (!this._pendingPartialState) {
        return inst.state;
    }

    let nextState = inst.state;

    for (let i = 0; i < this._pendingPartialState.length; ++i) {
        const partialState = this._pendingPartialState[i];

        if (typeof partialState === 'function') {
            nextState = partialState(nextState);
        } else {
            nextState = Object.assign(nextState, patialState);
        }
    }

    this._pendingPartialState = null;
    return nextState;
}
```

https://codepen.io/navinnavi19/pen/KKPombg

### 🎈 Part Five: Transactions

#### ✨ Transactions everywhere

```
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
```

If Feact was to add transactions, its (very) simple take would be something like this:

```js
class Transaction {
  constructor(wrapper) {
    this._wrapper = wrapper;
  }

  perform(method) {
    const wrapperValue = this._wrapper.initialize();

    method();

    this._wrapper.close(wrapperValue);
  }
}
```

#### ✨ A use case for transactions

Why all the fuss? Mostly transactions enable React to do what it needs to do while keeping the browser happy.

For example, consider this dumb little React app, it swaps a button and a text input every 5 seconds

```js
const MyComp = React.createClass({
  getInitialState() {
    return {
      textFirst: true
    };
  },

  componentDidMount() {
    setInterval(() => {
      this.setState({
        textFirst: !this.state.textFirst
      });
    }, 5000);
  },

  render() {
    let children;

    if (this.state.textFirst) {
      children = [<input key="text" type="text" />, <button key="button" />];
    } else {
      children = [<button key="button" />, <input key="text" type="text" />];
    }

    return <div>{children}</div>;
  }
});

ReactDOM.render(<MyComp />, document.body);
```

The trouble with this app is the input element. Whenever you move an input element in the DOM (for example, `parentElement.insertBefore(myInputElement, someOtherChild))`, the browser clears out its selection. So if the user has highlighted some text in the input, then something about how your app renders causes React to move the input in the DOM, that selection gets cleared, frustrating your user. To solve this problem, React component updates are done in a transaction. During the initialize phase of the transaction, React grabs the current selection state of the browser and stores it. Then in the close phase, it takes that previous value and makes sure it gets restored. The transactions that happen during a React render handle many other things such as maintaining the window’s scroll position, and a lot of other necessary book keeping. Another benefit of the transaction pattern is it becomes easy to store the state of the browser, do a whole bunch of work, then restore the state at the very end, rather than having to continually worry about accidentally scrolling the window or clearing an input selection.

#### ✨ Feact transactions

```js
const SELECTION_RESTORATION = {
    initialize() {
        const focusedElem = document.activeElement;

        return {
            focusedElem,
            selection: {
                start: focusedElem.selectionStart,
                end: focusedElem.selectionEnd
            }
        };
    },

    close(priorSelectionInformation) {
        const focusedElem = priorSelectionInformation.focusedElem;
        focusedElem.selectionStart =
            priorSelectionInformation.selection.start;

        focusedElem.selectionEnd =
            priorSelectionInformation.selection.end;
    }
};

const updateTransaction = new Transaction(SELECTION_RESTORATION);

FeactReconciler = {
    ...
    receiveComponent(internalinstance, nextElement) {
        updateTransaction.perform(function() {
            internalInstance.receiveComponent(nextElement);
        });
    }
    ...
}
```

Learned a lot from this React Internals Series.
