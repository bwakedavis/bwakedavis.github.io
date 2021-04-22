---
title: Learn NodeJS
date: "2020-06-12T22:12:03.284Z"
description: "Nodejss"
---

## Create a basic server in node js

Make a web server that responds to a http request.

Create a .js file eg.```server.js```

```javascript
//A basic node server

const http = require('http');//brings the built in http module

//create a server with the http module
const server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'pplication/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);// status code

    let dataObject = {"id": 346, "name": "Davis", "email": "davis@email.com"};
    let data = JSON.stringify(dataObject);
    res.end(data)
});

//listen to request on port 5000
server.listen(5000, function(){
    console.log("listening on port 5000");
});
```

Run the server by running ```node server.js``` on the terminal

### Using pre and post sripts (NPM)

Here we create and append the content in the .gitignore file when we run the script.

```package.json```

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "npm scripts tips",
  "main": "app.js",
  "scripts": {
    "test": "test",
    "ignore": "echo \"\" > .gitignore",
    "preignore": "touch .gitignore",
    "postignore": "echo \".gitignore\n.vscode\nnode_modules/\" > .gitignore "
  },
  "author": "Davis",
  "license": "ISC"
}
```

### Using debug module

Install debug module.

```bash
npm i debug
```

Set the environment variable.

```bash
DEBUG=davis node app.js 
```

```javascript
const debug = require("debug")("davis");

debug("debuging with debug module")
console.log("hello world");

let array1 = [].fill(123, 0, 10000);

let array2 = array1.map(item => item * 10);

debug("debug after loop");
```

### NPM versioning

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "npm scripts tips",
  "main": "app.js",
  "scripts": {
    "test": "test",
    "build": "npm version patch",
    "ignore": "echo \"\" > .gitignore",
    "preignore": "touch .gitignore",
    "postignore": "echo \".gitignore\n.vscode\nnode_modules/\" > .gitignore "
  },
  "author": "Davis",
  "license": "ISC",
  "dependencies": {
    "debug": "^4.3.1"
  }
}
```

### Handling HTTP requsts

```javascript

const http = require('http');
const url = require('url');
const StringDecorder = require('string_decoder').StringDecoder;
const util = require('util');
const formidable = require('formidable');

//create a server with the http module
const server = http.createServer(function(req, res){
    //req.method eg. GET,POST, req.headers
    // console.log(http.METHODS, http.STATUS_CODES)
    let path = url.parse(req.url, true);
    //path.pathname, path.search, path.port, path.protocol, path.origin
   if(req.method.toLowerCase() == 'post') {
    let form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err){
            console.log(err)
            return;
        }
        res.writeHead(200, "OK", {"Content-Type": "text/plain"});
        res.write("The POST output response\n\n");
        res.end(util.inspect({fields: fields, files:files}));
    })
   }else if(req.method.toLowerCase() == 'get') {
    res.writeHead(200, "OK", {"Content-Type": "text/plain"});
    res.write("The Response");
    res.write(util.inspect(path.query) + "\n\n");
    res.end("End of Response");
   } else {

   }

  
});

//listen to request on port 5000
server.listen(5000, function(){
    console.log("listening on port 5000");
});
```