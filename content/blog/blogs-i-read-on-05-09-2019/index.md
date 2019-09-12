---
title: Notes on Blogs I Read From 5th Sept to
date: "2019-09-12"
description: Notes taken while going through Web Development Blogs
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
