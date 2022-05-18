---
title: learn JavaScript
date: "2018-12-27T22:12:03.284Z"
description: "JavaScript is a scripting language developed to add functionality in the browser. It's use nowadays extends building mobile apps, creating servers, building desktop apps etc"
---

Was created by Brendan Eich in 1996
Inbuilt in all the browsers
```code``` is a set of special instructions written to tell a computer what to do
```computer language``` is  a set of rules for valid format and combination of instructions
```statements``` - a group of words, numbers and operators that perform a specific function or task
```variables``` - boxes that store data
```literal value``` - a value not stored in a variable
```expressions``` - any reference to a variable and values combined with operators

### Linking JavaScript to your HTML

#### Method 1

Adding scripts tag to your HTML at the end of the body tag

```html
    <script>
      JavaScript code goes here
    </script>
```

#### Method 2

Linking an external javaScript file to your HTML

```html
    <script src="./path/index.js"></script>
```

## JavaScript Datatype

### Primitive Datatype

* String
* Number
* Boolean
* Null

### Reference types

* Array
* Object
* Function

### Variables

Variables are containers that store data values

```javascript
    var name = "Davis" //String
    var id = 25467 //Number
    var isCool = true //Boolean
    var stranger //undefined value
    var age = 20
```

variables declared with var and let can be re-assigned

```javascript
    name = "bwake"
    id = 74621
    isCool = false
    stranger = null //nothing
```

You can also concatenate strings with with variables

```javascript
    var complement = name + "is cool"
```

Lets log the above variables on the console, you can use browsers console or run the file on the terminal with node

```javascript
    console.log(name,id,isCool,stranger, complement)
```

### Math Operations

JavaScript supports many many operations, here are the basic ones in their shortest form

```javascript
    id += 2
    console.log(id)
    id -= 2
    console.log(id)
    id *= 2
    console.log(id)
    id /=2
    console.log(id)
    id  %=2
    console.log(id)
```

### Arrays

Arrays are used to store multiple values in a single variable

```javascript

    var myList = ['Dodge', 'Duck','Dive','Done', ] //a numbered list of items
    myList.push('Davis') //Add array to top of the stack
    myList.pop() //Remove the item on top of the stack
    myList.unshift('Dan') //Add item to the bottom of the stack
    myList.shift() //Remove item from the bottom of the list
    myList.splice(0, 1, "Donstesh") //Replace items in the array
    myList.reverse()
    myList.sort()

    console.log(myList, myList[0], myList[3],myList.length-1,myList.indexOf('Duck'), myList.lastIndexOf('Duck'))

    //indexOf Return index of the item else returns -1 counting from the start
    //lastIndexOf Return index of the item else returns -1 counting from the end

```

#### JavaScript high order array methods


The es6+ array methods are now a way to go when working with arrays and objects in an array.They can save you a lot of pain and even make you say **bye** to loops 😁😁😁

Lets have a look at the most used ones:

So we will be working with a simple array containing numbers and another one containing a few objects.

**index.js**

```javascript

const users = [
    {
        "age":20,
        "name": "Davis",
        "email":"davis@gmail.com"
    },
    {
        "age":22,
        "name": "Dan",
        "email":"dan@gmail.com"
    },
    {
        "age":40,
        "name": "Don",
        "email":"don@gmail.com"
    },
    {
        "age":70,
        "name": "Andrew",
        "email":"andrew@gmail.com"
    },
    {
        "age":14,
        "name": "Ben",
        "email":"ben@gmail.com"
    },
    {
        "age":56,
        "name": "Charlotte",
        "email":"charlote@gmail.com"
    },
    {
        "age":12,
        "name": "Erlin",
        "email":"erlin@gmail.com"
    }
]

const numbers = [45,64,12,56,24,99,76,9,35,71,17,28,83,40]
```

###### .forEach()

**forEach** executes the specified function for every item in the array

```javascript

    numbers.forEach(number => {
    console.log(number)
    });

    //Returns all the numbers in the array

    users.forEach(user => {
        console.log(user.name)
    });

    //Returns each users name

```

##### .filter()

**filter** creates a new array with all elements that pass the condition provided.

```javascript

    const large = numbers.filter((number)=>{

    if(number > 20){
        return true
    }
    })

    console.log(large)

    //Returns an arrays of number above 20

    const adult = users.filter((user)=>{
    if(user.age > 20){
        console.log(`${user.name} is an adult`)
    }
    })

    //Returns users above the age of 20

```

##### .map()

**map** creates a new array populated with results as specified in the function

```javascript

    let newNumbers = numbers.map((number)=>{
    return number
    })

    console.log(newNumbers)

    //Returns a new array of numbers

    let userEmails = users.map((user)=>{
        return user.email
    })

    console.log(userEmails)

    //Returns user's emails

```

##### .sort()

**sort** method sorts the elements of an array and returns the sorted array

```javascript

    let ascendingN = numbers.sort((number1,number2)=>{
    return number1 - number2
    })

    console.log(ascendingN)

    //Sorted numbers in ascending order

    let descendingN = numbers.sort((number1,number2)=>{
        return number2 - number1
    })

    console.log(descendingN)

    //Sorted numbers in descending order

    users.sort((user1,user2)=>{
    if(user1.age > user2.age){
        console.log(`${user1.name} is older than ${user2.name}`)
    }else{
        console.log(`${user2.name} is older than ${user1.name}`)
    }
    })

    //Compare the users age
```

##### .reduce()

Generate a single value from an object of an array

```javascript
    let sum = numbers.reduce((total,number)=>{
    return total + number
},0)

console.log(sum)

//Returns the sum of numbers

let sumOfAges = users.reduce((total,user)=>{
    return total + user.age
},0)

console.log(sumOfAges)

//Returns the sum of users age

```

##### .some()

Determines whether one or more an array value corresponds with what you are looking for and returns true or false

```javascript

    let hasId = users.some((user)=>{
        return user.id
    })

    console.log(hasId)

    //Returns false
```

##### .every()

Checks if every item in an array meets a condition specified and returns a Boolean

```javascript
    let hasEmail = users.every((user)=>{
    return user.email
    })

    console.log(hasEmail)

    //Returns true
```

Cheers if you reached here.I bet you enjoyed and you're considering using loops ever again 😂😂



### Objects

```javascript
    const myObject= {
    name:'Davis',
    age:20,
    isCool:true
    }
    myObject.id = 34875;
    myObject["lastName"] = 'bwake'
    console.log(myObject)
```

### Functions

```javascript
    function hello(name){
        console.log('Hello ' + name)
    }
    hello('Davis')
```

### if ... if else statements

```javascript
    if(age ==20){
    console.log('You are twenty years old')
    }else if(age<20){
        console.log("you're 19 years old or younger")
    }else{
        console.log("you're above 20 years old'"
    }

    if(age<30 && age>10){
        console.log("you're between 11 and 30 age bracket")
    }
    if(age==20 || name=='bwake'){
        console.log(name + " you're " + age +' years old')
    }
    //Ternary operator
    name =='bwake'? console.log(name): console.log("I don't know you ")
    //Falsy(values that evaluate to false) => false, null,undefined, 0, "",'', NaN

    //Comparison operators => <, <=, >, >=, ==, !=, !==

    //Binary logical operators => &&, ||
```

### For loops

Nested for loops in arrays and objects.

```javascript

for (let i = 0; i< 4; i++) {
    for(let j= 0; j< 4; j++) {
        console.log(i, j)
    }
}

let twoDNumbersArray = [[8,4,5,5,4,6],
[9,4,5,5,4,6],
[56,4,5,5,4,6],
[42,4,5,5,4,6]];

let rows = twoDNumbersArray.length;
for(let i=0; i< rows; i++) {
    let items = twoDNumbersArray.length;
    console.log(i, items);
    for(let j= 0; j < items; j++) {
        console.log(twoDNumbersArray[i][j])
    }
}

let names = { people: [
    {name: "Hiro", voice: "Ryan"},
    {name: "Baymax", voice: "Scott"},
    {name: "Tamago", voice: "Jamie"},
    {name: "Fred", voice: "Miller"},
]}

//nested for loops.



let characters = names.people;

for(let i=0; i< characters.length; i++) {
    console.log(characters[i].name, characters[i].voice);
    for(let prop in characters[i]) {
        console.log(prop, characters[i][prop]);
    }
}

```






## Scope
1. Block scope - variables declared inside a pair of curly braces cannot be accessed from outside the block scope.
2. Function scope - variables declared inside a function cannot be accessed from outside the function scope.
3. Global scope - globally scoped variables can be accessed inside a block or a function.
4. Nested function scope

```js
let a = 10;
function outer(){
    let b = 20;
    function inner(){
        let c = 30;
        console.log(a, b, c);
    }
    inner()
}
outer();
```

## Closure
A closure is the combination of a function bundled together with references to it's surrounding state. Closures are created every time a function is created, at function creation time.

In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function  and it's scope is what is called closure in JavaScript.

```js
function outer(){
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
const fn = outer();
fn();
fn();
```

## Function Currying
Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.

function f(a, b, c) is transformed to f(a)(b)(c).

```js
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 2, 3));

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            }
        }
    }
}


const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));

const add2 = curriedSum(1);
const add3 = add2(2);
const add4 = add3(3);
console.log(add4)
```

## this keyword
The JavaScript this keyword which is used as a function, refers to the object it belongs to.
It makes functions reusable by letting you decide the object value.
this value is determined by how a function is called.

order of execution:
1. New Binding
2. Explicit Binding
3. Implicit Binding
4. Default Binding

```js
//implicit
const Person = {
    name: 'John',
    sayMyName: function(){
        console.log(`my name is ${this.name}`);
    }
}
Person.sayMyName();

function sayMyName(){
    console.log(`my name is ${this.name}`);
}
sayMyName()// undefined
sayMyName.call(Person); // explicit binding

//constructor function
function Person2( name){
    this.name = name;
}

const p1 = new Person2("Jane");
console.log(p1.name);
```

## Prototype and prototypal inheritance
```javascript
//function prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

const person = new Person('Jane', 'Doe');
const person2 = new Person('John', 'Doe');

//Prototypal inheritance
function SuperHero(firstName, lastName) {
    Person.call(this, firstName, lastName);
    this.isSuperHero = true;
}

SuperHero.prototype = Object.create(Person.prototype);

SuperHero.prototype.constructor = SuperHero;

SuperHero.prototype.fightCrime = function(){
    console.log('Fight crime')
}

const batman =  new SuperHero('Bruce', 'Wayne');
console.log(batman.getFullName())
```

## Class
```javascript
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayMyName(){
        return this.firstName + ' ' + this.lastName
    }
}

const person = new Person('John', 'Doe');
console.log(person.sayMyName());

class SuperHero extends Person {
    constructor(firstName, lastName){
        super(firstName, lastName);
        this.isSuperHero = true;
    }
    fightCrime(){
        console.log('Fight crime');
    }
}
```

## Iterables and Iterators
An object which implements the iterable protocol is called an iterable.
For an object to be an iterable it must implement a method at the key [Symbol.iterator].
That method should not accept any argument and should return an object which conforms to the iterator protocol.
The iterator protocol decides whether an object is an iterator when it is:
 + The object must have a next() method that returns an object with two properties.
 + value: which gives the current element
 + done: which is a boolean indicating whether or not there are more elements that could be iterated upon.

 ```js
 const obj = {
    [Symbol.iterator]: function() {
        let step = 0;
        const iterator = {
            next: function() {
                step ++
                if(step === 1){
                    return { value: 'Hello', done: false };
                } else if(step === 2){
                    return {value: 'World', done: false}
                }
                return {value: undefined, done: true }
            },
        }
        return iterator
    },
}

for (const word in obj){
    console.log(word);
}
```

## Generators

```javascript
function* generatorFunction(){
    yield 'Hello'
    yield 'World'
}

const generatorObject = generatorFunction()

for(const word of generatorObject) {
    console.log(word)
}
```


# Asynchronous JavaScript

JavaScript is synchronous, blocking, single-threaded language.
**Synchronous** - if we have two functions which log messages to the console, code executes top down, with only one line executing at a time.

**Blocking** - No matter how long a previous process takes, the subsequent processes wont kick off until the former is completed.
+ If function A executes an intensive chunk of code, JavaScript has to finish that without moving on to function B. Even if that code takes 10 seconds or more.
+ Web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen.

**Single threaded** - A thread is simply a process that your JavaScript program can use to run a task.
+ Each thread can only do one task at a time.
+ JavaScript has just one thread called the main thread for execution of any code.

## Timeouts and Intervals

In setTimeout the duration is guaranteed between executions, irrespective of of how long the code takes to run the interval will remain the same(Better to use recursive timeouts). You can calculate a different delay before running each iteration.

in setInterval the duration includes the time taken to execute the code you want the code to run. for 100ms, the code takes 40ms to run, the interval is 60ms.

```js
setTimeout(function run() {
    console.log('Hello, world!');
    setTimeout(run, 100);
}, 100);

setInterval(function run() {
    console.log('Hello, world!');
}, 100);
```


```javascript
setTimeout(function, duration, param1, param2, ...)

function greet(name) {
    console.log("Hello " + name)
}

const  timeoutId = setTimeout(greet, 2000, "Dave");

console.log(timeoutId)

clearTimeout(timeoutId);

const  intervalId = setInterval(greet, 2000, "Dave");

console.log(intervalId)

clearTimeout(intervalId);
```
## Callbacks

Function are first class objects in JavaScript. They can be passed as an argument to another function, can be returned as values from other functions and can be stored in variables.

**Synchronous callbacks** - Callbacks that are executed immediately.

```javascript
function greet(name){
    console.log(`Hello ${name}`);
}

function highOrderFunction(callback){
    const name = "Davis";
    callback(name);
}

highOrderFunction(greet)
```
**Asynchronous callbacks** - often used to continue or resume code execution after an asynchronous call operation has completed.
Callbacks are used to delay execution of a function until a particular time or event has occurred.
Allow you to delay the execution of a function. Also used in event handlers.

```javascript
function greet(name){
    console.log(`Hello ${name}`);
}

setTimeout(greet, 0, "Davis");
```

```javascript
const posts = [
    {title: "Post One", body: "Lorem 1..."},
    {title: "Post Two", body: "Lorem 2..."},
    {title: "Post Three", body: "Lorem 3..."}
]

//callback

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li> ${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: "Post Four", body: "Lorem 4..."}, getPosts);
```

## Promises
A promise is a proxy for a value not necessarily known when the promise is created. I t allows you to associate handlers with an asynchronous action's success or failure reason.
A promise is simply an object.

States
**pending** : initial state, neither fulfilled nor rejected.
**fulfilled** : operation completed successfully.
**rejected** : operation failed.

```js
const promise = new Promise((resolve, reject) =>{
    //if the promise is fulfilled
    setImmediate(()=>resolve('Davis'), 3000);
    // if the promise is rejected
    setImmediate(()=>reject('Error occurred'), 3000);
})

const onFulfillment = (result) => {
    //resolve was called
    console.log(result)
    console.log('Success');
}

const onRejection = (error) => {
    console.log('Rejected');
}

promise.then(onFulfillment)
promise.catch(onRejection)
```

#### .then() function

+ Encouraged approach.
+ Even if your onFulfillment callback throws an exception, it is caught and then you can handle it gracefully.

+ onRejection callback handles error from only the Promise.
+ If your callback functions itself throws an error or exception, there is no code to handle the exception.

#### chaining promise

+ Both then and catch can return a promise.
+ .then() and .catch() can be chained.

```javascript
promise.then(onFulfillment).catch(onRejection)
```

#### Promise - Static methods

##### Promise.all()

+ Query multiple API's and perform some actions but only after all the API's have finished loading.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
})
```

+ The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves to an array of the results of the input promises.
+ Returned promise will resolve when all the input's promises have been resolved, or if the input iterable contains no promises.
+ It rejects immediately if any of the input promises reject or the non-promises thrown an error, and will reject with this first rejection message/ error.


##### Promise.allSettled()

+ Waits for all input promises to complete regardless of whether or not one of them is rejected.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
```

##### Promise.race()

+ Returns a promise that fulfills or rejects as soon as one of the input promises fulfills or rejects as soon as one of the input promises rejects, with the value or reason from that promise.

```javascript
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
})
const promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

Promise.race([promise1, promise2]).then((values) => {
    console.log(values);
});
```



```javascript
const posts = [
    {title: "Post One", body: "Lorem 1..."},
    {title: "Post Two", body: "Lorem 2..."},
    {title: "Post Three", body: "Lorem 3..."}
]

//promises

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li> ${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("Something went wrong")
            }
        }, 2000);
    });
   
}

createPost({title: "Post Three", body: "Lorem 3..."}).then(getPosts).catch(err => console.log(err))


//OR
//Using Promise.all

const promise1 = Promise.resolve("Hello");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Bye"));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values => console.log(values)));
```


## async await

The async await keywords allow us to write completely synchronous looking code while performing asynchronous tasks behind the scenes.

**async** keyword is used to declare async functions.
Async functions are functions that are instances of the AsyncFunction constructor. They always return a promise.

```javascript
async function greet() {
    return "Hello";
}

console.log(greet()); //Output: Promise { 'Hello' }

greet().then((value) => {
    console.log(value);
}); //Output: Hello
```

**await** keyword can be put infront of any  async function to pause your code until that promise settles and returns it's result.
await only works inside async functions. Cannot use await in normal functions.

#### Sequential vs concurrent execution
##### Sequential execution

Takes 3 seconds to execute.

```javascript
function resolveHello() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("hello");
        }, 2000);
    })
}

function resolveWorld() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("world");
        }, 1000);
    })
}

// Sequential Execution
async function sequentialStart() {
    const hello = await resolveHello();
    console.log(hello);

    const world = await resolveWorld();
    console.log(world);
}

sequentialStart();
```

##### Concurrent Execution

Takes 2 seconds to complete

```js
function resolveHello() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("hello");
        }, 2000);
    })
}

function resolveWorld() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("world");
        }, 1000);
    })
}

// Sequential Execution
async function concurrentStart() {
    const hello = resolveHello();
    const world = resolveWorld();

    console.log(await hello);
    console.log(await world);
}

concurrentStart();
```

##### Parallel execution

Executes independently

```js
function resolveHello() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("hello");
        }, 2000);
    })
}

function resolveWorld() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("world");
        }, 1000);
    })
}

// Sequential Execution
function parallel() {
    Promise.all([
        (async () => { console.log(await resolveHello())})(),
        (async () => { console.log(await resolveWorld())})(),
    ])

    console.log("Finally completed")
}

parallel()

//Output
/*
Finally completed
world
hello
*/
```

Async parallel

```javascript
function resolveHello() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("hello");
        }, 2000);
    })
}

function resolveWorld() {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve("world");
        }, 1000);
    })
}

// Sequential Execution
async function parallel() {
    await Promise.all([
        (async () => { console.log(await resolveHello())})(),
        (async () => { console.log(await resolveWorld())})(),
    ])

    console.log("Finally completed")
}

parallel()
//Output
/*
world
hello
Finally completed
*/
```


```javascript
const posts = [
    {title: "Post One", body: "Lorem 1..."},
    {title: "Post Two", body: "Lorem 2..."},
    {title: "Post Three", body: "Lorem 3..."}
]

//promises

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li> ${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("Something went wrong")
            }
        }, 2000);
    });
   
}

// Async/Await

async function init() {
    await createPost({title: "Post Four", body: "Lorem 4..."});

    getPosts();
}

init();

// Async/Await/ Fetch

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data);
}

fetchUsers()
```

## Event loop

JavaScript Engine uses Memory Heap and Call Stack.

Browser Web API's.

Callback queue/Task queue

Event loop

## asynchronous JavaScript and XML(AJAX)


Asynchronous JavaScript and XML enables you to:

* Read data from a web server  after the page has loaded
  
* Update a web page without reloading the page
  
* Send data to a web server - in the background

You gonna like it.Lets look how you can update data asynchronously with Ajax

Create a html file where we will display the data we fetch with AJAX on the browser.

Create a JavaScript file to put you JS code and link it or you can use script tag on you html
**index.html**

```HTML

    <body>

        <!-- display data from a local text file -->

        <button id="button">Get Text File</button>
        <div id="text-file"></div>

        <!-- display data from a local json file -->

        <button id="fetch-user">Get User</button>
        <h1>User</h1>
        <div id="user"></div>

        <!-- display an array of data from a local json file -->

        <button id="fetch-users">Get Users</button>
        <h1>Users</h1>
        <div id="users"></div>

        <!-- display data from an online api(Github Api) -->

        <button id="fetch-github-users">Get Github Users</button>
        <h1>Github Users</h1>
        <div id="display-github-user"></div>

        <script src="./ajax.js"></script>
   </body>
```

First we want to fetch data in a local text file and display it on the browser.
Create a text file in your current directory called it 'file.txt'

The data is displayed asynchronously without reloading the browser. Isn't that cool 😊

**index.js**

```javascript
    //Fetch a local text file on click
document.getElementById('button').addEventListener('click', loadFile);

function loadFile(){
    //Create the XHR Object
    let xhr = new XMLHttpRequest();
    // Open the file,
    xhr.open('GET', './file.txt', true);
    // console.log(xhr.readyState)

    // loaders (optional)
    xhr.onprogress=function(){
        console.log(this.readyState)
    }

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            document.getElementById('text-file').innerHTML = this.responseText
        }else{
            document.getElementById('text-file').innerHTML = "Not Found"
        }
    }

    xhr.onerror = function(){
        console.log("an error occurred")
    }

    //Using onreadystatechange(You can use this method instead of onload)

        // HTTP STATUSES
        //200: "OK"
        //403: "Forbidden"
        //404: "Not Found"
        //READY STATE VALUES
        //0:"Request not initialized"
        //1: "server connection established"
        //2: "request received"
        //3: "processing request"
        //4: "Request finished and response is ready"

    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState)
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText)
    //     }
    // }

    //sends request
    xhr.send()
}

```

Next we're going to fetch a local json file with a single object
Create a file in your directory called "user.json"
and paste this

**user.json**

```json
    {
    "age":20,
    "name": "Davis",
    "email":"davis@gmail.com"
    }
```

Lets display the object with ajax

**index.js**

```javascript
  
document.getElementById('fetch-user').addEventListener('click',fetchUser)

function fetchUser(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET','user.json', true)

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            let user = JSON.parse(this.responseText)

            let output = ''
            output += `
            <ul>
            <li>${user.age}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
            </ul>
            `
            document.getElementById('user').innerHTML = output
        }
    }

    xhr.onerror = function(){
        console.log("An error occurred")
    }

    xhr.send()
}

```

We have fetched a single json object successfully,cheers 🥂😇

Let us now fetch an array of json objects.Create a file called 'users.json"

**users.json**

```json
    [
        {
            "age":20,
            "name": "Davis",
            "email":"davis@gmail.com"
        },
        {
            "age":22,
            "name": "Dan",
            "email":"dan@gmail.com"
        },
        {
            "age":40,
            "name": "Don",
            "email":"don@gmail.com"
        }
    ]

```

Lets output it in the browser

**index.js**

```javascript

document.getElementById('fetch-users').addEventListener('click',fetchUsers)

function fetchUsers(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET','users.json', true)

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            let users = JSON.parse(this.responseText)

            let output = ''
            for(let user in users){
                output += `<ul>
                <li>${users[user].age}</li>
                <li>${users[user].name}</li>
                <li>${users[user].email}</li>
                </ul>`
            
            }

            document.getElementById('users').innerHTML = output
        }
    }

    xhr.onerror = function(){
        console.log("An error occurred")
    }

    xhr.send()

    }

```

We did it,One more thing we want to work with a remote API we will be working with the github API and fetch users

This is the url <https://api.github.com/users>

**index.js**

```javascript
    document.getElementById('fetch-github-users').addEventListener('click', fetchGithubUsers)

    function fetchGithubUsers(){
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users', true)

        xhr.onload = function(){
            if(this.status == 200){
                let users = JSON.parse(this.responseText)
                let output = ""
                for(let user in users){
                    output += `
                    <div class="user">
                    <img src= ${users[user].avatar_url} width="100" height="100"/>
                    <ul>
                        <li>ID: ${users[user].id} </li>
                        <li>User Name: ${users[user].login} </li>
                        <li>Url: ${users[user].url} </li>
                        <li>Followers Url: ${users[user].followers_url} </li>
                    </ul>
                    </div>
                    `
                }
                document.getElementById('display-github-user').innerHTML = output;
            }
        }
        xhr.send()
    }
```

Cheers go enjoy AJAX 🥳 🥳