---
title: Learn TypeScript
date: "2021-01-03T22:12:03.284Z"
description: "TypeScript is a superset of JavaScript that extends JavaScript by adding types.
It saves you time by catching the errors before you run the code.It compiles down to JavaScript.
Let's dive in and see how this JavaScript with types look like."
---


**TypeScript** is a superset of JavaScript that extends JavaScript by adding types.
It supports es6+ features, contains static typing and other features.
It saves you time by catching the errors before you run the code.
It was released in 2012 by Microsoft.

Typescript compiles down to JavaScript.
Install typescript compiler globally from npm.

```bash
sudo npm install -g typescript
```

Create a .ts file and open it in your favourite code editoreg. ```main.ts```

```typescript
let greetings = "Hello World";
```

Compile the typescript code down by opening the terminal then run

```bash
tsc "your filename"
//example
tsc main.js
```

This creates a ```.js``` file in the same directory with the same name and writes the javascript code from our typescript file.

You can use ```-w``` flag to watch the file during development so that you don't have to recompile the code everytime you save your code

```bash
tsc main.js -w
```

Suppose you have multiple typescript file in thw ```src``` and you want to compile all the file to the ```public``` folder

this creates a ```ts-config``` file

```bash
tsc --init
```

Edit the generated file according to your preffered configurations

```json
target: "es6",
rootDir: "./src",
outDir: "./public",
```

Suppose You want to compile  files from the ```src``` to the ```public```.Add the line at the end.

```javascript
,
"include", ["src"]
```

### Types in Typescript

Once you declare a variable type you cannot re-assign it with a different type eg sub a string with an integer.

You can't add additional properties to an object that wasn't defined.You can re-assign an object but it should have the same structure as defined before.
An array only accepts the types of data defined with initially. ie you can't push a number in an array of strings.

```typescript
let name = "Bwake";
//Explicit type
let name2: string = "Davis";

let num = 20;
let num2: string = 21;

let isHot = true;
let isCold: boolean = false;

//more than one possible type variable
let id: string|number;

//Arrays
let names = ["Davis", "Austine", "Williams" ];
let names2: string = ["Davis", "Austine", "Williams" ];
//mixed arrays
let mixed = ["Reactjs", 2021, true, 420];
let mixed2: (string| number| boolean)[] = ['hey', 420, true];

//Objects
let myObject = {
    language: "Swahili",
    age: 21,
    likesCoffe: true

}

let myObject2: object = {
    language: "English",
    age: 8,
    likesCoffe: false
}

let myObject3 = {
    language: string,
    age: number,
    likesCoffe: boolean
}
myObject3 = {
    language: "English",
    age: 10,
    likesCoffe: true
}
```

```any``` type. A variable can be any type in future.

```typescript
let age: any = 21;
age = true;
console.log(age);
age = "Hi";
console.log(age);
age = {fname: "my FirstName"};
console.log(age);

const mixed: any[] = [];
mixed.push(10);
mixed.push("name");
mixed.push(true);
console.log(mixed);

let myObject: {
    name: any,
    age:  any
}

myObject = {name: "Davis", age: 30}
console.log(myObject)
```

### Functions

```typescript
let sayHi = () => {
    console.log("Hi");
}

let sayhello: Function;

sayhello = () => {
    console.log("hello");
}

const add = (a: number, b: number, c?: number| string, d: number| string = "10") => {
    console.log(a+ b);
    return a+ b;
}
//c and d are optional parameters

let result = add(3,42);
```

### Type Alias

```typescript
type StringOrNumber = string | number;

const greet = (uid: StringOrNumber, username: string) => {
    console.log(`${uid} - ${username}`)
}

greet(4,"davis");
```

### Function signatures

Specifying the function a variable can hold.

```typescript
//A void function returns nothing
let sayHi: (a:string, b:string) => void;
sayHi = (name:string, greeting:string) => {
    console.log(`${name} says ${greeting}`);
}


let calculate: (a: number, b: number, c: string) => number;

calculate = (num1: number, num2: number, action: string) => {
    if(action === "add"){
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}
logDetails = (newObj: person) => {
    console.log(`${newObj.name} is ${newObj.age}`)
}
```

### Typecasting and interacting with the DOM

```typescript
const a = document.querySelector('a');

if(a) {
    console.log(a.href);
}
//or

const a2 = document.querySelector('a')!;

console.log(a2.href);

const form = document.querySelector('form')!;

//typecasting
const form2 = document.querySelector('.form-container') as HTMLFormElement;

const select = document.querySelector('#select') as HTMLSelectElement;

const input = document.querySelector('#input') as HTMLInputElement;
```

### Classes

```typescript
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string,d: string,a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}

const invoice = new Invoice("Davis", "building a smart contract", 500);
```
