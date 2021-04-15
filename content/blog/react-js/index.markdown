---
title: A walk through reactjs
date: "2020-09-03T22:12:03.284Z"
description: "React JS is a open source frontend JavaScript library that focuses on building reach user interfaces.It was created and maintained by Facebook"
---

**Reactjs** React JS is a open source frontend JavaScript library that focuses on building reach user interfaces.
It has a component based architecture and handles DOM update gracefully.
You can intergrate other third party packages into react and react too intergrate with other applications or a portion of an application gracefully.

To get started with reactjs you need *nodejs*, *a code editor* and *npm*.

install create-react-app with npm

```bash
npm install create-react-app -g
```

Create your reactjs project with ```npx``` and open it in your code editor.

```bash
npx create-react-app project-name
```

move into your project folder and run ```npm start``` to start a local live server on port ```3000```.

Components are part of the UI. There are two types of components:

+ Functional components
+ Class components

Reactjs uses jsx(JavaScript XMl) an extension of JavaScript language syntax which allows you to write xml like code which is intuitive and easy to understand.
It translates to regular JavaScript.

React with ```jsx```.

```javascript
import React from 'react'

export default function Hello() {
    return (
        <div id="hello">
            <h1 className="text">Hello World</h1>
        </div>
    )
}

```

React without ```jsx```.

```javascript
import React from 'react'

export default function Hello() {
    return React.createElement("div", {id:"hello"}, React.createElement("div", {classNane:"text"}, "Hello World"))
}
```

### Props

Props are immutable.
Working with props in react.Here we create props in the ```hello.js``` and pass them in the ```app.js```

```hello.js```

```javascript
import React from 'react'

////With functional component
// function Hello(props) {
//     console.log(props)
//     return (
//         <div>
//            <h1> Hello {props.name}</h1> 
//            <h1>Hero {props.hero}</h1>
//            {props.children}
//         </div>
//     )
// }

////With class component
class Hello extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <h1>Hero {this.props.hero}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Hello


```

```app.js```

```javscript
import React from "react";
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
      <Hello name="Davis" hero="Flash">
        <p>Likes JavScript</p>
        </Hello>
      <Hello name="ken" hero="Batman"/>
      <Hello name="Marion" hero="Wonder woman"/>
    </div>
  );
}

export default App;
```

```props.children``` allows you to pass individual props to individual components.

### State

### Event handling

### Conditional Rendering

#### If ... else

#### Element variables

#### Ternary operators

#### List rendering

### Styling

#### CSS Stylesheets

#### Inline Styling

#### CSS Modules

#### CSS in JS

### Forms