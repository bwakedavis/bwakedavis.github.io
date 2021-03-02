---
title: JavaScript High Order Array Methods
date: "2015-05-06T23:46:37.121Z"
description: "The es6+ array methods are now a way to go when working with arrays and objects in an array.They can save you a lot of pain and even make you say bye to loops 😁😁😁 .
Lets have a look at the most used ones:"
---


# Understanding JavaScript High Order Array Methods

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
        "name": "Charlote",
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

## .forEach()

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

## .filter()

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

## .map()

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

## .sort()

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

## .reduce()

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

## .some()

Dertemines whether one or more an array value corresponds with what you are looking for and returns true or false

```javascript

    let hasId = users.some((user)=>{
        return user.id
    })

    console.log(hasId)

    //Returns false
```

## .every()

Checks if every item in an array meets a condition specified and returns a Boolean

```javascript
    let hasEmail = users.every((user)=>{
    return user.email
    })

    console.log(hasEmail)

    //Returns true
```

Cheers if you reached here.I bet you enjoyed and you're considering using loops ever again 😂😂

