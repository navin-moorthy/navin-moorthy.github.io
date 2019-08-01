# Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)

complete-react-developer-in-2019

![Hero Image](images/1.jpg)

Become a Senior [React](https://reactjs.org/) Developer! Build a massive E-commerce app with [Redux](https://redux.js.org/), [Hooks](https://reactjs.org/docs/hooks-intro.html), [GraphQL](https://graphql.org/), [Context-API](https://reactjs.org/docs/context.html), [Stripe](https://stripe.com/), [Firebase](https://firebase.google.com/)

Created by [Andrei Neagoie](https://www.udemy.com/user/andrei-neagoie/), [Yihua Zhang](https://www.udemy.com/user/yihua-zhang-5/)

Twitter : [Andrei Neagoie](https://twitter.com/AndreiNeagoie)

Udemy Link - [Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/complete-react-developer-zero-to-mastery)


*Get all the Sections from the Udemy Course*
```js
[...document.getElementsByClassName("section--title--eCwjX")].forEach(title=>{
	console.log(title.textContent);
})
```

> Images pasted here are captured using Chrome's Capture Screenshot Feature

![Get Started](images/4.png)

## Section 1: Introduction

![Introduction](images/2.png)

*Get titles for Section 1 & 2*
```js
[...document.getElementsByClassName("curriculum-item-link--curriculum-item--KX9MD")].forEach(title=>{
	console.log(title.textContent);
})
```

### 1. Course Outline

![Course Outline](images/3.png)

### 2. Join Our Online Classroom!

Join [Zero to Mastery Discord Channel](https://discord.gg/nVmbHYY)

[![Zero to Mastery](images/5.png)](https://discord.gg/nVmbHYY)

### 3. Exercise: Meet The Community

Introduce yourself in the Discord Community

## Section 2: React Key Concepts

### 4. React Concepts

![React Concepts](images/6.png)

### 5. The Birth of React.js

*Traditional HTML, CSS and JavaScript with less cross-browser support*

*Files are requested and served from the browser every time*

![Traditional](images/7.png)

*JQuery and Backbone JS along with AJAX provided the cross-browser support and handling JS much easier*

![JQuery and BackBoneJS](images/8.png)

*In `2010`, Google introduced SPA(Single Page Application) with AngularJS using concepts of MVC - Model View Controller and containers*

*As the size of the application grows, it becomes harder to manage the flow with many container.*

![AngularJS](images/9.png)

*In `2013`, Facebook comes with React Framework to improving the drawbacks of AngularJS*

![Birth Of React](images/10.png)

*Since then AngularJS evolved to Angular(Now Angular 8) and React with lots of new features.*

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

### Section 3: React Basics

![React Basics](images/19.png)

*Script used to get all the titles under this topic*
```js
[...document.getElementsByClassName("curriculum-item-link--title--zI5QT")].forEach(title=>{
	console.log(title.textContent);
})
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

*Install dependencies from package.json*

`npm install` == `yarn`

*Install a package and add to package.json*

`npm install package --save` == `yarn add package`

*Install a devDependency to package.json*

`npm install package --save-dev` == `yarn add package --dev`

*Remove a dependency from package.json*

`npm uninstall package --save` == `yarn remove package`

*Upgrade a package to its latest version*

`npm update --save` == `yarn upgrade`

*Install a package globally*

`npm install package -g` == `yarn global add package`

### 15. Yihua's VSCode font and settings

- I personally love [Fira Code](https://github.com/tonsky/FiraCode) and updated VS Code setting to use ligaments
- Install the below extension if needed,

![VS Code Extensions 1](images/20.png)

![VS Code Extensions 2](images/21.png)

### 16. Create React App

*[Basic app](https://zhangmyihua.github.io/monsters-rolodex/) that we are going to build*

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
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

*App start from index.html*

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

*public folder also contains `favicon.ico` and `manifest.json` for PWA

*`index.html` is referenced by our React app at `src/index.js`*

`src/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

*`ReactDOM` renders our `<App />` by replacing the element with id `root`*

*Global Styles and Service Workers are imported here*

`src/index.css`

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
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

*Root of our React Component*

*App.css and logo.svg are imported here*

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

*It is used for testing*

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
```

*Extras*

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



### 19. Don't Eject



### 20. Class Components



### 21. Thinking In JSX



### 22. Dynamic Content



### 23. Optional: map() + key attribute



### 24. Single Page Application



### 25. Fetching Content



### 26. Optional: Promises



### 27. Architecting Our App



### 28. Card List Component



### 29. Card Component



### 30. Exercise: Breaking IntoComponents



### 31. State vs Props



### 32. SearchField State



### 33. React Events



### 34. Filtering State



### 35. Optional: filter(), includes()



### 36. Search Box Component



### 37. Exercise: Where To Put State?



### 38. Class Methods and ArrowFunctions



### 39. Exercise: Event Binding



### 40. Quick Note: Binding in React



### 41. Optional: Git + Github



### 42. Optional: Connecting With SSH ToGithub



### 43. Deploying Our App



### 44. React and ReactDOM



### 45. Revisiting VirtualDOM +Unidirectional Data Flow



### 46. Asynchronous setState



### 47. Introducing Lifecycle Methods



### 48. React Lifecycle Methods - Mounting



### 49. React Lifecycle Methods - Updating



### 50. React Lifecycle Methods -Unmounting



### Quiz 1: When should we use afunctional component vs a class com



### 51. Section Review





### Section 4: Master Project: SettingUp E-commerce Project
### Section 5: Master Project: ReactRouter and Routing
### Section 6: Master Project: Forms +Components
### Section 7: Master Project: Firebase +User Authentication
### Section 8: Master Project: Redux 1
### Section 9: Master Project: SessionStorage + Persistence
### Section 10: Master Project: Redux 2
### Section 11: Master Project:Advanced Routing
### Section 12: Master Project: StateNormalization
### Section 13: Master Project: StripePayments Part 1
### Section 14: Master Project:Deploying To Production
### Section 15: Master Project: CSS in JS- styled-components
### Section 16: Master Project:Advanced Redux + Firebase
### Section 17: Master Project: HOCPatterns
### Section 18: Master Project: Asynchronous Redux
### Section 19: Master Project:Container Pattern
### Section 20: Master Project:Redux-Saga
### Section 21: Master Project: ReactHooks
### Section 22: Master Project: StripePayments Part 2 - Backend
### Section 23: Master Project: ContextAPI
### Section 24: Master Project: GraphQL+ Apollo
### Section 25: Master Project: MobileSupport
### Section 26: Master Project: ReactPerformance
### Section 27: React Interview Questions + Advice
### Section 28: Bonus: Progressive Web App
### Section 29: Bonus: Testing
### Section 30: Bonus: Webpack + Babel
### Section 31: Bonus: Build a GatsbyJSBlog
### Section 32: Appendix 1: KeyDeveloper Concepts
### Section 33: Bonus: Coupon Codes +Freebies