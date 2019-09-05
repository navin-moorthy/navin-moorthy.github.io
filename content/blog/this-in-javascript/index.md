---
title: What is “this” in JavaScript
date: "2019-09-05"
description: Notes taken while going throught the What is “this” in JavaScript by Rajat S
---

🚀 [What is “this” in JavaScript?](https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7)

👨‍💻 By [Rajat S](https://blog.bitsrc.io/@geeky_writer_)

♦ `“this” in Global Environment`

⛺ ENV: **Browser**

```js
> this === window
true
```

⛺ ENV: **Node**

```js
// Node CLI
> this === global
// true
```

❄ **Example:**

To test this, create a file called index.js with the following code inside it:

`console.log(this === global);`

Then run this file using the node command:

```js
$ node index.js
// false
```

> The reason for this is that inside a JavaScript file, this equates to `module.exports` and not `global`.

♦ `“this” inside Functions`

In your index.js file, write a very simple function that simply checks if this is equal to the global object.

```js
function test() {
  console.log(this === global);
}

test();
```

If we run this code using `node`, we will the output as `true`. But we add "use strict" at the top of the file and run it again, we will get a false output because now the value of `this` is `undefined`.

**Little Example:**

```js
function Hero(heroName, realName) {
  this.realName = realName;
  this.heroName = heroName;
}
const superman = Hero("Superman", "Clark Kent");
console.log(superman);
// undefined
```

The reason behind this is that since the function is not written in strict mode, `this` refers to the `global` object.

If we run this code in strict mode, we will get an error because JavaScript does not allow us to assign properties realName and heroName to undefined. This actually is a good thing because it **prevents us from creating global variables.**

♦ `“this” inside constructors`

```js
function Hero(heroName, realName) {
  this.realName = realName;
  this.heroName = heroName;
}
const superman = new Hero("Superman", "Clark Kent");
console.log(superman);
// Hero { realName: 'Clark Kent', heroName: 'Superman' }
```

JavaScript does not have any special constructor functions. All we can do is convert a function call into a constructor call using `new` operator

When a constructor call is made, a `new` object is created and set as the function’s this argument. The object is then implicitly returned from the function, unless we have another object that is being returned explicitly.

```js
function Hero(heroName, realName) {
  this.realName = realName;
  this.heroName = heroName;
  return {
    heroName: "Batman",
    realName: "Bruce Wayne"
  };
}
const superman = new Hero("Superman", "Clark Kent");
console.log(superman);
// { heroName: 'Batman', realName: 'Bruce Wayne' }
```

we will see that the above `return` statement overwrites the constructor call.

The only scenario where the return statement doesn’t overwrite the constructor call is if the return statement tries to return anything that is not an object.

♦ `“this” in Methods`

When calling a function as a method of an object, this refers to the object, which is then known as the receiver of the function call.

Here, I have a method `dialogue` inside an object called `hero`. The `dialogue‘s` this value then refers to `hero` itself. So `hero` here will be know as the receiver of the `dialogue` method’s call.

```js
const hero = {
  heroName: "Batman",
  dialogue() {
    console.log(`I am ${this.heroName}!`);
  }
};

hero.dialogue();
// I am Batman!
```

Here, I am storing the reference to `dialogue` inside another variable and calling the variable as a function. Run this with `node` and you will see that `this` returns an `undefined` because the method has lost track of the receiver. `this` now refers to `global` instead of `hero`.

```js
const hero = {
  heroName: "Batman",
  dialogue() {
    console.log(`I am ${this.heroName}!`);
  }
};

const saying = hero.dialogue;
saying();
// I am undefined
```

♦ `call() and apply()`

```js
function dialogue() {
  console.log(`I am ${this.heroName}`);
}
const hero = {
  heroName: "Batman"
};

dialogue.call(hero);
// I am Batman
// or
dialogue.apply(hero);
// I am Batman
```

But if you are using `call` or `apply` outside of strict mode, then passing null or undefined using call or apply will be ignored by the JavaScript engine. This is one of the reasons why it is usually suggested to always write our code in strict mode.

♦ `bind()`

The `bind()` method allows us to **permanently** tie a `this` argument to a value. So in the below code snippet, `bind` will create a new `dialogue` function and set its `this` value to `hero`.

```js
const hero = {
  heroName: "Batman",
  dialogue() {
    console.log(`I am ${this.heroName}`);
    return true;
  }
};

const batman = hero.dialogue.bind(hero);

const superman = {
  heroName: "Superman"
};

console.log(batman.call(superman));
// I am Batman
// true

hero.dialogue.call(superman);
// I am Superman
```

By doing so, our `this` cannot be changed by even `call` or `apply` methods.

♦ `Catching “this” inside an Arrow Function`

```js
const batman = this;

const bruce = () => {
  console.log(this === batman);
};

bruce();
// true
```

we are storing the value of a `this` in a **variable** and then comparing the value with a `this` value that is inside an **arrow** function. Running `node index.js` in our terminal should give us `true` as output.

```js
const counter = {
  count: 0,
  increase() {
    setInterval(function() {
      console.log(++this.count);
    }, 1000);
  }
};
counter.increase();
// NaN
// NaN
// NaN
// ...
```

Running this code using `node index.js` will only give an increase list of `NaNs`. This is because `this.count` is not referring to the `counter` object. It actually refers to the `global` object.

```js
const counter = {
  count: 0,
  increase() {
    setInterval(() => {
      console.log(++this.count);
    }, 1000);
  }
};
counter.increase();
// 1
// 2
// 3
// ...
```

Our callback now uses `this` binding from the `increase` method, and the `counter` now works as it should.

**Note:** Do not try to write `this.count + 1` instead of `++this.count`. The former of these two will only increase the value of count once, and return the that value on each iteration.

♦ `“this” in Classes`

```js
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  dialogue() {
    console.log(`I am ${this.heroName}`);
  }
}

const batman = new Hero("Batman");

batman.dialogue();
// I am Batman
```

`this` inside the constructor refers to the newly created instance of that class. When we call `batman.dialogue()`, we invoke `dialogue()` as a method with batman as a receiver.

But if we store a reference to the `dialogue()` method, and later invoke it as a function, we once again lose the receiver of the method and the this argument now refers to undefined.

```js
const say = batman.dialogue();
say();
```

The reason for error is that **_JavaScript classes are implicitly in strict mode_**. We are invoking `say()` as an function without any autobinding. To solve this, we will need to manually `bind()` to tie this `dialogue()` function to batman.

```js
const say = batman.dialogue.bind(batman);
say();
```

We can also do this binding inside the constructor method.
