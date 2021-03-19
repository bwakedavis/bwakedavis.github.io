---
title: Learn JavaScript
date: "2018-12-27T22:12:03.284Z"
description: "JavaScript is a scripting language developed to add functionality in the browser. It's use nowdays extends building mobile apps, creating servers, building desktop apps etc"
---

## Linking JavaScript to your HTML

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

## JavaScript Datatypes

### Primitive Datatypes

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
        console.log('youre 19 years old or younger')
    }else{
        console.log('youre above 20 years old')
    }

    if(age<30 && age>10){
        console.log('youre between 11 and 30 age bracket')
    }
    if(age==20 || name=='bwake'){
        console.log(name + ' youre ' + age +' years old')
    }
    //Ternary operator
    name =='bwake'? console.log(name): console.log('I dont know you ')
    //Falsey(values that evaluate to false) => false, null,undefined, 0, "",'', NaN

    //Comparison operators => <, <=, >, >=, ==, !=, !==

    //Binary logical operators => &&, ||
```