---
title: asynchronous JavaScript
date: "2020-12-10T22:12:03.284Z"
description: "Asychronousity in JavaScript"
---

## Callbacks

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

## Async/ Await

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
