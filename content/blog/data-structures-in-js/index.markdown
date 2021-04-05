---
title: Data Structures and Algorithms in JavaScript
date: "2020-12-10T22:12:03.284Z"
description: "Data Structures and Algorithms are important concepts in Computer Science and oftenly come up in software development and related roles interview questions.Let's dive and start learning using javaScript"
---


**Data Structure** is a way of organizing data so that it can be used effectively.

An **algorithm** is a sequence of instructions to solve a clearly defined problem.
The best algorithm is the one which has the best performance.

**Abstract data types** are abstraction of data which provides only the interface to which a data structure must adhere to.
The interface does not give any specific details about how something should be done.

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
It gives you an upper bound on the complexity in the worst case, helping to quantify performance as input size becomes arbitrary large

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

#### Stacks

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

#### Maps

Are ordered key value pairs.
Element accessed by the keys.
Iterable
Keys are unique, values aren't.
Keys can be anything including referencing values like arrays.
They're pure data storage optimized for data access.

#### Weakset and Weakmaps

Variations of sets and maps.
Values and keys are only weakly referenced. Garbage collection can delete keys and values if not used in the app.

