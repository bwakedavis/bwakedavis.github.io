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

#### Destructuring props

With function paramaters.

```javascript
function Hello({name, hero}) {
    return (
        <div>
           <h1> Hello {name}</h1> 
           <h1>Hero {hero}</h1>
        </div>
    )
}
export default Hello
```

In the component body.

```javascript
function Hello(props) {
    const {name, hero} = props;
    return (
        <div>
           <h1> Hello {name}</h1> 
           <h1>Hero {hero}</h1>
        </div>
    )
}
export default Hello
```

In class components

```javascript
class Hello extends React.Component {
    render() {
        const {name, hero} = this.props;
        return(
            <div>
                <h1>Hello {name}</h1>
                <h1>Hero {hero}</h1>
            </div>
        )
    }
}

export default Hello
```

#### passing methods as props

### State

state should not be updated directly instead use ```useState```.

```javascript
import React from 'react';

class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            count2: 0
        }
        this.increment = this.increment.bind(this);
    }
    //use callback function
    increment() {
        this.setState({count: this.state.count + 1}, ()=>{
            console.log(this.state.count);
        })

        //using previous state
        this.setState((prevState, props) => ({
            count2: prevState.count2 + 1
            // count2: prevState.count2 + props.value
        }))
    }
    render() {
        return(
            <div>
                <h1>Count {this.state.count}</h1>
                <h1>Count2 {this.state.count2}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Hello


```

### Event handling

```javascript
import React from 'react';

class Hello extends React.Component {
    constructor(){
        super();

    }
    handleClick = () => {
        console.log("hello")
    }

    render() {
        return(
            <div>

                <button onClick={this.handleClick}>Click</button>
    
            </div>
        )
    }
}


export default Hello
```

#### Binding event handlers

Event handlers are binded because of ```this``` keyword

```javascript
import React from 'react';

class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            greeting: "hi"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({greeting: "hello"})
    }
    //doesn't require binding
    handleClick = () => {
        this.setState({greeting: "hello"})
    }

    render() {
        return(
            <div>

                <h1>{this.state.greeting}</h1>
                <button onClick={this.handleClick}>Click</button>
                <button onClick={this.handleClick.bind(this)}>Click2</button>
                <button onClick={()=>{
                    this.handleClick();
                }}>Click3</button>
            </div>
        )
    }
}


export default Hello

```

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