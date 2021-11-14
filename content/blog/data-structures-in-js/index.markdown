---
title: data structures and algorithms in JavaScript
date: "2020-12-10T22:12:03.284Z"
description: "Data Structures and Algorithms are important concepts in Computer Science and oftenly come up in software development and related roles interview questions.Let's dive and start learning using javaScript"
---


**Data Structure** is a way of organizing data so that it can be used effectively.

It's a named collection that can be used to store and organize data so that it can be accessed efficiently

### Classification of Data Structures

+ Linear vs non-linear
    + Linear data structure items are arranged in a linear sequence. eg. stacks, queues, arrays
    + Non-linear data structures, the items are not in sequence. eg. tree, graph
+ Homogenous vs non-homogenous
    + In homegenous all elements are of the same type
    + In non-homogenous the elements are not of the same type
+ Primitive vs Abstract
    + Primitive data structures are basic data structures. 
    i.e. Integers(fractional numbers), character(alphabet and special characters), string(sequence of alphabet, alphanumeric, special symbols), pointer(address variable)
    + Abstract data structures are derived from primitive data structures. eg. arrays, lists and files. **Abstract data types** are abstraction of data which provides only the interface to which a data structure must adhere to.
The interface does not give any specific details about how something should be done.

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

### Arrays

Ordered lists.
Used when you need order.
fast access,insertion and removal of elements
Insertion order is kept.
Element accessed via indexes.
Iterable using loops.
Size/length adjus dynamically.
Duplicate value are allowed.

A **static array** is a fixed length container containing *n* elements *indexable*(each slot can be refernced with a number) from the range of [0, n-1]

**Dynamic arrays** can grow and shrink in size
**Linear Array** is a list of finite elements with the same data types
**Multidimensional array** is an array where an element is reffered by more than one subscript
**Column major order** is an element that is stored in the memory column
**Row major order** is an element that is stored in the memory row

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

### Stacks

Is an ordered list which all insertion are made at one end called the TOP.
Stacks works on the principle of first in last out and last in first out(LIFO).

*Stack* is a one ended liner data structure models a real world stack by having two primary operations ie. push, pop.

There're 2 operations push and pop

##### push operation

The process of adding new element to the top of a stack.
Each time an element is inserted into a stack, top pointer will be impelented by one position and new value will be stored in the top location.

```pseudo
Algorith Add(item) {
// pust an element into a stack, returns true if succesfull
//else return item is used as input
{
    if (top >= n-1) then {
        write("Stack is full)
    } esle {
        Top = top + 1
        Stack(top) = item
    }
}
```

##### Pop Operation

Deleting an existing element from the top of the stack
On each delete attempt, the data element at the top of the stack is retrieved and the top pointer decremented by one position down.

```pseudo
Algorithm Delete(item){
    //pop the top element from the stack returns true if successful
    //else return false "item
 is used as an output
 if(top < 0) then
 {
     Write("Stack is empty")
 } else{
     item = stack(top)
     Top = top - 1
 }
 }
```

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

##### Linked Stack

Another way to represent a stack is by using links or pointers.
NODE is a collection of data and information.
A stack can be represented using nodes with 2 fields called data and links.

Stack polish notation implementation:
+ Normaly in arithmetic expressions, when the operators symbol is placed between 2 operand it's called **infix notation**
+ **Prefix notation** the operator symboll is placed before the operand
+ **Post fix/reverse polish notation** operator symbol is placed after the operator.

The computer evalutes the arithmetic expressions written in infix notation in 2 steps:
1. It converts the arithmetic expressions to postfix notation and then evalutes the postfix expression

###### Converion of infix to postfix expression
Let E be an arithmetic expression written in infix notation P is postfix expression

1. Algorith Polish (E,P)
2. Add to the end E
3. Scan E from left to right and repeat 4-7 for each element of E until the stack is empty
4. If an operand is encounterd add it to P
5. If a left parenthesis is encountered , add onto the satck
6. If an operator is encountered;
    + Pop from the stack  continously and add it to P. Each operator which has the same amount or higher precedence than the scanned operator
    + Add the scanned operator to the stack
7. If a right paranthesis is encountered then:
    + Pop from stack continusly and add it to P. Each operator until a left parenthesis is encountered
    + Remove the left parenthesis
8. END


### Queue

*Queue* is a linear data structure which models real world queues by having two primary operations namely enqueue and dequeue,

Works in the First In First Out(FIFO) principle.
Inserting element at the end of the queue involves:
+ Updating the rear maker
+ Placing the new element in the location pointed by the rear maker

Adding element to a queue

```pseudo
Algorithm addQ(item Q, n, rear )
//insert item into the queue represented in Q ( 1:n)
{
    if(rear = n) then
    {
        Write("Queue is full")
    }
    else
    {
        rear = rear + 1;
        Q(rear) = item
    }
}
```

Deleting an element from a queue.
It's carried out at the front. Elements inserted first are deleted first

```pseudo
Algorthm Delete Q(item Q, front, rear)
//Delete "item" from the Queue
{
if(front > rear) then
{
    Write("Queue is empty)
}
front = front + 1
item = Q(front)
}
```

##### Types of Queue

Linear, Circular, Dequeue

###### a. Linear Queue
Has front and rear end
Insertion takes place at the rear end and deletion at the front end.
Can be traversed only in one direction(front to rear)
If the front pointer is int the front position and the rear in the rear position then the queue is said to be fully occupied
If the front override the rear the queue is said to be empty.

###### b. Circular queue

An advanced linear queue where the last position is connected to the first position
It has 2 ends:
+ Front end where the deletion takes place
+ Rear end where the insertion takes place
Traversal can be in one direction from front to rear

Initially when such a queue is empty the front and rear values are -1 and -1 respectively and the queue has a null value for all its elements.

Everytime we add an element to the queue the rear value increments by one till the time it reaches the upper limit of the queue after which it starts all over again from zero

Everytime we delete an element from the queue the front value increments by one till the time it reaches the upper limit of the queue after which it starts all over again from zero(0)

Algorithm to add an item into a circular queue:

```pseudo
Algorithm Add Q( Item Q, n, front, rear)
{
    //Insert "item" in circular queue stated in Q(0:n)
    //rear points to the last item
    //counter clockwise from first item in Q
    Rear = rear + 1
    if(front = rear) then
    {
        Write("Queue is full")
    }
    Q(raer) = item // insert new item
}
```

Algorithm to delete an item from circular queue

```pseudo
Algorithm Delete Q(item Q, n, front, rear)
{
    //removes "item" in circular queue started in Q(0:n)
    //counter clockwise from first item in Q
    rear = rear + 1
    if(front = rear) then 
    {
        Write("Queue is full")
    }
    Q(rear) = item //insert new item
}
```

```pseudo
Algorithm Delete Q (item Q, n, front, rear)
{
    //removes "item" in circular queue started in Q(0:n - 1)
    if(front = rear) then
    {
        Write("Queue is empty")
    }
    Front = (front ++1)
    item = Q(front) // removes item from the queue
}
```

###### c. Double ended queue(Deque)

Also called homogenous list of elements in which insertion and deletion operation ae performed in both ends called double ended queue

##### Priority queue

It's a data structure for maintaining a set of elements such that each element has been assigned priority such that the order in which elements are deleted and processed come from the following rules:
1. An element for higher priority is processed before any element of low priority
2. Two element with the same priority are processed according to the order in which they were added to the queue.

### Sets

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

### Objects

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

### Maps

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

### Lists

A list is an organised collection of items or elements of size n
The general form of a list:
List L { A1, A2, ..., An} where A is the list of element and n is the list size

###### List of operations

1. PrintList(L) - displays all the elements of the list
2. MakeEmpty - deletes all the elements of the list
3. Find - it returns the position of the first occurence of the element
4. Insert - it inserts some key in the same position
5. Delete - deletes some key in the same position
6. Find Kth - returns some element in the same position
7. Next - takes a position as an argument and returns the position of the successor
8. Previous - returns the position of the predecessor

### Linked Lists

The address that is stored in a linked list are of 3 types:
1. **External address** - the address of the first node which is stored in the head pointer
2. **Internal address** - the address stored in the inner nodes
3. **Null address** - the address stored by the null pointer of the last node.

*Head* refers to the first node in a linked list.
*Tail* refers to the last item in the node.
*Pointer* reference another node.
*Node* is an object containing data.

A linked list is a list data structure.
It's a linear data structure.Ordered collection of data.
The nodes are not stored in the sequntial memory location
Elements are linked together using a pointer.
The first element is called the head.
Each node has data and a reference to the next element.
The last element is called the tail and has a reference to null.

Types of linked list - Singly, Double and circular linked lists

###### Singly LinkedList

It's a linked list in which each node contains only one linked list poinitng to the next node in the list.

*Singly linked list* uses less memory, has a simpler implementaion and it's not easy to access the previous element.

It's traversed only in one direction that is from head to null.

Algorithm to create a linked list
```pseudocode
Algorithm CreatKist(T) 
{
    //T is a pointer to the first node in the list
    Get new node I //get new node
    T = I
    Data(I) = "A" //store information into a node
    Get a new node I
    Link(T) = I //atach first node to second node
    Link(I) = 0
    Data(I) = "B"
}
```
Algorithm to insert a node in a list

```pseudo
Algorithm insertNode(T, X)
{
    //T is alist T=0 if T has no nodes
    //Insert an item "c" after node x
    Get new node F
    Data (I) = "C"
    if(T = 0) then
    {
        T = I
        Link(I) = 0
    } else {
        Link(I) = Link(x)
        Link(x) = I
    }
}
```
Algorithm to delete a node in a list
```pseudo
Algorithm DeleteNode(x, y, T)
{
    //Prcedure to delete node "x" from "T" "y" be the node preceding "x", "y" = 0 if "x" is first node of "T"
    if(y=0) then T = Link(x)
    else Link(y) = Link(x)
    Remove "x" from storage
}
```


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

###### Doubly Linked List

Has 2 pointer a forward link and a backward link.
The forward link points to the next node in the list wheras the backward link points to the preceeding node
*Doubly linked list* can be traversed backwards and it takes 2 times the memory.

L LINK - previous node address
R LINK - Next node address
DATA - oiginal data value

Algorithm to delete a node from a list

```pseudo
Algorithm D Delete(X,T)
{
    //delete node x from list T
    if(X = T) the pint "No more node return
    RLINK(LLINK(X)) = RLINK(X)
    LLINK(RLINK(X)) = LLINK(X)
    Removes X from storage
}
```

Algorithm to insert a node into the list

```pseudo
Algorithm  D Isert(P,X)
{
    //Insert node P into the right of node X
    LLINK(P) = X
    RLINK(P) = RLINK(X)
    LLINK(RLINK(X)) = P
    RLINK(X) = P
}
```

###### d. Circular linkedlist

A linked list in which the node at the tail of the list instead of having a null pointer points back to the start of the list thus both ends of the list can be accessed using a single pointer

It can be a :
+ Circular singly list - the last node is conected to the first
 or a 
+ Circular doubly linked list - the last node is connected to the first node as well as  the first node is connected to the last node(double way)

## Non-Linear Data tructures

### Graph DS

Each node is called vertex(point) and each vertex is connected to other vertices through edges

| Linear Data Structure| Linear Data Structure 2|
| :------------- | :----------: |
|  Data items are arranged in a sequantial order, one after the other | Data items are arranged in a non-sequantial order   |
| You Can Also   | Put Pipes In | 

### Trees

Is a non empty collection of nodes and edges that satisfies the following requirements

#### Binary trees

#### Binary Search trees

# Algorithms

An **algorithm** is a sequence of instructions to solve a clearly defined problem.
or
Is a set of steps to accomplish a certain task.
A finite set of instructions to solve a particular task

The best algorithm is the one which has the best performance.

#### Fatctors of a good algorithm

+ Input and output should be defined precisely. Zero or more should be supplied and atleast one produced
+ Definiteness - Clear steps and unambigous instructions
+ Effectiveness - basic instructions and carried in priciple
+ Finiteness - should terminate after a number of steps

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

#### Importance of Algorithms

+ Code performance
+ Trade offs among different approaches
+ Identifying inefficiencies
+ Interviews

#### Computing time of an algorithm depends on

1. The input to the program
2. The code generated by the program which is used to create an object program
3. The nature and speed of instructio on the machine used to execute the program
4. The time taken by the program(TCP) is the sum the compiled time and the run time within the bracket execution time

#### How to determine complexities

1. Sequence of statements
    + Statement 1 ... Statement n. Total time is found by adding the time for all statements
2. If then else statements
    ```
    if(condition) {
        sequence of statement 1;
    } else {
        sequence of statement 2
    }
     ```
    + Either statement 1 or 2 will be executed. Worst case is O(n)
3. For loops
    ```
    for( i = 0; i < N; i++)
    {
        Sequence
    }
    ```
    + O(n)
4. Nested Loops
    ```
    for( i = 0; i < N; i++)
    {
        for( j = 0; j < m; j++)
        {
            Sequence of statement
        }
    }
    ```
    + O(n*m)

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