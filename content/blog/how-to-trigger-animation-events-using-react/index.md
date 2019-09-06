---
title: How to Trigger Animation Events using React
date: "2019-09-05"
description: Notes taken while learning JavaScript from How to Trigger Animation Events using React By Sonny Recio
---

🚀 [How to Trigger Animation Events using React](https://blog.bitsrc.io/how-to-trigger-animation-events-using-react-a6c3256b21c6)

👨‍💻 By [Sonny Recio](https://blog.bitsrc.io/@reciosonny)

`How CSS animations were made?`

Animation property has a couple of sub-elements:

- **animation-name** — specifies the keyframe name
- **animation-duration** — specifies how long the animation should run
- **animation-timing-function** — this configures the timing of the animation, which animation transitions through keyframes

Animation property can be declared like this:

```css
.mydiv {
  animation-duration: 3s;
  animation-name: my-animation;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

Or shorthand version like this:

```css
/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s my-animation;
```

[MDN-CSS Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

https://codepen.io/reciosonny/pen/oryxrm

https://codepen.io/reciosonny/pen/zVgxwX

**React** offers some built-in events for catching animation transitions in our components through the use of `SyntheticEvent` which is a **cross-browser wrapper around the browser’s native event**. Meaning, our React components can use native events because of this wrapper, including `preventDefault()` and `stopPropagation()` native events.

`SyntheticEvent` has some support for animation, these are:

- **onAnimationStart** — This event triggers the moment the animation started
- **onAnimationEnd** — This event triggers the moment the animation ended
- **onAnimationIteration** — This event triggers the moment the animation starts looping again

[Animation Start and Stop React Example](https://codesandbox.io/s/animation-start-finish-y6f6o)

[Animation Iteration](https://codesandbox.io/s/animation-iteration-vb3pt)
