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

this creates a ```ts-confi```g file

```bash
tsc init
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
