---
title: How to install Mariadb on linux debian
date: "2020-06-12T22:12:03.284Z"
description: "Mysql has given me a hard time setting it up evrything I have a fresh install on my machine.Lets take a look on how we can set it up and trouble shoot in case you run into errors"
---

Update your package index

```bash
sudo apt update
```

Install Mariadb Server

```bash
sudo apt install mariadb-server
```

Log in into the Mariadb shell

```bash
sudo mysql
```

Suppose you run into this error while running ``` mysql ```

```bash
ERROR 2002 (HY000): Cant connect to local MySQL server through socket /var/run/mysqld/mysqld.sock (2)
```

Run

```bash
sudo service mysqld start
```

## Mysql

### Comments

Single line comments are preceded with ```-```

```sql
-Update all:
SELECT * FROM Product;
```

Multi-line comments start with ```/*``` and end with ```*/```

```sql
/* Select all the columns
of all the records
in the Products table: */
SELECT * FROM Products;
```

#### Connect to MySQL as a root user

To start working wwith mysql you need to establish an active SSH session on your server

```bash
sudo mysql -u root -p
```

#### Create a new Mysql user

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

#### Delete a user

```sql
DROP USER 'username'@'localhost'
```
