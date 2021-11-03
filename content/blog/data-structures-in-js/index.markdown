---
title: Data Structures and Algorithms in JavaScript
date: "2020-12-10T22:12:03.284Z"
description: "Data Structures and Algorithms are important concepts in Computer Science and oftenly come up in software development and related roles interview questions.Let's dive and start learning using javaScript"
---


**Data Structure** is a way of organizing data so that it can be used effectively.

It's a named collection that can be used to store and organize data so that it can be accessed efficiently

**Abstract data types** are abstraction of data which provides only the interface to which a data structure must adhere to.
The interface does not give any specific details about how something should be done.

Types of Datastructures - Linear, non-linear

An **algorithm** is a sequence of instructions to solve a clearly defined problem.
or
Is a set of steps to accomplis a certain task.

The best algorithm is the one which has the best performance.

#### Fatctors of a good algorithm

+ Input and output should be defined precisely
+ Clear steps and unambigous
+ Most effective
+ Should just include code

#### Steps of solving a problem

1. **Understand the problem**
   + Can you restate the problem in your own words
   + Wh Understand the problemat are the inputs that go into the problem
   + What are the outputs that are expectedCan output be dertermined from inputs
   + How do you label important pieces of data that are part of the problem
2. Explore concrete example
   + come up with an example
   + sanity check so that the solution works
   + user stories
   + unit tests
   + start with simple examples
3. Break down the problem
   + Explicitly write the steps you need to take
4. Solve and simplify the problem
   + Write a simplified solution
   + Master common problem solving pattern
   + devise a plan for solving the problems
5. Look back to the solution and refactor

#### Importance

+ Code performance
+ Trade offs among different approaches
+ Identifying inefficiencies
+ Interviews

### Factors to consider when designing a data structure

+ Speed - how fast
+ Memory - less memory intensive
+ Readability - more readble code

The problem with *time* facto is that:

+ *different or same machine record different time*

using browser console to test time
Here when the number of input(n) increases it increases the number of iterations consequently increasing the time in a linear way.

```javascript
let start = 0;
let end = 0

function sumUp(n) {
    let result = 0;
    for(let i = 1; i <= n; i++) {
        result = result + 1;
    }
    return result;
}

start = performance.now();
sumUp(1000);
end = performance.now();
end - start
```

+ *speed might not be precise*

## Big O Notation

It allows us to talk formally how the runtime of an input grows as the input grows.
It gives you an upper bound on the complexity in the worst case, helping to quantify performance as input size becomes arbitrary large.
It helps us write code tha runs faster using less memory(RAM).
Constants don't matter.It only cares about the graph shape.
Smaller terms don't matter.It only cares about the number of operations as N approaches infinity.

+ Arithmetic operations are constant
+ Variable assignment is constant
+ Acessing elements in an array(by index) or object (by key) is constant.
+ In a loop, the time complexity is the length of the loop times the complexity or whatever happens inside the loop.
  
**Space Complexity** - refers to how much additional memory is needed to be allocated in order to run the code in our algorithm.

**Time Complexity** - Analyze runtime as the size of the input increases.

**Auxiliary Space** - space required by the algorithm, not including space taken by the input

Suppose we have a problem to write a function that that calculates the sum of all numbers from one upto and inclunding a certain number ```n```.

The shorter ```solution 2``` runs in a shorter amount of time than ```solution 1```.
The number of operations in ```solution 1``` grows as n increases.
The number of operations in ```solution 2``` remains constant(3) despite the value of ```n```.

```javascript
//solution 1
function addUpTo(n){
let total = 0;

for (let i=1; i <= n; i++) {
    total += i;
}
return total;
}
let startTime;
let stopTime;
startTime = performance.now()
console.log(addUpTo(100));
stopTime = performance.now();
console.log(stopTime - startTime)

//solution 2
function addUpToN(n){
    return n * (n + 1) / 2;
}

startTime = performance.now()
console.log(addUpToN(100));
stopTime = performance.now();
console.log(stopTime - startTime)
```

### Asymptomatic Analysis

Is amethod of derivind Big 0.
Steps:

+ Define a function i.e mathematical function of the time complexity by counting the number of expression operations.
+ Find the fastest groowing term.
+ Remove the co-efficient.

In some operations the size of the input has no effect on the time it takes the algorithm to run.
eg.using mathematical formulas.

```javascript
let start = 0;
let end = 0

function sumUp(n) {
    return (n/2) * (1 + n);
}

start = performance.now();
sumUp(1000);
end = performance.now();
end - start
```

### Order of Complexities

Starting from the *smallest* to the *largest*.

+ Constant Time: **0(1)**
+ Logarithmic Time: **0(log(n))**
+ Linear Time: **0(n)**
+ Linearithmic Time: **0(nlog(n))**
+ Quadratic Time: **0(n<sup>2</sup>)**
+ Cubic Time: **0(n<sup>3</sup>)**
+ Exponential Time: **0(b<sup>n</sup>), b > 1**
+ Factorial Time: **0(n!)**

### Static and Dynamic Arrays

A **static array** is a fixed length container containing *n* elements *indexable*(each slot can be refernced with a number) from the range of [0, n-1]

**Dynamic arrays** can grow and shrink in size

### Singly and Doubly linked list

*Singly linked list* uses less memory, has a simpler implementaion and it's not easy to access the previous element.

*Doubly linked list* can be traversed backwards and it takes 2 times the memory.

*Head* refers to the first node in a linked list.
*Tail* refers to the last item in the node.
*Pointer* reference another node.
*Node* is an object containing data.

*Stack* is a one ended liner data structure models a real world stack by having two primary operations ie. push, pop.
*Queue* is a linear data structure which models real world queues by having two primary operations namely enqueue and dequeue,

#### Arrays

Ordered lists.
Used when you need order.
fast access,insertion and removal of elements
Insertion order is kept.
Element accessed via indexes.
Iterable using loops.
Size/length adjus dynamically.
Duplicate value are allowed.

Insertion - Depends.

+ inseting at the beginning is 0(N)
+ inserting at the end is 0(1)
  
Removal - Depends
Searching - 0(N)
Access - 0(1)

push - 0(1)
pop - 0(1)
shift - 0(N)
unshift - 0(N)
concat - 0(N)
slice - 0(N)
splice - 0(N)
sort - 0(N * log N)
forEach/map/filter/reduce... - 0(N)

```javascript
let numbers = [100, 200, 300, 400, 500, 650];

//access by index
console.log(numbers[0]);

//iterable
for(const element of numbers){
    console.log(element);
}

//add element to the end
numbers.push(250);
console.log(numbers.length);

//find index of an element
console.log(numbers.findIndex(element => element === 650));

//deleting element with splice
numbers.splice(2,1)
console.log(numbers)
```

#### Sets

Are created with constructor function.
Doesn't allow duplicate values.
Insertion order is not stored.
Element access and extraction via methods.
Size/lenght adjusts dynamically.
Duplicate values are not allowed.
Allows mixed type of data.
Deletion and finding of elements is trivial fast.
Can't be accessed by index. instead uses ```.has``` method.
Iterable.

```javascript
const names = new Set(["Kyle", "Jack", "Evans", 1]);

//add a value
names.add("Shawn");
console.log(names);

//Check if a value exists
console.log(names.has(1))

//loop
names.forEach(item => console.log(item));
```

#### Objects

We use objects when we:

+ don't need order
+ fast access, insertion and removal

Objects can have methods, keys and values.
Unordered key values.
Elements accessed via key(proprty name).
Not iterable (only with for in loop).
Keys are unique, values are not.
Keys can be strings, numbers or symbols.
Can store data and functionality through methods.

Insertion - 0(1)
Removal - 0(1)
Searching - 0(N)
Access - 0(1)

Object.keys - 0(N)

```javascript
console.log(Object.keys(myObject))
```

Object.values - 0(N)

```javascript
console.log(Object.values(myObject)
```

Object.entries - 0(N)

```javascript
console.log(Object.entries(myObject))
```

Object.hasOwnProperty - 0(1)

```javascript
console.log(Object.hasOwnProperty(myObject))
```

```javascript
const student = {
    name: "Davis",
    admNo: "COM 001",
    unit: ["Assembly", "Data Structures"],
    numberOfUnits: 8,
    //Add method to object
    hello() {
        console.log("hello", this.name);
    }
}
//add property
student.age = 21;

console.log(student);
student.hello();
```

#### Maps

Are ordered key value pairs.
Element accessed by the keys.
Iterable
Keys are unique, values aren't.
Keys can be anything including referencing values like arrays.
They're pure data storage optimized for data access.

```JavaScript
const map = new Map();

map.set("country", "Kenya");
map.set("population", 50000000);

let cities = {numberOfCities: 3}

map.set(cities, "three");

console.log(map)

for( const element of map){
    console.log(element);
}

console.log(map.get("country"));
map.delete(cities);
```

#### Weakset and Weakmaps

Variations of sets and maps.
Values and keys are only weakly referenced. Garbage collection can delete keys and values if not used in the app hence giving you memory advantage.

#### Stacks

Stacks works on the principle of first in last out and last in first out(LIFO).


```javascript
//Create a class stack
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    //Adds element to the top of the stack
    push(item) {
        this.items[this.count] = item;
        console.log(`${item} added to ${this.count}`);
        this.count += 1;

        return this.count - 1;
    }

    //Remove and return the top item in the stack
    //if the stack is empty return undefined
    pop() {
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    //Check for the top most element in the stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    //check if the stack is empty
    isEmpty(){
        console.log(this.count == 0 ? "Stack is empty": "Stack is not empty");
        return this.count == 0;
    }

    //Check size of the stack
    size() {
        console.log(`${this.count} items in stack`);
        return this.count;
    }

    // print items
    print() {
        let str = '';
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

    //clear everything in the stack
    clear() {
        this.items = [];
        this.count = 0;
        console.log("stack cleared");
        return this.items
    }
}

const stack = new Stack();

stack.isEmpty()
stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.print())
stack.peek()
stack.size()

stack.pop();
stack.pop();
stack.clear()
```
Stack using arrays. Check if a word is a palindrome.

```javascript
//Functions: pop, push, peek, length

let letters = []; //our stack

let word = "racecar";

let reverseWord = "";

//put the letters into the stack
for(let i = 0; i< word.length; i++){
    letters.push(word[i]);
}

//Pop the stack in a reverse order
for(var i = 0; i < word.length; i++){
    reverseWord += letters.pop();
}

if(reverseWord === word) {
    console.log(word + " is a palindome");
}else {
    console.log(word + " is not a palindome")
}
```

### Linked Lists

A linked list is a list data structure.
It's a linear data structure.Ordered collection of data.
The nodes are not stored in the sequntial memory location
Elements are linked together using a pointer.
The first element is called the head.
Each node has data and a reference to the next element.
The last element is called the tail and has a reference to null.

```javascript
//Our nodde class with a constructor taking in data and refernce to the next node
class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//Our linked list class initially empty since head is null and it's size is 0
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first node
    insertFirstNode(data) {
        //pushes the element passed as data as the first node and pushes the current head to the next value.
        this.head = new Node(data, this.head);
        this.size++;
    }

    //Insert Last node
    insertLastNode(data) {

        let node = new Node(data);
        let current;

        //If empty make the node head or this.head == null 
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    //Insert at index
    insertNodeAt(data, index) {
        //if index is out of range
        if(index > 0 && index > this.size ) {
            return;
        }

        //if first index
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);

        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; //Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    //Get node at index
    getNodeAtIndex(index) {
        //represents current node starting from the head
        let current = this.head;
        let count = 0;

        while(current) {
            if(count = index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    //Remove node at index
    removeNodeAtIndex(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //Remove first
        if(index === 0){
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    //Clear the list
    clearList() {
        this.head = null;
        this.count = 0;
    }
    //Print the list data
    printData() {
        //represents current node starting from the head
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const  linkedlist = new LinkedList();

linkedlist.insertFirstNode(100);
linkedlist.insertFirstNode(200);
linkedlist.insertFirstNode(300);
linkedlist.insertLastNode(400);
linkedlist.insertFirstNode(500);
linkedlist.insertNodeAt(450, 2);
linkedlist.getNodeAtIndex(2);
linkedlist.removeNodeAtIndex(3)

linkedlist.clearList()
linkedlist.printData();
```

### Queue

Works in the Firt In Firt Out(FIFO) principle

## Non-Linear DataS tructures

### Graph DS

Each node is called vertex and each vertex is connected to other vertices through edges

| Linear Data Structure| Linear Data Structure 2|
| :------------- | :----------: |
|  Data items are arranged in a sequantial order, one after the other | Data items are arranged in a non-sequantial order   |
| You Can Also   | Put Pipes In | 

### Problem solving

+ Understand the problem.
+ Explore concrete example
+ Break it down.
+ Solve/ simplify.
+ Look back and refactor.

#### What is the order of the output.

```javascript
console.log('a');

let functionOne = setTimeout(function (){
    console.log("b");
}, 1);

let functionTwo = setTimeout(function (){
    console.log("c")
}, 10);

let functionThree = setTimeout(function(){
    console.log('d');
}, 0)
console.log('e')
```

output

```bash
a
e
b
d
c
```

```b``` runs before ```c``` because it's on top of the stack and the one second is used to run the first console logs.

##### using async/await and how it affects the order by which code runs

What is the resulting output.

```javascript
let num = 0;

async function increment() {
    num += await 2; //Promise.resolve(2)
    console.log(num);
}

increment();
num += 1;
console.log(num);
```

output

```bash
1
2
```

##### Revealing module pattern

Turn the object literal into a module that exposes only the ```render``` method.

```javascript
let myModule = {
    data: [],
    render: () => {

    },
    add: () => {

    },
    remove: () => {

    }
}

myModule.render();
```

~solution~

```javascript
let myModule = (function(){
    _data: [];

    _render = () => {

    }
    _add = () => {

    }
    _remove = () => {

    }

    return {
        render: _render
    }
})();

//only the render method is the only one accessible
myModule.render();
```

##### Determine if a function received the expected number of parameters

```javascript
let func = function (a,b) {

};

func(1);
func(1,2);
func(1,2,3);
```

~solution~

```javascript
let func = function (a,b) {
    if(arguments.length  === func.length){
        console.log("We have a match")
    }else{
        console.log("no match")
    }
};

func(1);
func(1,2);
func(1,2,3);
```

##### What happens hen you run the code

ASI, object literals,hoisting, square bracket syntax.
How do you fix the error

```javscript

let a = {
    a: 123
}
[a].forEach(function (x) {
    console.log(x)
})
```

~solution~

```javascript
let a = {
    a: 123
};
[a].forEach(function (x) {
    console.log(x)
})
```