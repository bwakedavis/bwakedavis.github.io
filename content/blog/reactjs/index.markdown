---
title: a walk through reactjs
date: "2020-09-03T22:12:03.284Z"
description: "React JS is a open source frontend JavaScript library that focuses on building reach user interfaces.It was created and maintained by Facebook"
---

**Reactjs** React JS is a open source frontend JavaScript library that focuses on building reach user interfaces.
It has a component based architecture and handles DOM update gracefully.
You can integrate other third party packages into react and react too integrate with other applications or a portion of an application gracefully.

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
    return React.createElement("div", {id:"hello"}, React.createElement("div", {className:"text"}, "Hello World"))
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

```javascript
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

With function parameters.

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

```parent.js```

```javascript
import React from 'react';
import Hello from './hello';
class Parent extends React.Component {
    constructor(){
        super();
        this.state = {
            parentName: "parent"
        }
       
    }

    greetParent = () => {
        console.log(`hello ${this.state.parentName}`)
    }

    render() {
        return(
            <div>
                <Hello greetHandler ={this.greetParent} />
                
            </div>
        )
    }
}


export default Parent

```

```child.js```

```javascript
import React from 'react'

function Hello(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler(`child`)}>Greet Parent</button>
        </div>
    )
}

export default Hello;


```

With parameters

```parent.js```

```javascript
import React from 'react';
import Hello from './hello';
class Parent extends React.Component {
    constructor(){
        super();
        this.state = {
            parentName: "parent"
        }
       
    }

    greetParent = (childName) => {
        console.log(`hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return(
            <div>
                <Hello greetHandler ={this.greetParent} />
                
            </div>
        )
    }
}


export default Parent


```

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

Event handlers are bind because of ```this``` keyword

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

```javascript
import React from 'react';

class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn:false
        }
    }

    render() {
        if(this.state.isLoggedIn) {
            return(
                <div>
                     <h1>Welcome Davis</h1>
                </div>
            )
        } else{
        return(
            <div>
                <h1>Welcome  Guest</h1>
            </div>
        )
    }
    }
}


export default Hello;

```

#### Element variables

```javascript
import React from 'react';

class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn:false
        }
    }

    render() {
        let message;
        if(this.state.isLoggedIn) {
                message =  <h1>Welcome Davis</h1>;
        } else{
                message = <h1>Welcome  Guest</h1>;
    }

    return <div>{message}</div>
    }
}

export default Hello;

```

#### Ternary operators

```javascript
import React from 'react';

class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn:false
        }
    }

    render() {
    return (
    <div>
        {this.state.isLoggedIn ? <h1>Welcome Davis</h1> : <h1>Welcome  Guest</h1>}

        or render blank if false

        {this.state.isLoggedIn && <h1>Welcome Davis</h1>}
    </div>
    )
    }
}

export default Hello;
```

#### List rendering

```javascript
import React from 'react';

function Hello() {

    const colors = ["pink", "blue", "white"];
    const colorList = colors.map(color=> <h2>{color}</h2>)
    return (
    <div>
        {colors.map(color => 
            <h1>{color}</h1>
        )}

        {colorList}
    </div>
    )
    }

export default Hello;
```

Lists and keys.Keys are not accessible in the child component.

```javascript
import React from 'react';

function Hello() {

    const colors = ["pink", "blue", "white"];
    const colorList = colors.map(color=> <h2 key= {color}>{color}</h2>)
    return (
    <div>
        {colors.map(color => 
            <h1 key={color}>{color}</h1>
        )}

        {colorList}
    </div>
    )
    }

export default Hello;
```

Using index as key. It's not recommended especially when the items can be removed or others added at the beginning.
Use index as a key when:

+ your items don't have an id
+ your list is static and won't change
+ your list won't be reordered or filtered.

```javascript
import React from 'react';

function Hello() {

    const colors = ["pink", "blue", "white"];
    const colorList = colors.map((color, index)=> <h2 key= {index}>{color}</h2>)
    return (
    <div>
        {colors.map((color,index) => 
            <h1 key={index}>{index} - {color}</h1>
        )}

        {colorList}
    </div>
    )
    }

export default Hello;
```

### Styling

#### CSS Stylesheets

```javascript
import './index.css';
```

#### Inline Styling

```javascript
import React from 'react';

const styles = {
    color: 'blue',
    fontSize: '60'
}
function Hello() {
    return (
    <div>
        <h1 style= {styles}>Hello</h1>
    </div>
    )
    }

export default Hello;
```

### Forms

```javascript
import React, { Component } from 'react'

export class hello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            color: ""
        }
    }

    handleName = (event) => {
        event.preventDefault();

        this.setState({name: event.target.value})
    }

    handleDesc = (event) => {
        event.preventDefault();

        this.setState({description: event.target.value})
    }

    handleColor = (event) => {
        event.preventDefault();

        this.setState({color: event.target.value})
    }
    render() {
        return (
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={this.state.name} onChange = {this.handleName}/>

                <label htmlFor="description">Description</label>
                <textarea name="description" id="desc" cols="30" rows="10" value = {this.state.description} onChange = {this.handleDesc}></textarea>

                <label htmlFor="color">color</label>
                <select name="color" id="clr" onChange= {
                    this.handleColor
                }>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="red">red</option>
                </select>
            </div>
        )
    }
}

export default hello
```

### Lifecycle Methods

#### Mounting phase

Components are mounted after all the children have been rendered.

```js
import React, { Component } from 'react'

export class Hello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Davis"
        }
        console.log("Lifecycle1 - constructor")
    }

    static getDerivedStateFromProps(props,state) {
        console.log("Lifecycle1 - getDerivedStateFromProps")
    }

    componentDidMount() {
        console.log("Lifecycle1 - componentDidMount")
    }

    render() {
        console.log("Lifecycle1 - render")
        return (
            <div>
                <h1>hey</h1>
            </div>
        )
    }
}

export default Hello

```

#### UPdating phase

```js
import React, { Component } from 'react'

export class Hello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Davis"
        }
        console.log("Lifecycle1 - constructor")
    }

    static getDerivedStateFromProps(props,state) {
        console.log("Lifecycle1 - getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle1 - componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("Lifecycle1 - shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle1 - getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate() {
        console.log("Lifecycle1 - componentDidUpdate")
    }

    changeName = (e) =>{
        e.preventDefault();

        this.setState({name: "Bwake"})
    }

    render() {
        console.log("Lifecycle1 - render")
        return (
            <div>
                <h1>hey</h1>
                <button onClick= {this.changeName}>button</button>
            </div>
        )
    }
}

export default Hello
```

### PureComponent

```js
import React, { PureComponent } from 'react'

export default class Hello extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "Davis"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Davis"
            })
        }, 2000)
    }
    render() {
        console.log("pure component");
        return (
            <div>
                <h1>Pure component {this.state.name}</h1>
            </div>
        )
    }
}
```

### memo

```js
import React from 'react'

function Hello({name}) {
    console.log('Render memo')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Hello);
```

### refs

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Hello extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef)

        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    btnHandler = () => {
        console.log(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>

                <button onClick={this.btnHandler}>button</button>
            </div>
        )
    }
}

export default Hello
```

### Portals

Gives you the ability to breakout of DOM element

```index.html```

```html
    <div id="root"></div>
    <div class="portal-root"></div>
```

```component.js```

```js
import React from 'react';
import ReactDOM from 'react-dom';

function PortalComp() {
    return ReactDOM.createPortal(
            <h1>Portal demo</h1>,
            document.getElementById('portal-root')
    )
}

export default PortalComp;
```

### Error handling

Error boundaries are REact components that catch javaScript error in their child component tree, log this errors and display a fall-back UI.

A class component becomes an Error Boundary by defining either or both of getDErivedFromError and componentDidCatch lifecycle methods.

The placement of the Error Boundary matters as it controls if the entire app should have the fall-back UI or just a component causing the problem. It provides a way to gracefully handle error in application code.

```js
import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
        componentDidCatch(error, info) {
        return{
            hasError:true
        }
    }
    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
```

### Higher order components - HOC

Helps share common functionality between components

```js
import React from 'react'

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1 }
            })
        }
        render() {
            return <OriginalComponent count={this.state.count}
            incrementCount={this.incrementCount} />
        }
    }
    return NewComponent
}

export default UpdatedComponent
```

```js
import React, { Component } from 'react'
import UpdatedComponent from './withCounter';

export class HoverCounter extends Component {
 
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver = {incrementCount}>  Hovered {count} timer</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter) 
```
