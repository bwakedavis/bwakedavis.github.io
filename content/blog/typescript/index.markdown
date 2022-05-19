---
title: learn TypeScript
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

Create a .ts file and open it in your favorite code editor eg. ```main.ts```

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

You can use ```-w``` flag to watch the file during development so that you don't have to recompile the code every time you save your code.

```bash
tsc main.js -w
```

Suppose you have multiple typescript file in thw ```src``` and you want to compile all the file to the ```public``` folder

this creates a ```ts-config``` file

```bash
tsc --init
```

Edit the generated file according to your preferred configurations

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

let id: number = 5;
let company: string = "Bwake Group";
let isPublished: boolean = false;
let x: any = "hello world";

//more than one possible type variable
let id: string|number;

//Arrays
let names = ["Davis", "Austin", "Williams" ];
let names2: string = ["Davis", "Austin", "Williams" ];
let ids: number[] = [1, 2, 3, 4, 5];
//mixed arrays
let mixed = ["Reactjs", 2021, true, 420];
let arr: any[] = ["hi", true, 5];

let mixed2: (string| number| boolean)[] = ['hey', 420, true];

//Tuple
let person: [number, string, boolean] = [1, "hello", true];

//Tuple Array
let employee: [number, string][];

employee = [
    [1, 'John'],
    [2, 'Jane'],
    [3, 'Doe']
]

```
```any``` type. A variable can be any type in future.

```typescript
let age: any = 21;
age = true;
console.log(age);
age = "Hi";
console.log(age);
age = {fName: "my FirstName"};
console.log(age);

const mixed: any[] = [];
mixed.push(10);
mixed.push("name");
mixed.push(true);
console.log(mixed);

```

### Functions

```typescript
let sayHi = () => {
    console.log("Hi");
}

let sayHello: Function;

sayHello = () => {
    console.log("hello");
}

const add = (a: number, b: number, c?: number| string, d: number| string = "10") => {
    console.log(a+ b);
    return a+ b;
}
//c and d are optional parameters

let result = add(3,42);

//Functions

function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(2,3))

// Void

function log(message: string | number): void {
    console.log(message);
}

log(100)
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

### Type Alias

```typescript
type StringOrNumber = string | number;

const greet = (uid: StringOrNumber, username: string) => {
    console.log(`${uid} - ${username}`)
}

greet(4,"davis");

// Type Assertion

let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number

```

### Objects

```typescript
let myObject: {
    name: any,
    age:  any
}

myObject = {name: "Davis", age: 30}
console.log(myObject)
//Objects
let myObject = {
    language: "Swahili",
    age: 21,
    likesCoffee: true

}

let myObject2: object = {
    language: "English",
    age: 8,
    likesCoffee: false
}

let myObject3 = {
    language: string,
    age: number,
    likesCoffee: boolean
}
myObject3 = {
    language: "English",
    age: 10,
    likesCoffee: true
}

//Objects  and types
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "John"
}

type Point = number | string;
const p1: Point = 1;

console.log(p1);
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

//Classes
interface ManInterface {
    sayName(): string
}

class Man implements ManInterface{
    private id: number; // makes property private to the class. protected
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }

    register() {
        return `${this.name} is now registered`;
    }

    sayName(): string {
        return `The user's name is ${this.name}`
    }
}

const dave = new Man(1, "Dave");

console.log(dave.sayName());
console.log(dave.register());

class Employee extends Man {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

    
}

const emp = new Employee(36, "Steve", "Developer");
```

### enums

```typescript
//Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Left)
```

### Generics

```typescript
//Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
console.log(numArray)
let strArray = getArray<string>(["Jane", "Doe"])
console.log(strArray)

//
const last = <T>(arr: Array<T>) =>{
    return arr[arr.length - 1];
}

const l = last([1,2,3]);

const l2 = last<string>(["a", "b", "c", "d"]);

const makeArr = <T, Y = number>(x:T, y:Y) => {
    return [x];
}

const v = makeArr <number, number>(5,6);
const v2 = makeArr("a", "b");
const v3 = makeArr(8, "d");
const v4 = makeArr<string| null>("a", 7)

const makeFullName = <T extends { firstName: string, lastName: string}> (
    obj: T
) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName;
    }
}

const v5 = makeFullName({firstName: "John", lastName: "Doe"}, age: 22);
```

### Unions

```typescript
//Union 
let pid: string | number;
pid = 22;
```

### Interfaces

```ts
// Interfaces

interface PersonInterface {
    readonly id: number //set to readonly
    name: string
    age?: number // optional
}

const person2: PersonInterface = {
    id: 34,
    name: "Jane"
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

```