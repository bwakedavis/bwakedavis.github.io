---
title: how to install mariadb on linux debian
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


SELECT — choose specific data from your database
UPDATE — update data in your database
DELETE — deletes data from your database
INSERT INTO — inserts new data into a database
CREATE DATABASE — generate a new database
ALTER DATABASE — modify an existing database
CREATE TABLE — create a new table in a database
ALTER TABLE — change the selected table
DROP TABLE — delete a table
CREATE INDEX — create an index (search key for all the info stored)
DROP INDEX — delete an index

### Tables

#### Create a table

```sql
CREATE TABLE [IF NOT EXISTS] table_name(
column_list
);
```

```sql
CREATE TABLE user(
uname VARCHAR(100),
favcolor VARCHAR(100),
age VARCHAR(20)
);
```

show tables — call a list of all tables associated with a database.
DESCRIBE table_name; — see the columns of your table.
DESCRIBE table_name column_name; — review the information of the column in

#### Delete table

```sql
DROP TABLE tablename;
```

### Columns

Columns are defined by different storage types.
i.e ```CHAR```, ```VARCHAR```, ```TEXT```, ```BLOB```, ```EUT```.

Add a new column

```sql
ALTER TABLE table
ADD [COLUMN] column_name;
```

Deleting/ Drpoing a column

```sql
ALTER TABLE table_name
DROP [COLUMN] column_name;
```

Inserting a new row

```sql
INSERT INTO table_name (field1, field2, ...) VALUES (value1,
value2, ...)
```

Selecting specific data from a row

```sql
INSERT INTO table_name (field1, field2, ...) VALUES (value1,
value2, ...)
```
