---
title: Learn Deveops
date: "2020-05-12T22:12:03.284Z"
description: "JavaScript is a scripting language developed to add functionality in the browser. It's use nowdays extends building mobile apps, creating servers, building desktop apps etc"
---

Docker is replacing virtual machines
Docker can be used with VM's on large projects

Hypervisores eg. vmware ESX1

How docker works
Hardware - One Os(eg Ubuntu) - Docker - Other Os to create containers

*Containers* - are fast virtual lightweight isolated micro-computers environments. They run instances of images.
*Docker image* is a package or a template.

How to use:

+ Install docker
  
+ Pull an image
  
```bash
    $ docker pull centos
    $ docker pull centos/version:number //get specific version of an image
```

+ Run a Container
  
```bash
    $ docker run -d -t --name containername centos
    $ docker run -d -t -p 80:80 -name containername centos/version:number //run docker image on your website
```

+ Check your your running containers

```bash
    $ docker ps
```

+ Connect to your docker container

```bash
    $ docker exec -it containername bash
```

+ Stop reunning docker container

```bash
    $ docker stop containername
```

+ Start reunning docker container

```bash
    $ docker start containername
```

+ Check resources being used

```bash
    $ docker stats
```

Why docker is cool:

+ You only need one kernel
+ They are lightweight