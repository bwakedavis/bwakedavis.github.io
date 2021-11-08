---
title: learn asynchronous JavaScript and XML(AJAX)
date: "2019-11-17T22:40:32.169Z"
description : "Asynchronous JavaScript and XMLAJAX enables you to:

Read data from a web server  after the page has loaded,
Update a web page without reloading the page,
Send data to a web server - in the background.You gonna like it.Lets look how you can update data asynchonously with Ajax"
---


Asynchronous JavaScript and XML enables you to:

* Read data from a web server  after the page has loaded
  
* Update a web page without reloading the page
  
* Send data to a web server - in the background

You gonna like it.Lets look how you can update data asynchonously with Ajax

Create a html file where we will display the data we fetch with AJAX on the browser.

Create a JavaScript file to put you JS code and link it or you can use script tag on you html
**index.html**

```HTML

    <body>

        <!-- display data from a local text file -->

        <button id="button">Get Text File</button>
        <div id="text-file"></div>

        <!-- display data from a local json file -->

        <button id="fetch-user">Get User</button>
        <h1>User</h1>
        <div id="user"></div>

        <!-- display an array of data from a local json file -->

        <button id="fetch-users">Get Users</button>
        <h1>Users</h1>
        <div id="users"></div>

        <!-- display data from an online api(Github Api) -->

        <button id="fetch-github-users">Get Github Users</button>
        <h1>Github Users</h1>
        <div id="display-github-user"></div>

        <script src="./ajax.js"></script>
   </body>
```

First we want to fetch data in a local text file and display it on the browser.
Create a text file in your current directory called it 'file.txt'

The data is displayed asynchronously without reloading the browser. Isn't that cool 😊

**index.js**

```javascript
    //Fetch a local text file on click
document.getElementById('button').addEventListener('click', loadFile);

function loadFile(){
    //Create the XHR Object
    let xhr = new XMLHttpRequest();
    // Open the file,
    xhr.open('GET', './file.txt', true);
    // console.log(xhr.readyState)

    // loaders (optional)
    xhr.onprogress=function(){
        console.log(this.readyState)
    }

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            document.getElementById('text-file').innerHTML = this.responseText
        }else{
            document.getElementById('text-file').innerHTML = "Not Found"
        }
    }

    xhr.onerror = function(){
        console.log("an error occured")
    }

    //Using onreadystatechange(You can use this method instead of onload)

        // HTTP STATUSES
        //200: "OK"
        //403: "Fobiden"
        //404: "Not Found"
        //READY STATE VALUES
        //0:"Request not initialized"
        //1: "server connection established"
        //2: "request received"
        //3: "processing request"
        //4: "Request finished and response is ready"

    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState)
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText)
    //     }
    // }

    //sends request
    xhr.send()
}

```

Next we're going to fetch a local json file with a single object
Create a file in your directory called "user.json"
and paste this

**user.json**

```json
    {
    "age":20,
    "name": "Davis",
    "email":"davis@gmail.com"
    }
```

Lets display the object with ajax

**index.js**

```javascript
  
document.getElementById('fetch-user').addEventListener('click',fetchUser)

function fetchUser(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET','user.json', true)

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            let user = JSON.parse(this.responseText)

            let output = ''
            output += `
            <ul>
            <li>${user.age}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
            </ul>
            `
            document.getElementById('user').innerHTML = output
        }
    }

    xhr.onerror = function(){
        console.log("An error occurred")
    }

    xhr.send()
}

```

We have fetched a single json object successfully,cheers 🥂😇

Let us now fetch an array of json objects.Create a file called 'users.json"

**users.json**

```json
    [
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
        }
    ]

```

Lets output it in the browser

**index.js**

```javascript

document.getElementById('fetch-users').addEventListener('click',fetchUsers)

function fetchUsers(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET','users.json', true)

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            let users = JSON.parse(this.responseText)

            let output = ''
            for(let user in users){
                output += `<ul>
                <li>${users[user].age}</li>
                <li>${users[user].name}</li>
                <li>${users[user].email}</li>
                </ul>`
            
            }

            document.getElementById('users').innerHTML = output
        }
    }

    xhr.onerror = function(){
        console.log("An error occurred")
    }

    xhr.send()

    }

```

We did it,One more thing we want to work with a remote API we will be working with the github API and fetch users

This is the url <https://api.github.com/users>

**index.js**

```javascript
    document.getElementById('fetch-github-users').addEventListener('click', fetchGithubUsers)

    function fetchGithubUsers(){
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users', true)

        xhr.onload = function(){
            if(this.status == 200){
                let users = JSON.parse(this.responseText)
                let output = ""
                for(let user in users){
                    output += `
                    <div class="user">
                    <img src= ${users[user].avatar_url} width="100" height="100"/>
                    <ul>
                        <li>ID: ${users[user].id} </li>
                        <li>User Name: ${users[user].login} </li>
                        <li>Url: ${users[user].url} </li>
                        <li>Followers Url: ${users[user].followers_url} </li>
                    </ul>
                    </div>
                    `
                }
                document.getElementById('display-github-user').innerHTML = output;
            }
        }
        xhr.send()
    }
```

Cheers go enjoy AJAX 🥳 🥳