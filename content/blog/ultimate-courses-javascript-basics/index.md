---
title: Ultimate Courses - JavaScript Basics
date: "2019-07-30"
description: Ultimate Courses - JavaScript Basics Notes
---

## Course Notes

![Ultimate Courses](images/4.png)

![JavaScript Basics](images/2.png)

One of the most recommended courses in Twitter crafted by Todd Motto with [Ultimate Courses](https://ultimatecourses.com/course/javascript-basics)

## The Missing Introduction to JavaScript

![The Missing Introduction to JavaScript](images/3.png)

### The Missing Introduction to JavaScript

![The Missing Introduction to JavaScript](images/5.png)

`Course Intro`

![Course Offers](images/6.png)

`Overview of what JavaScript is!! and its features`

![Intro to JavaScript](images/7.png)

`Interpreted vs Compiled Language Differences`

![Interpreted vs Compiled](images/8.png)

- Interpreted Language - No need to be compiled for the execution. Execute directly at Run time.
- Compiled Language - Need a compiler which compiles during the build time.

`Multi-Paradigm Language`

![Multi-Styled-Programming-Language](images/9.png)

- JavaScript supports multiple styles and designs of writing the code.

`History of JavaScript`

![History Of JavaScript](images/10.png)

![History of JavaScript](images/11.png)

- JavaScript conforms to ECMAScript(ES) Standards.
- Browser vendors should comply to this to reduce the cross-browser bugs.
- Now ECMA Script is being updated yearly.
- Not all browsers supports all the latest ES Features.

`Browser Support`

![Browser Support](images/12.png)

- Babel compiles our latest JavaScript code into a code that will be supported by all the browsers including older versions.
- Basically it complies ES2015 and Beyond code into ES5 which is supported by all the browsers.

`JavaScript in Front-End vs Back-End`

![JavaScript at Front-End vs Back-End](images/15.png)

`Front End - V8 Engine by Google`

![V8 Engine](images/13.png)

- Browser has something called Document Object Model(DOM).
- JavaScript can interact with DOM Environment to manipulate it.
- One need to learn JavaScript Language along with DOM to fully understand the concept.

![DOM](images/16.png)

`Back End - Node JS`

![Node JS](images/14.png)

- Node JS has V8 Engine but does not have DOM.
- It has something called Server Side Environment which it can interact with!

### Modern JavaScript

![Modern JavaScript](images/17.png)

`Tooling and Automating JavaScript Development Environtments`

![Development Workflow](images/18.png)

![Development Workflow - Tools](images/19.png)

![Development Workflow Detailed](images/20.png)

### External Resources

![External Resources](images/21.png)

[Node JS](https://nodejs.org/en) | [NPM](https://www.npmjs.com) | [Babel](https://babeljs.io) | [Web-Pack](https://webpack.js.org) | [ESLint](https://eslint.org) | [MDN Firefox](https://developer.mozilla.org/en-US) | [ECMA International](https://www.ecma-international.org/)

## Variables, Declarations and Assignment

![Variables, Declarations and Assignment](images/22.png)

### Project Setup

`Tools`

![Tools](images/23.png)

[VS Code](https://code.visualstudio.com/download) | [Google Chrome](https://www.google.co.uk/chrome/) | [Node.js](https://nodejs.org/en/download/)

`Project Links`

![Project Links](images/24.png)

[Starter Project Source](https://github.com/ultimatecourses/javascript-basics)

`Setup Instructions`

Join Ultimate Courses - [Slack Channel](https://slack.ultimatecourses.com/)

![Setup Instructions](images/25.png)

### Project Walk-through and Install

**Project Walk-through**

- Clone the starter application from source code - GitHub [link](https://github.com/ultimatecourses/javascript-basics).

- `git clone https://github.com/ultimatecourses/javascript-basics`

![Initial folder structure](images/27.png)

- Change the current directory to "javascript-basics".
- `cd javascript-basics`
- Now lets start with the `index.html` - base of our project.

`Path: ./index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ultimate Courses</title>
  </head>
  <body>
    <header class="header">
      <div class="logo">
        <div class="logo-ultimate"></div>
        <p class="logo-name">Ultimate Courses<span>&trade;</span></p>
      </div>
    </header>
    <div id="app"></div>
  </body>
</html>
```

- We will be seeing the source code here and console window from Chrome's Dev-Tools to debug our application.

`Path: ./src/index.js`

```js
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";
```

1. Imported the css file into this java script file
2. We are now accessing the HTML's DOM Element `<div id="app"></div>` using `document.getElementById('app')`.
3. Setting it's `innerHTML` as `<h1>JavaScript Basics</h1>`.

- `assests` folder has all the required files for styling(CSS), font and images

![assets](images/28.png)

- `.babelrc` has the recommended basic configuration required by the Babel.

`Path: ./.babelrc`

```json
{
  "presets": ["@babel/preset-env"]
}
```

- `.eslint.json` is a powerful tool to help us with the Code Quality.
- Display's errors in case of a bad quality of code written as red squiggly.

`Path: ./.eslint.json`

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off"
  }
}
```

`Path: ./webpack.config.babel.js`

```js
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      favicon: "assets/img/favicon.png"
    })
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    contentBase: "./dist",
    inline: true,
    port: 8080,
    host: "0.0.0.0"
  }
};
```

- Let's breakdown the web-pack file.
- Basic setup `entry` path for giving our entry js file and `output` path to give out the compiled code.
- Then rule with couple of loaders in bottom to top order telling how web-pack should compile our application.
- `HtmlWebpackPlugin` to include our `index.html` file as the template and `favicon` path to be generated and added to the final compiled `index.html`
- `devServer` to configure our development server.
- `mode` can be set to development/production.

`Path: ./package.json`

```js
{
  "name": "javascript-basics",
  "version": "1.0.0",
  "description": "Starter Repo for JavaScript Basics",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git://github.com/ultimatecourses/javascript-basics.git"
  },
  // Scripts that can be run using `npm`
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch", // `npm run watch`
    "start": "webpack-dev-server", // `npm start`
    "build": "webpack" // `npm run build`
  },
  "author": "Ultimate Courses",
  "license": "MIT",
  // Dev Dependencies that your project relies on!!!
  "devDependencies": {
    "@babel/core": "^7.4.3", // '^'-> Satisfies Latest Version
    "@babel/preset-env": "7.4.3", // Fixed Version
    "@babel/register": "^7.4.0",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.1",
    "eslint": "^5.16.0",
    "eslint-loader": "^2.1.2",
    "eslint-plugin-import": "^2.17.1",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.3.1"
  }
}
```

**Install**

- Dependencies are the packages that are available in NPM registry.
- Install them using `npm install`.
- Creates a `package-lock.json` which should be committed to the version control and `node_modules` which has all the files requires by our dependencies.
- This is useful to check the integrity of these packages.
- Run `npm start` to start the application by the command `webpack-dev-server`.
- This command runs the code belongs to its dependency.
- Spins up the application in `http://0.0.0.0:8080/`.
- Build the project with `npm build`. `dist` folder contains all compiled code is generated.

**Extras**

`Path: ./gitignore`

```git
node_modules
dist/*
```

- Remove the `.git` folder and `git init` to make your own git container and commit the files.
- Our `node_modules` and `dist` directory will be excluded from git watch.

![Built Project](images/26.png)

Next we will see more about the project.

### Hello `<script>` World

- Lets learn about the `<script>` tag.
- It is an HTML element which holds our javascript code.
- It has two attributes `src` and `type` and `<noscript>` tag.
- `src` - path to your JavaScript file.
- `type` - `text/javascript` which means that this script is a JavaScript

```html
<script>
  console.log("Hello World!!");
</script>
```

- Output can viewed in Chrome's Dev-Tools at Console Window.
- `script` tags can be placed in `head` tag or in the end of `body` tag.
- `noscript` - to inform the user about the disabled JavaScript.

```html
<noscript>Your Javascript is disabled!!</noscript>
```

- Above code will be executed only when the browsers does not have the JavaScript Enabled.

> **Note:**
> JavaScript can be disabled manually in the browser by going to the devTools->Preference->Debugger-> Click the checkbox `Disable JavaScript`

![Disable JavaScript Manually](images/29.jpg)

### Understanding `var` and Hoisting

- Learned about the `var` reserved keywords.
- Declarations
- Initialization
- `undefined` - More clearance on this
- Hoisting - whatever or wherever a variable is declared, JavaScript will take and declare them at the top of the file.

```js
// Declaration
var a;
console.log(a); // `undefined`
// Initialization
a = 2;
console.log(a); // 2
```

### Block scoping and `let`

- Scoped - Within the nearest block.
- Will not be hoisted.
- Only available within the respective block.
- Can declare variables of same name in the same file within different block.

```js
// `let` declared and initialized
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
console.log(a); // 5
```

### Variables with `const`

- Scoped
- Not bind-able to another value again
- Immutable - the variable itself
- Mutable - Objects of that variable

```js
const a = 10;
console.log(a); // 10
a = 11; // Assignment to constant variable.
```

## Conditional Logic

![Conditional Logic](images/30.png)

### Truthy and Falsy Values

`Intro`

```js
console.log(1 == 1); // true
console.log(1 === 1); // true

console.log(1 == "1"); // true
console.log(1 === "1"); // false
```

`Truthy`

```js
console.log(!!true)
console.log(Boolean(true)
console.log(!!{})
console.log(!![])
console.log(!!new Date())
console.log(!!"0")
console.log(!!42)
console.log(!!-42)
console.log(!!43.3)
console.log(!!-43.3)
```

`Falsy`

```js
console.log(!!false)
console.log(Boolean(false)
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
```
