---
title: How to update nodejs linux debian
date: "2019-03-16T22:12:03.284Z"
description: "Here is a way to update your node js version to the current stable version or current latest version."
---

Get the latest stable version

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```
Or you can get the latest and not stable version using

```bash
sudo n latest
```

This changes your current the path of your nodejs and if you're using the same shell run update the path with

```bash
PATH="$PATH"
```

Or Fix path ny running

```bash
sudo apt-get install --reinstall nodejs-legacy     # fix /usr/bin/node
```
