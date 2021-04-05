---
title: Learn NodeJS
date: "2020-06-12T22:12:03.284Z"
description: "Nodejss"
---

# Create a basic server in node js

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
