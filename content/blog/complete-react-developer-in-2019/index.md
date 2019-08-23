---
title: Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)
date: "2019-08-23"
description: Notes taken while learning Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)
---

![Hero Image](images/1.jpg)

Become a Senior [React](https://reactjs.org/) Developer! Build a massive E-commerce app with [Redux](https://redux.js.org/), [Hooks](https://reactjs.org/docs/hooks-intro.html), [GraphQL](https://graphql.org/), [Context-API](https://reactjs.org/docs/context.html), [Stripe](https://stripe.com/), [Firebase](https://firebase.google.com/)

Created by [Andrei Neagoie](https://www.udemy.com/user/andrei-neagoie/), [Yihua Zhang](https://www.udemy.com/user/yihua-zhang-5/)

Twitter : [Andrei Neagoie](https://twitter.com/AndreiNeagoie)

Udemy Link - [Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/complete-react-developer-zero-to-mastery)

🌟 _Get all the Sections from the Udemy Course_

```js
$$(".section--title--eCwjX").map(sections => sections.textContent);
```

> Images pasted here are captured using Chrome's Capture Screenshot Feature

![Get Started](images/4.png)

## Section 1: Introduction

![Introduction](images/2.png)

🌟 _Get titles for Section 1 & 2_

```js
$$(".curriculum-item-link--curriculum-item--KX9MD").map(
  title => title.textContent
);
```

### 1. Course Outline

![Course Outline](images/3.png)

### 2. Join Our Online Classroom

Join [Zero to Mastery Discord Channel](https://discord.gg/nVmbHYY)

[![Zero to Mastery](images/5.png)](https://discord.gg/nVmbHYY)

### 3. Exercise: Meet The Community

Introduce yourself in the Discord Community

## Section 2: React Key Concepts

### 4. React Concepts

![React Concepts](images/6.png)

### 5. The Birth of React.js

🌟 _Traditional HTML, CSS and JavaScript with less cross-browser support_

🌟 _Files are requested and served from the browser every time_

![Traditional](images/7.png)

🌟 _JQuery and Backbone JS along with AJAX provided the cross-browser support and handling JS much easier_

![JQuery and BackBoneJS](images/8.png)

🌟 _In `2010`, Google introduced SPA(Single Page Application) with AngularJS using concepts of MVC - Model View Controller and containers_

🌟 _As the size of the application grows, it becomes harder to manage the flow with many container._

![AngularJS](images/9.png)

🌟 _In `2013`, Facebook comes with React Framework to improving the drawbacks of AngularJS_

![Birth Of React](images/10.png)

🌟 _Since then AngularJS evolved to Angular(Now Angular 8) and React with lots of new features._

![React Concepts](images/15.png)

### 6. Declarative vs Imperative

Imperative - Modify the DOM one by one based on the current app state using JavaScript

![React Declarative](images/11.png)

Declarative - This is where React is developed for, we just need say the state and how the page should look like. React will do everything for us which increases the performance of DOM manipulation.

### 7. Component Architecture

![React components](images/12.png)

> Install [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) from Chrome Web Store to debug the Original React Components.

### 8. One Way Data Flow

![React Flow](images/13.png)

![React one way data flow](images/14.png)

### 9. UI Library

![React Everywhere](images/16.png)

- [React Desktop](https://reactdesktop.js.org/)
- [React Blessed - Terminal app](https://github.com/Yomguithereal/react-blessed)
- [React 360](https://facebook.github.io/react-360/)

### 10. How To Be A Great React Developer

![React Keywords](images/17.png)

![Job of a React Developer](images/18.png)

## Section 3: React Basics

![React Basics](images/19.png)

🌟 _Script used to get all the titles under this topic_

```js
[
  ...document.getElementsByClassName("curriculum-item-link--title--zI5QT")
].forEach(title => {
  console.log(title.textContent);
});
```

### 11. Section Overview

- Learn about installing [Node](https://nodejs.org/en/) directly
- Learn about installing [NVM-Node](https://github.com/nvm-sh/nvm) indirectly(I personally prefer this)
- Use [CodeSandbox](https://codesandbox.io/) or [StackBlitz](https://stackblitz.com/) to code online.
- Learn about [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

### 12. Environment Setup for Mac

- Install [VSCode](https://code.visualstudio.com/)
- Install [Yarn](https://yarnpkg.com/)
- Install [Node](https://nodejs.org/en/) directly
- Install [NVM-Node](https://github.com/nvm-sh/nvm) indirectly(I personally prefer this)

### 13. Environment Setup For Windows

- Install [GitBash](https://gitforwindows.org/)
- Install [VSCode](https://code.visualstudio.com/)
- Install [Node](https://nodejs.org/en/) directly
- Install [NVM-Node](https://github.com/nvm-sh/nvm) indirectly(I personally prefer this)
- Install [Yarn](https://yarnpkg.com/)

### 14. NPM vs YARN

🌟 _Install dependencies from package.json_

`npm install` == `yarn`

🌟 _Install a package and add to package.json_

`npm install package --save` == `yarn add package`

🌟 _Install a devDependency to package.json_

`npm install package --save-dev` == `yarn add package --dev`

🌟 _Remove a dependency from package.json_

`npm uninstall package --save` == `yarn remove package`

🌟 _Upgrade a package to its latest version_

`npm update --save` == `yarn upgrade`

🌟 _Install a package globally_

`npm install package -g` == `yarn global add package`

### 15. Yihua's VSCode font and settings

- I personally love [Fira Code](https://github.com/tonsky/FiraCode) and updated VS Code setting to use ligaments
- Install the below extension if needed,

![VS Code Extensions 1](images/20.png)

![VS Code Extensions 2](images/21.png)

### 16. Create React App

🌟 _[Basic app](https://zhangmyihua.github.io/monsters-rolodex/) that we are going to build_

![Basic app](images/22.png)

- `npx create-react-app monsters-rolodex`
- `cd monsters-rolodex`
- `npm install`
- `npm start`
- Hit the browser `http://localhost:8080`
- Voila Starter Application is Up with Live Reload
- Uses Babel & WebPack in the background.

### 17. Create React App 2

![Starter app](images/23.png)

`package.json`

```json
{
  "name": "monsters-rolodex",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },
  "scripts": {
    // start the development server
    "start": "react-scripts start",
    // build the project - production grade
    "build": "react-scripts build",
    // used of testing the react app
    "test": "react-scripts test",
    // eject the configurations that create react app did automatically
    "eject": "react-scripts eject"
    // only the configurations are ejected not the application
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

🌟 _App start from index.html_

`public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

_public folder also contains `favicon.ico` and `manifest.json` for PWA_

_`index.html` is referenced by our React app at `src/index.js`_

`src/index.js`

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

_`ReactDOM` renders our `<App />` by replacing the element with id `root`_

🌟 _Global Styles and Service Workers are imported here_

`src/index.css`

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```

`src/App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

🌟 _Root of our React Component_

🌟 _App.css and logo.svg are imported here_

`src/App.css`

```css
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

`src/App.test.js`

🌟 _It is used for testing_

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
```

🌟 _Extras_

`.gitignore`

```text
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

`node_modules` will be the home for our modules installed via npm.

`package-lock.json` will be used for checking the integrity of the packages installed.

### 18. React Project Setup

![Project Setup](images/24.png)

### 19. Don't Eject

`npm run eject`

Gives the Webpack and other configuration that are created under-hood when creating a new react app using `creat-react-app`

### 20. Class Components

`React.Component`

[React.Component Documentation](https://reactjs.org/docs/react-component.html)

![Class Components 2](images/25.png)

`src/App.js`

```js{1,5-13,18-19}
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Navin"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string} is editing this App</p>
          <button onClick={() => this.setState({ string: "Navi" })}>
            Dont like Navin - Click Me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
```

![Class Components 1](images/26.png)

- Import `{Component}` from `react`
- Change the `App` function into a class extending `Component
- Utilize the `state` from Component by a `contructor` function with `super()`.
- Initialize a variable in the state using `this.state`
- Change the state using `this.setState()` when button clicked `onClick()`

### 21. Thinking In JSX

Learned about how state rerenders the components on an event trigger.

### 22. Dynamic Content

🌟 _Learned about displaying dynamic contents using map()_

`src/App.js`

```js
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosters: [
        { name: "Frankenstein", id: 1 },
        { name: "Dracula", id: 2 },
        { name: "Zombie", id: 3 }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.mosters.map(moster => {
          return <h1 key={moster.id}>{moster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
```

![Class Components 1](images/27.png)

### 23. Optional: map() + key attribute

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 24. Single Page Application

![Class Components 1](images/28.png)

[What is JSON?](https://www.w3schools.com/whatis/whatis_json.asp)
[JSON Placeholder](https://jsonplaceholder.typicode.com/)

### 25. Fetching Content

🌟 _Learned about fetching JSON content from JSON Placeholder and update the state_

`src/App.js`

```js
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
```

![Class Components 1](images/29.png)

### 26. Optional: Promises

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 27. Architecture Our App

🌟 _Learned about how to file structure components and styles_

### 28. Card List Component

![Class Components 1](images/30.png)

[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

[Intro to Grid Layout](https://gridbyexample.com/learn/)

`src/App.js`

```js{4-6, 25-29}
import React, { Component } from "react";
import "./App.css";

// Components
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map(monster => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </CardList>
      </div>
    );
  }
}

export default App;
```

`src/components/card-list/card-list.component.jsx`

```js
import React from "react";
import "./card-list.styles.css";

export const CardList = props => {
  return <div className="card-list">{props.children}</div>;
};
```

`src/components/card-list/card-list.styles.css`

```css
.card-list {
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
```

### 29. Card Component

![Class Components 1](images/31.png)

`src/App.js`

```js{25}
import React, { Component } from "react";
import "./App.css";

// Components
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
```

`src/components/card-list/card-list.component.jsx`

```js{3,6-12}
import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
```

`src/components/card/card.component.jsx`

```js
import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
```

`src/components/card/card.styles.css`

```css
.card-container {
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
}

.card-container:hover {
  transform: scale(1.05);
}
```

[Random Robo Image Generator](https://robohash.org/)

### 30. Exercise: Breaking Into Components

![Breaking Into Components](images/32.png)

- Make the Component as small as possible.
- Re-usability
- Flexibility
- Each component does one login makes it easier to use in other place
- Easier Testing
- With better naming we can identify the functionality of each component.

### 31. State vs Props

- Learned to use [React Developer Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for seeing components, states, props and keys.
- Learned about how state from one component affects other components when passed as props.
- If state changes, then all the child component will rerender.

### 32. SearchField State

Learned about [setState](https://reactjs.org/docs/react-component.html#setstate).

🌟 _Added Search Field to the App_

`src/App.js`

```js{12-13,26-30}
import React, { Component } from "react";
import "./App.css";

// Components
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
```

### 33. React Events

Learned about React Synthetic Events and how they intercept HTML events.

[Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

[HTML onchange event](https://www.w3schools.com/jsref/event_onchange.asp)

[React's Synthetic Events](https://reactjs.org/docs/events.html)

### 34. Filtering State

![Filtering State](images/33.png)

`src/App.js`

```js{24-28,36}
import React, { Component } from "react";
import "./App.css";

// Components
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
```

### 35. Optional: filter(), includes()

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 36. Search Box Component

![Search Box Component](images/34.png)

`src/App.js`

```js{6,32,34}
import React, { Component } from "react";
import "./App.css";

// Components
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
```

`src/components/search-box/search-box.component.jsx`

```js
import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
```

`src/components/search-box/search-box.styles.css`

```css
.search {
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
}
```

### 37. Exercise: Where To Put State

🌟 _Learned on where to put the state because of the one way data flow_

### 38. Class Methods and ArrowFunctions

[Handling Events](https://reactjs.org/docs/handling-events.html)

🌟 _Learned about how `this` is bind to normal function and how JavaScript binds this to arrow function automatically to its context when the component gets created_

`src/App.js`

```js{18-21,38}
import React, { Component } from "react";
import "./App.css";

// Components
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
```

### 39. Exercise: Event Binding

🌟 _Learned about Event Binding and how this works through a simple exercise_

### 40. Quick Note: Binding in React

we learned about arrow functions and binding in React. A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part
of React (i.e. render(), componentDidMount()).

If you want to learn more about this, [have a read here](https://reactjs.org/docs/handling-events.html)

### 41. Optional: Git + GitHub

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 42. Optional: Connecting With SSH To Github

There are two ways to connect to a Github repository, through HTTPS and SSH. You can switch between the two options by clicking the switch https/ssh button after clicking clone. HTTPS does not require setup.

![Git Clone](images/35.png)

It is recommended by Github to clone using HTTPS according to their [official documentation here](https://help.github.com/en/articles/which-remote-url-should-i-use). However, if you do end up using SSH and have never set it up before, there are a couple steps you must take first!

Firstly, SSH is like a unique fingerprint you generate for your computer in your terminal, which you then let your github account know about so it knows that requests from this computer using SSH (cloning/ pushing/ pulling) are safe to do.

In order to generate an SSH, [please follow the instructions here](https://help.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### 43. Deploying Our App

![Monsters Rolodex](images/36.png)

`package.json`

```json{5,7,17-18}
{
  "name": "monsters-rolodex",
  "version": "0.1.0",
  "private": true,
  "homepage": "http://navin-navi.github.io/monsters-rolodex",
  "dependencies": {
    "gh-pages": "^2.1.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build --git git"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

`public/index.html`

```html{13-16}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link
      href="https://fonts.googleapis.com/css?family=Bigelow+Rules&display=swap"
      rel="stylesheet"
    />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

`src/index.css`

```css{8-12}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(
    to left,
    rgba(7, 27, 82, 1) 0%,
    rgba(0, 128, 128, 1) 100%
  );
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```

`src/App.js`

```js{36}
import React, { Component } from "react";
import "./App.css";

// Components
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
```

`src/App.css`

```css{4-9}
.App {
  text-align: center;
}

h1 {
  font-family: "Bigelow Rules";
  font-size: 72px;
  color: #0ccac4;
}
```

`src/components/search-box/search-box.styles.css`

```css{2,7,11-12, 15-17}
.search {
  font-size: 16px;
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 200px;
  line-height: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: white;
  background-color: #4dd0e1;
}

.search::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
```

`src/components/card/card.styles.css`

```css{2,3}
.card-container {
  /*display: flex;*/
  /*flex-direction: column;*/
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
}

.card-container:hover {
  transform: scale(1.05);
}
```

`src/components/card-list/card-list.styles.css`

```css{5, 9-25}
.card-list {
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

@media (min-width: 640px) {
  .card-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .card-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1160px) {
  .card-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
```

- Deploying to GitHub
- Served through gh-pages
- Responsive to multiple screen sizes

[Monsters Rolodex](https://navin-navi.github.io/monsters-rolodex/)

### 44. React and ReactDOM

🌟 _Learned about plain React and ReactDOM in JavaScript using CDN packages_

🌟 _Learned what React Library does in the background with JSX syntax_

[React CDN Links](https://reactjs.org/docs/cdn-links.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React Plain</title>
  </head>
  <body>
    <div id="root">React Not Rendered</div>
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script>
      const Persons = props =>
        React.createElement("div", {}, [
          React.createElement("h2", {}, props.name),
          React.createElement("p", {}, props.occupation)
        ]);

      const App = () =>
        React.createElement("div", {}, [
          React.createElement(Persons, {
            name: "Navin",
            occupation: "Web Developer"
          }),
          React.createElement(Persons, {
            name: "Vasanth",
            occupation: "Mainframe Developer"
          }),
          React.createElement(Persons, {
            name: "Boopalan",
            occupation: "Python Developer"
          })
        ]);

      ReactDOM.render(
        React.createElement(App),
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

<https://codepen.io/navinnavi19/pen/GVGaJR>

### 45. Revisiting Virtual-DOM +Unidirectional Data Flow

![DOM vs Virtual DOM](images/37.png)

🌟 _Learned the diff between Virtual DOM and DOM and how change in state changes only the affected DOM using Virtual DOM with Unidirectional Flow._

Used `Chrome Dev Tool->More Tools->Rendering->Paint Flashing` to see the affected part of the DOM for state changes.

![Unidirectional Data Flow](images/38.png)

### 46. Asynchronous setState

🌟 _Learned about how state changes asynchrously and how we can make it change in respective to prevState._

<https://codepen.io/navinnavi19/pen/KOeLxQ>

### 47. Introducing LifeCycle Methods

- 48.Mounting
- 49.Updating
- 50.Unmounting

![React LifeCycle Methods](images/39.png)

<https://codepen.io/navinnavi19/pen/ymqYQd>

[React LifeCycle Interactive Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

[LifeCycle Method Example Repo](https://github.com/ZhangMYihua/lifecycles-lesson)

### Quiz 1: When should we use a functional component vs a class com

> We want to create a new component in React that doesn't need any local state management or access to lifecycle methods in the component. What kind of component should we make?

_Functional components are the best type of component to render if you don't need access to state or LifeCycle methods! It has benefits of being easy to test, easier to read, and easier to write!_

### 51. Section Review

🌟 _Reviewed all the code done in this section_

## Section 4: Master Project: SettingUp E-commerce Project

🌟 _Run the below code to get all the sub headings of this section_

```js
$$(".curriculum-item-link--title--zI5QT").map(el => el.textContent);
```

### 52. The Long Road Ahead

![A different Road](images/44.png)

![Learning to Read Projects](images/45.png)

### 53. Project Overview

![Project Overview](images/46.png)

### 54. GitHub + Project Repositories

### 55. Course Guideline + GitHub Links

🌟 _Instructions on how to clone and follow guide for the site_

[E-Commerce Lesson 1](https://github.com/ZhangMYihua/lesson-1)

### 56. Quick Note About GitHub

🌟 _Fork [Yihua Repo](https://github.com/ZhangMYihua/) and clone it to have our own repo_

### 57. E-commerce Homepage +SASS setup

`npx create-react-app crown-clothing`

`Removed unused codes`

`npm i -S node-sass`

[Node-SASS](https://www.npmjs.com/package/node-sass)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/35902d11137a2e80fe497d80872bdfe99489b979?diff=split)

![E-commerce Homepage +SASS setup](images/47.png)

### 58. Project Files + Modules

🌟 _Quick intro for the project files and modules that come preinstalled with `create-react-app`_

🌟 _Also learned about the troubleshooting steps when encountered an error_

### 59. Project Component Architecture

🌟 _Quick intro on folder structure and how to easily understand the components without getting lost_

### 60. CSS and SCSS files

🌟 _Note on both CSS and SCSS files will be included for use_

### 61. Homepage and Directory Components

![Homepage and Directory Components](images/48.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/711f42d1e8e2a6b75f571efb130c8ad75662b171?diff=split)

### 62. Styling Menu Items

![Styling Menu Items](images/49.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/e99fdec5907a7331fd8afa8103e1dff8d4edee23?diff=split)

[cubic-bezier timing function - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)

## Section 5: Master Project: ReactRouter and Routing

🌟 _Run the below code to get all the sub headings of this section_

```js
$$(".curriculum-item-link--title--zI5QT").map(el => el.textContent);
```

### 63. Routing In React

🌟 _Quick intro to React Router on how it works on the browser_

### 64. Routing In Our Project

`npm install --save react-router-dom`

🌟 _Brief intro to React Router on how it works via `react-router-dom`_

[React Router DOM](https://www.npmjs.com/package/react-router-dom)

[React Router Documentation](https://reacttraining.com/react-router/web/guides/quick-start)

### 65. React Router DOM

🌟 _Deep dive into React Router on how it works on via `react-router-dom` using an example repo_

[React Router GitHub repo example](https://github.com/ZhangMYihua/react-router-demo)

```js{10, 20-22, 30, 38-42}
import React from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";

const HomePage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>Topics </button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog/asdqw/topics" component={TopicsList} />
      <Route path="/blog/asdqw/topics/:topicId" component={TopicDetail} />
      <Route exact path="/blog/topics" component={TopicsList} />
      <Route path="/blog/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
```

### 66. withRouter()

```js
import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
```

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/94c0cd723847f2ae0982a37902e77acfd689b890)

[Higher Order Components](https://reactjs.org/docs/higher-order-components.html)

## Section 6: Master Project: Forms + Components

🌟 _Run the below code to get all the sub headings of this section_

```js
$$(".curriculum-item-link--title--zI5QT").map(el => el.textContent);
```

### 67. Shopping Data

### 68. Shop Page

`Route: /shop`

![Shopping Data](images/50.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/4c6c7d9efd280fcdc46ec0dc6509b38857511ebe?diff=split)

### 69. Collection Item

`Route: /shop`

![Collection Item](images/51.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/55fd08c42c1baca20a8e908f740d7edb3e27ffa4?diff=split)

### 70. Header Component

`Route: /`

![Header Component](images/52.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/cdf882537ebbda6f4aed1d54044b1dcd42be0d89?diff=split)

### 71. Resources: Importing SVG In React

[React Component](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files)

### 72. Introducing Forms In React

🌟 _Quick intro on how sign in and sign up component works and how state is managed in these components(ONLY LOCALLY)_

[HTML Form Introduction](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)

### 73. Sign In Component

`Route: /signin`

![Sign In Component](images/53.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/d7d5fb36803cffb33b92b563b48c4ce49ff2d4ab?diff=split)

### 74. Form Input Component

`Route: /signin`

![Form Input Component](images/54.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/638f73bb5546ab8ed6638fd53d4ec4b28e1a9b93?diff=split)

### 75. Custom Button Component

`Route: /signin`

![Custom Button Component](images/55.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/fa7c61aae7f02ce784bdcdf5fac977b8109b6267?diff=split)

## Section 7: Master Project: Firebase +User Authentication

🌟 _Run the below code to get all the sub headings of this section_

```js
$$(".curriculum-item-link--title--zI5QT").map(el => el.textContent);
```

### 76. Section Overview

🌟 _Quick intro on how Firebase is gonna be taught in this section_

### 77. Firebase Introduction

![Front End](images/56.png)

![Back End](images/57.png)

[Firebase](https://firebase.google.com/)

### 78. Adding a Project to Firebase

[Firebase NPM](https://www.npmjs.com/package/firebase)

- Added `npm i -S firebase` to the project
- Created a new firebase project "crown-clothing-db"
- Created a web app "crown-clothing-db"
- Spark plan for the web app is far more than enough

### 79. Note about GitHub

🌟 _**It is safe to enter the Firebase API in public**_

### 80. Google Sign In Authentication

`Route: /signin`

![Google Sign In Authentication](images/58.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/369c729c83c2b2b8ea0afa6e5ff0eb3ab7f85c12?diff=split)

### 81. Cloning From This Point On

🌟 _**Nothing but a note for those who fork the original GitHub repo**_

### 82. Google Sign In Authentication 2

- Added state to look into the current user in `App.js`

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/1a0c601d9cb8792bc102f36a85792cdd4983ebef?diff=split)

### 83. Optional: How to fix 403:restricted_client error

It's possible you may encounter a google Authorization error that says 403:restricted_client. If you do, here are the instructions to fix it!

There should be a Learn More link in the popup, clicking that should take you to the Google APIs console that has three tabs under the header named Credentials, OAuth Consent Screen, and Domain Verification. Go to the OAuth Consent Screen tab and update the Application Name to "crwn-clothing" or any other name you're comfortable with (i.e. the name of your project). Click on save at the bottom, then try logging into your verified Google account thereafter.

### 84. Google Sign In Authentication 3

`Route: /signin`

![Google Sign In Authentication 3](images/59.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/f57219bd63c654a51ed9a7bc478b7814072430c3?diff=split)

[CSS Border Box](https://www.w3schools.com/cssref/css3_pr_box-sizing.asp)

### 85. Firebase Firestore

🌟 _**Quick intro on Firebase Firestore**_

Learned how to

- create Firebase database
- create collections and documents
- query for the collections and documents

### 86. Optional: Async Await

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 87. Storing User Data In Firebase

![Storing User Data In Firebase](images/61.png)

![Storing User Data In Firebase](images/63.png)

![Storing User Data In Firebase](images/62.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/10bb823e334935faef107eefa2b9322c8ee558a7?diff=split)

![Storing User Data In Firebase](images/60.png)

### 88. Storing User Data In Our App

`src/App.js`

```js{24-41}
import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
```

### 89. Sign Up Component

```js
import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log("Error in sign up", error.message);
    }
  };

  handelChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handelChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handelChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handelChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handelChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="Submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
```

```css
.sign-up {
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 10px 0;
  }
}
```

### 90. Sign Up With Email and Password

`Route: /signin`

![Google Sign In Authentication 3](images/64.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/000028a45573c5ff7025e70ed5fbdfd652ef4f55?diff=split)

### 91. Sign In With Email and Password

```js{8,20-30}
import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Error signing in", error.message);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
```

### Quiz 2: Firebase unsubscribe method

> Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth library or referenceObject, we get back a function that lets us unsubscribe from the listener we just instantiated. Which lifecycle method should we use to call that unsubscribe method in?

🌟 _**componentWillUnmount**_

🌟 _Calling the unsubscribe function when the component is about to unmount is the best way to make sure we don't get any memory leaks in our application related to listeners still being open even if the component that cares about the listener is no longer on the page._

### 92. Section Review

🌟 _Quick recap on this section coding_

## Section 8: Master Project: Redux 1

🌟 _Run the below code to get all the sub headings of this section_

```js
$$(".curriculum-item-link--title--zI5QT").map(el => el.textContent);
```

### 93. Section Overview

![Redux](images/65.png)

### 94. Redux Introduction

![React with less no. of states](images/66.png)

![React with more no. of states](images/67.png)

![Redux with less no. of states](images/68.png)

![Redux with more no. of states](images/69.png)

### 95. Redux Concepts

![3 Principles](images/70.png)

![Redux Flow](images/71.png)

![Multiple actions and DOM changes](images/72.png)

![Redux Flow with multiple actions](images/73.png)

![Flux Pattern](images/74.png)

![MVC Pattern](images/75.png)

![Redux with local React State](images/76.png)

### 96. Redux In Our Application

![Prop Drilling](images/77.png)

![Redux explaining Unidirectional data flow](images/78.png)

### 97. Redux Actions and Reducers

![Single state for all the components](images/79.png)

![How actions update the state using reducers](images/80.png)

### 98. Setting Up Redux 1

![Redux Middleware](images/81.png)

🌟 _Installed below three npm packages_

[Redux Logger](https://www.npmjs.com/package/redux-logger) || [Redux](https://www.npmjs.com/package/redux) || [React Redux](https://www.npmjs.com/package/react-redux)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/c5a8767b815e544abbfe3d7c3d54c84764f3d30b?diff=split)

### 99. Setting Up Redux 2

`src/index.js`

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
```

`src/redux/store.js`

```js
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
```

`src/redux/user/user.action.js`

```js
export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});
```

### 100. connect() and mapStateToProps

`Header Component`

```js{3, 35-39}
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStatetoProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStatetoProps)(Header);
```

### 101. mapDispatchToProps

`App Component`

```js{3,5,20,27-30,33,56-63}
import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.action";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
```

### 102. User Redirect and User Action-type

[React Redirect](https://reacttraining.com/react-router/web/api/Redirect)

🌟 _Added homepage redirect if the user is already logged in_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/b21099ee76cf2cc4d48dfa5bcfd46b347d0634d5?diff=split)

### 103. Cart Component

![Cart Component](images/82.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/3a8867b57fb0f7e95640796712f4c8ce63a80d7f?diff=split)

### 104. Card Drop-down Component

![Card Drop-down Component](images/83.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/031b6f566c985173defb6547a23de496b2ae289a?diff=split)

### 105. Implementing Redux In Cart

🌟 _Conditionally render cart drop-down_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/76d66313f6e3384f0701bd6b5cee6cbd36afa947?diff=split)

### 106. Add To Cart Styling

`Route: /shops/hats`

![Add To Cart Styling](images/84.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/5d2dbd0f1b1c23a70c215c6b261a57f3d5ebe9bf?diff=split)

### 107. Cart Item Reducer

🌟 _Learned how to add items to the cart and store them in Redux_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/0dd0bff9220f96d2dd0ab8ba8ade3aad0658afa3?diff=split)

### 108. Adding Multiple Items To Cart

🌟 _Added the quantity value to the existing Array_

```js
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
```

### 109. Optional: find()

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 110. Cart Item Component

![Cart Item Component](images/85.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/522cd060a9e4b702964d0b8c95ee00eba6dacf41?diff=split)

### 111. Optional: reduce()

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 112. Selectors in Redux

![Cart Item Component](images/86.png)

Use [Reselect](https://www.npmjs.com/package/reselect) for Memoization in the states that are not changed in Redux

```js{10,13,21-26,29}
import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
```

### 113. Optional: Memoization

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

### 114. Reselect Library

🌟 _**Used Memoized selectors to improve our app performance from unwanted re-renders**_

`npm i -S reselect`

```js
import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
```

### 115. User Selectors

🌟 _**Used createStructuredSelector to pass the state to multiple selectors easy peacy**_

`import { createStructuredSelector } from "reselect";`

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/f2163bc88a98ba06a2a862270adf0dcb767269e0?diff=split)

### 116. Checkout Page

![Checkout Page](images/87.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/1ed6a216b8df802bc028dfba52cb2b77613c73db?diff=split)

### 117. Checkout Page 2

![Checkout Page 2](images/88.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/ef5541e9a4c2e5acad6f3c9563a0416226ab5f21?diff=split)

### 118. Extensible Code

🌟 _**Make code and components simple and easier that others can understand**_

![Extensible Code](images/89.png)

### 119. Dispatch Action Shorthand

```js{9,14,25-30}
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.components";
import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your card is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
```

### 120. Checkout Item Component

![Checkout Item Component](images/90.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/5172a8f5b5610e4bcb58187c9ea8cbf54228fe77?diff=split)

### 121. Remove Items From Cart

🌟 _**Created a remove a cartItem action to remove the item on clear button in Checkout Component**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/bbb29f049729252574c3c33cf8e2f5ff88f06546?diff=split)

### 122. Remove Items At Checkout

![Remove Items At Checkout](images/91.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/b7d8f27d5d1707d9bfc1f0e6c6f84126d2151457?diff=split)

## Section 9: Master Project: SessionStorage + Persistence

### 123. Local Storage and Session Storage

🌟 _**Brief intro on Local Storage and Session Storage**_

[Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

### 124. Redux Persist

🌟 _**Using Redux-persist we stored our cartItems in LocalStorage to persist even after the session close.**_

[Redux-persist](https://www.npmjs.com/package/redux-persist)

## Section 10: Master Project: Redux 2

### 125. Directory State Into Redux

🌟 _**Moved Directory State Into Redux**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/a7b869dab68526f266212a105a48d588ff98e232?diff=split)

### 126. Collection State Into Redux

🌟 _**Moved Shop Data State Into Redux**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/b258d65ca5c0a1311fce85fe66e23a6684716c2e?diff=split)

### 127. Collection Overview Component

🌟 _**Created a Collection Overview Component for `/shop` page**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/6aba1cea901b8b1de23caeed3001937178511218?diff=split)

## Section 11: Master Project:Advanced Routing

### 128. Nested Routing in Shop Page

![Nested Routing in Shop Page](images/92.png)

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/31a1dbe9725c7899fccf0f5bdf800f87d3bbe509?diff=split)

### 129. Improving Naming Of Component

🌟 _**Changed all the naming for Category Page to Collection Page**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/6ac8d122be2b0ec60cac500856777c29a3adaaa0?diff=split)

### 130. Collection Routing and Selector

`Route: /shop/mens`

![Collection Routing and Selector](images/95.png)

🌟 _**Collections are routed to its own collection using URL params**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/b20a25446d7d220a8c38f8b8b9f744d97843fa39?diff=split)

### 131. Optional: Currying

🌟 _**Explained in [Appendix 1: Key Developer Concepts](https://navin-navi.github.io/blog/complete-react-developer-in-2019/#310-async-await)**_

## Section 12: Master Project: StateNormalization

### 132. Data Normalization + Collection Page

🌟 _**Used data normalization to improve the performance by converting arrays to objects**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/fcf518c10f15e1838f2b2b49d14db2e1a9e4bb1b?diff=split)

### 133. Optional: Hash Tables vs Arrays

In the previous lesson we learned about Objects (Hash Table data structure) being better for searching for items than Array. This is a common computing optimization when talking about data structures. If you want to learn more about why this is, [this is a great resource for you to use](https://www.kirupa.com/html5/hashtables_vs_arrays.htm).

### 134. Data Flow In Our App

```js{10-13}
import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
```

### 135. Thinking About Data Flow

![Thinking About Data Flow](images/93.png)

## Section 13: Master Project: StripePayments Part 1

### 136. Introduction To Stripe

[Stripe Docs](https://stripe.com/docs)

🌟 _**Quick intro on how stripe works and how they perform transactions**_

### 137. Stripe Integration

[React Stripe Checkout](https://github.com/azmenak/react-stripe-checkout)

![Stripe Integration](images/94.png)

🌟 _**Implemented stripe checkout button**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/fcf518c10f15e1838f2b2b49d14db2e1a9e4bb1b?diff=split)

### 138. Cloning From This Point On

🌟 _**Note for those who clone the Instructors code because of the publishableKey in StripCheckoutButton**_

### 139. Finishing Touches + Look Ahead

![Finishing Touches + Look Ahead](images/96.png)

## Section 14: Master Project:Deploying To Production

### 140. Deploying To Heroku

[Heroku Dashboard](https://dashboard.heroku.com/) || [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) || [Heroku CRA BuildPack](https://github.com/mars/create-react-app-buildpack)

🌟 _Install Heroku in Ubuntu_

`sudo snap install --classic heroku`

🌟 _Check Heroku version_

`heroku --version`

🌟 _Login to Heroku CLI with -i login in CLI itself with credentials_

`heroku login -i`

🌟 _Create a new project with React Buildpack_

`heroku create navin-navi-crown-clothing --buildpack https://github.com/mars/create-react-app-buildpack`

🌟 _Push the repo to heroku remote_

`git push heroku master`

[Crown Clothing Live](https://navin-navi-crown-clothing.herokuapp.com/)

### 141. Resources: Buildpack

You can learn more about the buildpack we used in the previous video by following the [documentation here](https://github.com/mars/create-react-app-buildpack)

### 142. Linking Github to Heroku

If you would like to not manually deploy the the app like we have seen in the previous video every time, and you want the app to redeploy anytime you update MASTER in your github repository, then you can set that up through Heroku by following these steps: <https://devcenter.heroku.com/articles/github-integration>

However, since we will be working on the project in the next sections, we recommend that you do not do this so that as you code along, even if your website breaks, your current version of the website is still live on Heroku until you decide to redeploy next.

### 43. Optional: Git + Heroku commands

🌟 _Quick note on how heroku and git works in both local and remote._

### 144. Optimizing Production Build

🌟 _Logger should only be shown in development_

```js{7-11}
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
```

## Section 15: Master Project: CSS in JS- styled-components

### 145. CSS in JS

🌟 _**Quick intro to styled components and what it help us to solve & improve**_

[Styled Components](https://www.styled-components.com/) || [BEM](http://getbem.com/)

### 146. styled-components

🌟 _**Quick intro to styled components with a demo code**_

### 147. styled-components In Our App

🌟 _**Updated two components to use Styled Components**_

`npm i -S styled-components`

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/651a58188724be01af08f69f7fc8f29015b0c167?diff=split)

### 148. Thinking About Trade-offs

![Thinking About Trade-offs](images/97.png)

### 149. styled-components In Our App 2

```js{31}
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
```

### 150. styled-components In Our App 3

🌟 _**Updated difficult components styles using Styled Components**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/651a58188724be01af08f69f7fc8f29015b0c167?diff=split)

### 151. Exercise: styled-components

🌟 _**Updated the project to use Styled Components completely**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/597402806abb00a1e14b5c669e7b1ff8a022cfc9?diff=split)

## Section 16: Master Project:Advanced Redux + Firebase

🌟 _Get titles for Section 16_

```js
$$(".curriculum-item-link--title--zI5QT").map(
  title => title.textContent
);
```

### 152. Section Overview

🌟 _Quick intro on what we are going to solve in this section_

### 153. Quick Note: Firebase

Over the next couple of videos we are going to be covering some specific Firebase commands. Keep in mind that as a React Developer, you do not need to memorize these things and most of the time you can always refer to the firebase documentation for more information. We decided to include the process in the course so that you get a clear picture into what  is involved in creating a full scale application.

If for some reason you get overwhelmed with Firestore, just keep going and use our provided code since this is not the "important" part of the course.

### 154. Firebase Refresher

🌟 _**Quick intro to previously taught Firebase Concepts**_

![Firebase Refresher](images/98.png)

### 155. Firebase Refresher 2

🌟 _**Quick intro to previously taught Firebase Concepts 2**_

![Firebase Refresher 2](images/99.png)

### 156. Moving Our Shop Data To Firebase

`src/firebase/firebase.util.js`

```js{37-40}
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5bIa1E55zDzEYnRe0zsw7kXxejifBsy0",
  authDomain: "crown-clothing-db-ec57f.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-ec57f.firebaseio.com",
  projectId: "crown-clothing-db-ec57f",
  storageBucket: "",
  messagingSenderId: "137189619024",
  appId: "1:137189619024:web:1216d928d5eafe8b"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating users", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
```

### 157. Moving Our Shop Data To Firebase 2

`src/firebase/firebase.util.js`

```js{37-51}
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5bIa1E55zDzEYnRe0zsw7kXxejifBsy0",
  authDomain: "crown-clothing-db-ec57f.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-ec57f.firebaseio.com",
  projectId: "crown-clothing-db-ec57f",
  storageBucket: "",
  messagingSenderId: "137189619024",
  appId: "1:137189619024:web:1216d928d5eafe8b"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating users", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
```

### 158. Reviewing What We Have Done

![Reviewing What We Have Done](images/100.png)

### 159. Bringing Shop Data To Our App

`src/firebase/firebase.utils.js`

```js{53-65}
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5bIa1E55zDzEYnRe0zsw7kXxejifBsy0",
  authDomain: "crown-clothing-db-ec57f.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-ec57f.firebaseio.com",
  projectId: "crown-clothing-db-ec57f",
  storageBucket: "",
  messagingSenderId: "137189619024",
  appId: "1:137189619024:web:1216d928d5eafe8b"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating users", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  console.log(transformedCollection);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
```

### 160. Adding Shop Data To Redux

🌟 _**Updated the shop data with firestore in Redux**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/996e2d216bc73e95e3ef85bf09008aa089f3d206?diff=split)

## Section 17: Master Project: HOC Patterns

### 161. WithSpinner HOC

`src/components/with-spinner/with-spinner.component.jsx`

```js
import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrapperComponent => ({ isLoading, ...props }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrapperComponent {...props} />
  );
};

export default WithSpinner;
```

### 162. WithSpinner HOC 2

🌟 _**Added Loading Spinner for our App**_

`src/pages/shop/shop.component.jsx`

```js{13,16,17,20-22,33,43,49-51,56-58}
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscripbeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscripbeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscripbeFromSnapshot = null;
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
```

### 163. Quick Note About Next Lesson

If you are still finding it difficult understanding how Higher Order Components can be useful, you have an optional video next which we explain in higher detail when HOCs are useful and how we can build them ourselves. Enjoy!

### 164. Optional: How To Build HOCs

[HOC Example](https://github.com/ZhangMYihua/higher-order-components-explained)

## Section 18: Master Project: Asynchronous Redux

### 165. Observables + Observer Pattern

![Observables + Observer Pattern](images/101.png)

### 166. Promise Pattern

[Firebase REST API](https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls)

`src/pages/shop/shop.component.jsx`

```js{28}
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
```

### 167. Redux Thunk

[Redux Thunk](https://www.npmjs.com/package/redux-thunk)

🌟 _**Used Redux Thunk to asynchronously fetch data from firestore and save it in Redux**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/2e0fdfecaac86516ae57a3c15312c1822483f9ed?diff=split)

### 168. What Does Redux Thunk Do

🌟 _**Redux Thunk explanation by Andrei**_

### 169. Debugging Our Code

🌟 _**Fixed the collections fetching error in CollectionsPage Component**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/3e63d09d79f39c9a470db39b5d6b31978c0e0bd0?diff=split)

## Section 19: Master Project:Container Pattern

### 170. Container Pattern

`src/pages/collection/collection.container.jsx`

```js
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
```

### 171. Refactoring Is A Trade off

![Refactoring Is A Trade off](images/102.png)

## Section 20: Master Project:Redux-Saga

🌟 _**Get titles for Section 20**_

```js
$$(".curriculum-item-link--title--zI5QT").map(
  title => title.textContent
);
```

### 172. Introduction to Sagas

![Introduction to Sagas](images/103.png)

### 173. Generator Functions

[Generator Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

![Generator Functions](images/104.png)

### 174. Quick Note About Sagas

These next few videos are going to be tough. Keep in mind that getting redux-sagas in one go is usually impossible and it is something you practice multiple times to fully understand. We highly recommend you code along in this section and pause or rewatch the videos whenever you feel unsure of something. Another option is to watch this section all the way through, then come back the 2nd time around and code along once you have a general idea of the concepts.

Good luck!

### 175. redux-saga

[redux-saga](https://www.npmjs.com/package/redux-saga)

`src/redux/shop/shop.sagas.js`

```js
import { takeEvery } from "redux-saga/effects";

import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionAsync() {
  yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
  console.log("1");
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
```

### 176. Redux Thunk Into Saga

`src/redux/shop/shop.sagas.js`

```js{15-29}
import { takeEvery, call, put } from "redux-saga/effects";

import { ShopActionTypes } from "./shop.types";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export function* fetchCollectionAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  console.log("1");
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
```

### 177. take(), takeEvery(), takeLatest()

🌟 _**Deep explanation on take(), takeEvery(), takeLatest()**_

[Example repo](https://github.com/ZhangMYihua/redux-saga-take-takelatest-takeevery)

### 178. Root Saga

`src/redux/root-saga.js`

```js
import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
```

### 179. Planning Ahead With Sagas

🌟 _**Plan to shift our Users Auth calls into Redux Saga**_

### 180. Google Sign In Into Sagas

🌟 _**Implemented Google Sign In Into Sagas**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/514e96506dc846f3e21d28cf039f407447396b4a?diff=split)

### 181. Email Sign In Into Sagas

🌟 _**Implemented Email Sign In Into Sagas**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/24c47c52c060d19e189967a22ed814ee9abca9a0?diff=split)

### 182. Reviewing Our Sagas

![Reviewing Our Sagas](images/105.png)

![Reviewing Our Sagas](images/106.png)

### 183. Recreating Persistence

🌟 _**Implemented User persistence recreation**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/545e99bd2efc574d7d44cf6b4e53aab26cc610e4?diff=split)

### 184. Sign Out With Sagas

🌟 _**Implemented User persistence recreation**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/545e99bd2efc574d7d44cf6b4e53aab26cc610e4?diff=split)

### 185. Clear Cart Saga

🌟 _**Implemented Clear Cart Saga on Sign out**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/2fd05cdb1d95d17e94f1c1df455df25956f86ef4?diff=split)

### 186. Solution: Sign Up Saga

🌟 _**Implemented Sign Up Saga**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/e41cfc7d39cc7a25c05d53bb0918b332c81020f4?diff=split)

## Section 21: Master Project: ReactHooks

🌟 _**Get titles for Section 21**_

```js
$$(".curriculum-item-link--title--zI5QT").map(
  title => title.textContent
);
```

### 187. React Hooks Introduction(useState)

🌟 _**Intro to useState hook**_

### 188. Why Did React Add Hooks

If you want to learn more about why the React team decided to add Hooks to the library, you can find the motivation behind their decision right from their mouth <https://reactjs.org/docs/hooks-intro.html#motivation>

### 189. useEffect

[useEffect](https://reactjs.org/docs/hooks-effect.html) || [JSON Placeholder](https://jsonplaceholder.typicode.com/) || [useEffect Example](https://github.com/ZhangMYihua/use-effect-example)

### 190. Hook Rules

🌟 _**Hooks cannot be conditionally renders in top level. Conditions should be inside the Hooks**_

### 191. Converting ClassComponents With useState

🌟 _**Converted SignIn Component and SignUp Component to use the State hook**_

```js
import React, { useState } from "react";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.component";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [UserCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = UserCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({ ...UserCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
```

### 192. useEffect In Our App

🌟 _**Converted some Component to use useEffect hook**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/5f2b923375322608c504056038185adf66cc388f?diff=split)

### 193. useEffect as ComponentWillUnmount()

🌟 _**useEffect hook clean up function acts as a ComponentWillUnmount**_

![useEffect as ComponentWillUnmount](images/107.png)

### 194. useEffect Cheat Sheet

A quick recap of what we have learned about useEffect:

🌟 _**ComponentDidMount**_

```js
//Class
componentDidMount() {
    console.log('I just mounted!');
}

//Hooks
useEffect(() => {
    console.log('I just mounted!');
}, [])
```

🌟 _**ComponentWillUnmount**_

```js
//Class
componentWillUnmount() {
    console.log('I am unmounting');
}

//Hooks
useEffect(() => {
    return () => console.log('I am unmounting');
}, [])
```

🌟 _**ComponentWillReceiveProps**_

```js
//Class
componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
        console.log('count changed', nextProps.count);
    }
}

//Hooks
useEffect(() => {
    console.log('count changed', props.count);
}, [props.count])
```

### 195. Custom Hooks

[Custom Hooks Example](https://github.com/ZhangMYihua/custom-hook-example)

### 196. Custom Hooks 2

🌟 _**Learned more about useEffect()**_

### 197. useReducer

[useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) || [useReducer example](https://github.com/ZhangMYihua/useReducer-example)

### 198. useContext + useMemo + useCallback

There are a few other Hooks we still need to talk about such as useContext or useMemo or useCallback However, we are covering topics like these in later sections in the course when we learn a little bit more about things like ContextAPI and Performance.

So hang on tight and you will learn about them shortly as we will continue to use hooks throughout the upcoming sections!

## Section 22: Master Project: Stripe Payments Part 2 - Back end

🌟 _**Get titles for Section 22**_

```js
$$(".curriculum-item-link--title--zI5QT").map(
  title => title.textContent
);
```

### 199. About This Section

In order to have a fully functioning e commerce project with payments, we need to create a backend server for our Stripe payments. This section coming up does not talk about React, but instead, allows you to have a fully functioning application because our goal here is to have a project as complete as possible for you. However, this is not an important part of the course, so if you do not want to learn about the backend, you can skip this section, or you can just grab the code that we will provide in the last lecture of this section. The only thing you will be missing out on is the full ability to accept payments with Stripe (since currently the payment info the user sends on the frontend isn't doing anything).

Remember, this section is completely optional!

### 200. Introduction To Backend

![Introduction To Backend](images/108.png)

![Introduction To Backend](images/109.png)

### 201. Cloning From This Point On

If you do choose to skip this section and just fork and clone this repo, or any repo from this point on in the course, remember to add a file called `.env` to the root folder! In that `.env` file remember to add a `STRIPE_SECRET_KEY` value equal to your own secret key from your stripe dashboard. You can find it in the same place where you found your publishable key in the developers tab under api keys. You will have to enter the password in to reveal it!

You will also need to connect your existing Heroku app to this new forked and cloned repo, or you have to create a new Heroku app and push to it. A quick refresher on how to do either of these:

**Set to an existing Heroku app**

To set to an existing Heroku app you already have deployed, you need to know the name of the app you want to deploy to. To see a list of all the apps you currently have on Heroku:

```js
heroku apps
```

Copy the name of the app you want to connect the project to, then run:

```js
heroku git:remote -a <PASTE_YOUR_APP_NAME_HERE>
```

And now you'll have your repo connected to the heroku app under the git remote name `heroku`.

If the Heroku app you connected was deploying just a create-react-app project from earlier in the lesson, you will need to remove the `mars/create-react-app-buildpack` buildpack first. You can check if you have this buildpack by running:

```js
heroku buildpacks
```

Which will list any buildpacks you currently have, if you see `mars/create-react-app-buildpack` in the list, you can remove it by running:

heroku buildpacks:remove mars/create-react-app-buildpack


Then skip to the bottom of this article to see what to do next!

**To create a new Heroku app**

Create a new Heroku project by typing in your terminal:

```js
heroku create
```

This will create a new Heroku project for you. Then run:

```js
git remote -v
```

You should see `heroku https://git.heroku.com/<RANDOMLY_GENERATED_NAME_OF_YOUR_APP>` in the list. This means you have successfully connected your project to the newly created Heroku app under the git remote of `heroku`.

**Deploying to Heroku**

Before we deploy, you also need to set a config variable of `STRIPE_SECRET_KEY` to the same secret key value from your stripe dashboard, the same one in your `.env` file. The `.env` file is only for local development, in order for our heroku production app to have access to this secret key, we add it to our Heroku projects config variables by typing:

```js
heroku config:set STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
```

After that, you can deploy to heroku by running:

```js
git push heroku master
```

You will see this warning message if you are pushing to an existing app:

```js
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://git.heroku.com/<YOUR_HEROKU_APP_NAME>'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

This is because we are pushing to an existing app that was deploying an entirely different repository from what we have now. Simply run:

```js
git push heroku master --force
```

This will overwrite the existing Heroku app with our new code.

**Open our Heroku project**

After heroku finishes building our project, we can simply run:

```js
heroku open
```

This will open up our browser and take us to our newly deployed Heroku project!

### 202. Creating our Server Inside the Project

[Nodemon](https://www.npmjs.com/package/nodemon) || [Concurrently](https://www.npmjs.com/package/concurrently)

🌟 _**Backend initialized**_

[View file changes in GitHub](https://github.com/navin-navi/crown-clothing-react/commit/70d4af77ddd8610029fb5b5cfaa8d9ac631f4cc4?diff=split)

### 203. Building A Basic Server

[express](https://www.npmjs.com/package/express) || [dotenv](https://www.npmjs.com/package/dotenv) || [cors](https://www.npmjs.com/package/cors) || [body-parser](https://www.npmjs.com/package/body-parser)

`server.js`

```js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
```

### 204. What We Are Building

![What We Are Building](images/110.png)

### 205. Backend Payment Route

[stripe](https://www.npmjs.com/package/stripe)

```js{25-46}
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  console.log(req.body);
  const {
    token: { id },
    amount
  } = req.body;
  console.log(id);
  console.log(amount);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    curreny: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
```

### 206. Connecting Client To Server

`client/src/components/stripe-button/stripe-button.component.jsx`

```js{11-26}
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import crown from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2hJtHnCWfCA14ioo1FKhoZMS00tev3ElY9";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: { amount: priceForStripe, token }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log(`Payment error: ${error}`);
        alert(
          "There was an issue with your payment. Please make sure use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image={crown}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
```

### 207. Deploying To Production

[Heroku config](https://devcenter.heroku.com/articles/config-vars)

[Crown Clothing Live](https://navin-navi-crown-clothing.herokuapp.com/)

Removed the old React build-pack to make the node app deploy successful.

## Section 23: Master Project: ContextAPI

🌟 _**Get titles for Section 23**_

```js
$$(".curriculum-item-link--title--zI5QT").map(
  title => title.textContent
);
```

### 208. Quick note about cloning this repo

🌟 _**Quick note about cloning this repo**_

![Quick note about cloning this repo](images/111.png)

### 209. Introduction To Context API

[Context API](https://reactjs.org/docs/context.html)

[Context API Example Start Repo](https://github.com/ZhangMYihua/react-context-lesson)

This section will be taught from the an older commit before the introduction of advanced Redux concepts

### 210. Context Consumer + useContextHook

[useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

`src/contexts/collections/collections.context.js`

```js
import { createContext } from 'react';

import SHOP_DATA from './shop.data';

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
```

`src/pages/collection/collection.component.jsx`

```js{1,5,10}
import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
```

### 211. Context Provider

`src/contexts/current-user/current-user.context.js`

```js
import { createContext } from 'react';

const CurrentUserContext = createContext(undefined);

export default CurrentUserContext;
```

`src/App.js`

```js{15,54-56}
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/current-user/current-user.context';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.state.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
```

`src/components/header/header.component.jsx`

```js{1,15}
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
```

### 212. Cart Context

🌟 _**Created a Cart Context to leverage the hidden value for the cart dropdown**_

### 213. Provider Context Pattern
### 214. Provider Context Pattern 2

[Context API Provider Example Complete](https://github.com/ZhangMYihua/react-context-complete)

`src/providers/cart/cart.provider.jsx`

```js
import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
```

### 215. Redux vs Context API

🌟 _**Brief explanation on when to use Redux and when to use Context API**_

🌟 _**Redux-Big Projects & Context API-Small and Medium level Projects**_

## Section 24: Master Project: GraphQL+ Apollo

🌟 _**Get titles for Section 24**_

```js
$$(".curriculum-item-link--title--zI5QT").map(
  title => title.textContent
);
```

### 216. Introduction To GraphQL

![REST API](images/112.png)

![GraphQL](images/113.png)

### 217. Course Guideline + GitHub Links
### 218. GraphQL Playground
### 220. GraphQL Playground 2

[Crown Clothing GraphQL playground](https://crwn-clothing.com/) || [GraphQL Basic Types](https://graphql.org/graphql-js/basic-types/) || [Prisma Server for playground](https://github.com/ZhangMYihua/crwn-clothing-prisma)

![GraphQL Playground](images/114.png)

### 219. Backend Code

When we talk about GraphQL, it usually comes with two components: The frontend part and the backend part. As React developers, we will usually only concern ourselves with the frontend implementation of GraphQL and this is what we will be exploring over the coming videos. However, for those curious on how to best build a GraphQL server, we have provided for you the backend code that we use for this course, as well as the list of some popular options out there for building such a server:

[Our Backend Implementation](https://github.com/ZhangMYihua/crwn-clothing-prisma)

[Prisma](https://www.prisma.io/) (what we use in the above link)
[Hasura ](https://hasura.io/)
[Apollo Server](https://www.apollographql.com/docs/apollo-server/)

Quick way to build a GraphQL server: [graphql-yoga](https://github.com/prisma/graphql-yoga)

[A quick step by step guide on how to set up your own GraphQL server](https://blog.apollographql.com/tutorial-building-a-graphql-server-cddaa023c035)

### 221. Introduction To Apollo

[Apollo Client](https://www.apollographql.com/docs/react/) || [apollo-boost](https://www.npmjs.com/package/apollo-boost) || [react-apollo](https://www.npmjs.com/package/react-apollo) || [graphql-npm](https://www.npmjs.com/package/graphql)

[GraphQL Lesson Starter Code](https://github.com/ZhangMYihua/graphql-lesson)

## Section 25: Master Project: MobileSupport

## Section 26: Master Project: ReactPerformance

## Section 27: React Interview Questions + Advice

## Section 28: Bonus: Progressive Web App

## Section 29: Bonus: Testing

## Section 30: Bonus: Webpack + Babel

## Section 31: Bonus: Build a GatsbyJSBlog

## Section 32: Appendix 1: Key Developer Concepts

🌟 _Got all Sub Heading by using the below Script_

`$$(".curriculum-item-link--title--zI5QT").map(text => text.textContent)`

### 304. map()

```js
const myArray = [1, 2, 3, 4];
myArray.map(el => el + 1);
// [2, 3, 4, 5]
myArray.map(() => "b");
// ["b", "b", "b", "b"]
```

### 305. Promises

[MDN-Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

`Resolved Promise`

```js
const newPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("I resolved Successfully"), 1000);
  } else {
    reject("Error - Rejecting");
  }
});

newPromise.then(res => console.log(res)).catch(err => console.log(err));
// Promise {<pending>}
// I resolved Successfully
```

`Rejected Promise`

```js
const newPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("I resolved Successfully"), 1000);
  } else {
    reject("Error - Rejecting");
  }
});

newPromise.then(res => console.log(res)).catch(err => console.log(err));
// Error - Rejecting
```

### 306. filter()

```js
const myArray = [1, 2, 3, 4];
myArray.filter(el => true);
// [1, 2, 3, 4]
myArray.filter(el => false);
// []
myArray.filter(el => el > 2);
// [3, 4]
```

### 307. includes()

`includes(<value>, <index>)`

`Basic`

```js
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray.includes(5);
// true
myArray.includes(10);
// false
myArray.includes(5, 6);
// false
myArray.includes(5, 3);
// true
```

`Why this happens`

```js
const myArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
myArray.includes({ id: 1 });
// false
const ob1 = { id: 1 };
const ob2 = { id: 2 };
const ob3 = { id: 3 };
const secArray = [ob1, ob2, ob3];
secArray.includes(ob1);
// true
```

> This behavior is because of the JavaScript's difference between Primitive Types and Object Types

- Primitive Types points to the memory of that primitive types.
- Object Types creates a new memory reference.

- Primitive Types are immutable because of the above reason.
- Object Types are mutable.

`Primitve Types`

![JavaScript Types](images/41.png)

`Object Types` - _**Objects** & **Arrays**_

### 308. CWD 2019: Git + GitHub

[Refer to Git 101 Post](https://navin-navi.github.io/blog/git-101/#getting-started)

### 309. CWD 2019: Git + GitHub 2

[Refer to Git 101 Post](https://navin-navi.github.io/blog/git-101/#listing-all-branches)

### 310. Async Await

`ES6`

![JavaScript Types](images/42.png)

`ES7`

![JavaScript Types](images/43.png)

### 311. find()

🌟 _Unlike filter(), find() only gives the first element when the condition matches_

```js
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray.find(el => el === 5);
// 5
```

### 312. reduce()

```js
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray.reduce((acc, currEl) => acc + currEl, 0);
// 45
```

### 313. Memoization

`caching repeatedly requested expressions`

```js
const cache = {};

const memoizedfunc = n => {
  if (n in cache) {
    console.log("Cached");
    return cache[n];
  } else {
    console.log("Not Cached");
    cache[n] = n + 80;
    return cache[n];
  }
};

console.log(memoizedfunc(5));
console.log(memoizedfunc(5));
console.log(memoizedfunc(5));
```

### 314. Currying with Closure

🌟 _Function that returns another function utilizing closure to get variables out of the scope and calling them one by one_

```js
const currying = a => b => c => a * b * c;

console.log(currying(5)(2)(10));
```

## Section 33: Bonus: Coupon Codes +Freebies

1. [The Complete Web Developer in 2019: Zero to Mastery](https://www.udemy.com/the-complete-web-developer-zero-to-mastery/?couponCode=EXISTINGSTUDENT138W)
2. [The Complete Junior to Senior Web Developer Roadmap](https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/?couponCode=PART22873)
3. [Advanced JavaScript Concepts](https://www.udemy.com/advanced-javascript-concepts/?couponCode=LEVELUPZTM)
4. [Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?couponCode=EXISTINGSTUDENT138W)

![Web Developer Roadmap](images/40.jpg)
