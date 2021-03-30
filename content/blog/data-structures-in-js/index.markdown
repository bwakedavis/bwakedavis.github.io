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
