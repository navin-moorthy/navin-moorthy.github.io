---
title: Notes on Blogs I Read From 5th Sept to 13th Sept
date: "2019-09-17"
description: Notes taken while going through Web Development Blogs with highlights useEffect, threejs, Array methos implementations, 9 tips for better code writing and 7 tips for to boost productivity
---

## 📅 05-09-2019

### 🚀 [Bit](https://bit.dev/) encapsulates components in your projects with all their files and dependencies, so they can run anywhere across your applications

[Bit Intro](https://www.youtube.com/watch?v=E5lgoz6-nfs)

---

> Pluralsight has lot of High Quality Developement Videos

---

### 🚀 [Globalization Tools - The State of the Web](https://www.youtube.com/watch?v=F2N-evGOcxc)

👨‍💻 By [Google Chrome Developers](https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw)

---

## 📅 06-09-2019

### 🚀 [How To Write Better Code in React](https://blog.bitsrc.io/how-to-write-better-code-in-react-best-practices-b8ca87d462b0)

👨‍💻 By [Rajat S](https://blog.bitsrc.io/@geeky_writer_)

9 Useful Tips for writing better code in [React](https://reactjs.org/): Learn about Linting, propTypes, PureComponent and more.

- [EsLint](https://eslint.org/)
- [propTypes](https://www.npmjs.com/package/prop-types) and defaultProps
- Know when to make new components
  - Is your code’s functionality becoming unwieldy?
  - Does it represent its own thing?
  - Are you going to reuse your code?
- Component vs PureComponent vs Stateless Functional Component
  - Stateless Functional Component - Does not using any kind of state, refs, or lifecycle methods.
  - Pure Components - Does not trigger a re-render if props do not change.
  - To check if re-render is unnecessary - [why did you update npm](http://github.com/maicki/why-did-you-update)
- Use [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- Use Inline Conditional Statements
- Use [Snippet Libraries](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) whenever possible
- [React Internals](http://www.mattgreer.org/articles/react-internals-part-one-basic-rendering/) — Learn how React works
- Use tools like Bit / StoryBook to improve your component development workflow

---

## 📅 10-09-2019

### 🚀 [How To Fetch Data From An API With React Hooks](https://codeburst.io/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd)

👨‍💻 By [Indrek Lasn](https://codeburst.io/@indreklasn)

[useState and useEffect Simple Example](https://stackblitz.com/edit/react-usestate-useeffect)

- [React Hooks Examples](https://daveceddia.com/useeffect-hook-examples/)
- [“Functional React: Quickstart with React Hooks, Redux and MobX” Book](https://amzn.to/2STuAMO)

### 🚀 [How the useEffect Hook Works](https://daveceddia.com/useeffect-hook-examples/)

With `useEffect`, you can handle lifecycle events directly inside function components. Namely, three of them: `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

[Stackblitz Example of useEffect() render and unmount](https://stackblitz.com/edit/useeffect-render-unmount)

Cleanup function you can (optionally) return from `useEffect` isn’t only called when the component is unmounted. It’s called every time before that effect runs – to clean up from the last run. This is actually more powerful than the `componentWillUnmount` lifecycle because it lets you run a side effect before and after every render, if you need to.

Another way to think of this array: it should contain every variable that the effect function uses from the surrounding scope. So if it uses a prop? That goes in the array. If it uses a piece of state? That goes in the array.

It will print “mounted” after the initial render, remain silent throughout its life, and print “unmounting…” on its way out.

This comes with a big warning, though: passing the empty array is prone to bugs. It’s easy to forget to add an item to it if you add a dependency, and if you miss a dependency, then that value will be stale the next time useEffect runs and it might cause some strange problems.

Remember that `useState` is stateful (read more about useState). It only uses the initial state once, the first time it renders. After that it’s ignored. So it’s safe to pass a transient value, like a prop that might change or some other variable.

- [Dan’s demo from React Conf](https://www.youtube.com/watch?v=V-QO-KO90iQ&list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ&index=2&t=0s)
- [Nik Graf’s Collection of React Hooks](https://nikgraf.github.io/react-hooks/)

## 📅 11-09-2019

### 🚀 [Red Stapler](https://redstapler.co)

- [How to Create "Google Style" Login Form](https://www.youtube.com/watch?v=Dtxp3MAfz44)
- [Nebula Cloud Particles Effect Three.js Tutorial](https://www.youtube.com/watch?v=5f5wwQb22tE)

https://codepen.io/navinnavi19/pen/LYPmEZE

- [Three.js Realistic Rain Effect](https://redstapler.co/three-js-realistic-rain-tutorial/)

https://codepen.io/navinnavi19/pen/qBWYORJ

- [SketchFab free 3D Models](https://sketchfab.com)
- [Add 3D Model to WebSite in 5 Minutes - Three.js Tutorial](https://www.youtube.com/watch?v=1TeMXIWRrqE)

https://codepen.io/navinnavi19/pen/mdbLEpd

## 📅 12-09-2019

### 🚀 [Color Tools For Designers 2019](https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab)

### 🚀 [Understand array methods by implementing them — all of them](https://dev.to/bnevilleoneill/understand-array-methods-by-implementing-them-all-of-them-iha)

👨‍💻 By [Brian Neville-O'Neill](https://dev.to/bnevilleoneill)

- Test Cased by Author in [this repo](https://github.com/maciejcieslar/array-methods)
- [More JS Katas](https://github.com/loujaybee/JS-Katas)

### 🚀 [value vs references](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

### Repls

- [Values and References](https://repl.it/@NavinA/values-and-references)
- [forEach Implementation](https://repl.it/@NavinA/forEach-implementation)
- [map Implementation](https://repl.it/@NavinA/map-implementation)

## 📅 13-09-2019

### 🚀 [Memoization in JS](https://www.carloscaballero.io/understanding-javascript-typescript-memoization)

- [Original Repo for Example](https://github.com/Caballerog/blog/blob/master/memoization/index.js)
- [Fast Memoize](https://github.com/caiogondim/fast-memoize.js)
- [Moize](https://github.com/planttheidea/moize)
- [Memoizee](https://github.com/medikoo/memoizee)
- [Lodash-Decorators](https://github.com/steelsojka/lodash-decorators)

### 🚀 [Imperative vs Declarative Programming](https://tylermcginnis.com/imperative-vs-declarative-programming/)

### 🚀 [Understand array methods by implementing them — all of them](https://dev.to/bnevilleoneill/understand-array-methods-by-implementing-them-all-of-them-iha)

### 🚀 [7 Tips to boost your productivity as a web developer 🚀](https://dev.to/mustapha/7-tips-to-boost-your-productivity-as-a-web-developer-4jh7)

1. A faster `querySelector` - Note that `querySelectorAll` returns a `NodeList` while `$$` returns an `array`.

```js
$(".some-class"); // instead of document.querySelector
$$(".some-class"); // instead of document.querySelectorAll
```

2. Inspecting an element - Another useful feature you can use when you inspect an element (with the inspect tool of the devtools) is `$0`. After inspecting an element you can access it in the console by typing `$0`.
3. `console.table()` - Gets the logs of Array or Objects in a table.
4. `console.dir()` - This method will let you log the javascript object of a DOM element instead of its HTML.
5. `document.designMode = 'on'` - edit the text of any webpage.
6. object destructuring
7. [array-and-object-destructuring](https://repl.it/@NavinA/array-and-object-destructuring)

### 🚀 [CSS Grid: illustrated introduction](https://dev.to/mustapha/css-grid-illustrated-introduction-52l5)

👨‍💻 By [Mustapha](https://dev.to/mustapha)

### Repls

- [Memoization in JS](https://repl.it/@NavinA/memoization)
- [Pure vs Impure Function](https://repl.it/@NavinA/pure-function-vs-impure-function)
- [Imperative vs Declarative Programming](https://repl.it/@NavinA/imperative-vs-declarative-programming)
- [array-and-object-destructuring](https://repl.it/@NavinA/array-and-object-destructuring)
- [filter Implementation](https://repl.it/@NavinA/filter-implementation)
- [reduce Implementation](https://repl.it/@NavinA/reduce-implementation)

## 📅 15-09-2019

### 🚀 [Flexbox Zombies](https://flexboxzombies.com/p/flexbox-zombies)

## 📅 16-09-2019

### 🚀 [Understand array methods by implementing them — all of them](https://dev.to/bnevilleoneill/understand-array-methods-by-implementing-them-all-of-them-iha)

### Repls

- [find-index-implementation](https://repl.it/@NavinA/find-index-implementation)
- [find-implementation](https://repl.it/@NavinA/find-implementation)
- [indexOf-implementation](https://repl.it/@NavinA/indexOf-implementation)
- [lastIndexOf-implementation](https://repl.it/@NavinA/lastIndexOf-implementation)
- [every-implementation](https://repl.it/@NavinA/every-implementation)
- [some-implementation](https://repl.it/@NavinA/some-implementation)
- [includes-implementation](https://repl.it/@NavinA/includes-implementation)
- [push-implementation](https://repl.it/@NavinA/push-implementation)
- [concat-implementation](https://repl.it/@NavinA/concat-implementation)
- [flat-implementation](https://repl.it/@NavinA/flat-implementation)

### 🚀 [Flexbox Zombies](https://flexboxzombies.com/p/flexbox-zombies)

## 📅 17-09-2019

### 🚀 [Flexbox Zombies](https://flexboxzombies.com/p/flexbox-zombies)
