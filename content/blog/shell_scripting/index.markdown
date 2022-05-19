---
title: shell scripting
date: "2022-05-12T12:07:03.284Z"
description: "scripting"
---


See shells available.

```bash
cat /etc/shells
```

check where bash is installed.

```bash
which bash
```

create a shell script.

```bash
touch hello.sh
```

change permissions

```bash
chmod +x hello.sh
```

### Comments

Are not executed.
Explains code.

```bash
# This is a comment
echo "Hello, world!" # This prints hello world
```

### Variables

Variable store data

##### Types of variables
+ System variables

```bash
echo $BASH
echo $BASH_VERSION
echo My home dir is $HOME
echo $PWD
```

+ User defined variables

```bash
name=Davis
value=10
greetings="Good morning"
echo My name is $name
echo $value
echo $greetings
```

### Read user input

```bash
#! /usr/bin/bash


echo "Enter your name: "
read name
echo "Your name is: $name"

echo "Please enter your first and last name: "
read f_name l_name
echo "Your first and last name is: $f_name $l_name" 

# Enter input on the same line as prompt
read -p "Enter your Country: " country
echo "Your country is: $country"

# Silent input eg. for password
read -sp 'Enter your password: ' user_password
echo "Confirm your password: $user_password" # not recommended to  show password

# Store input in an array
echo "Enter names: "
read -a names
echo "Names ${names[0]} ${names[1]} ${names[2]} ${names[3]}"

# If you don't store the input it is stored by default in an variable called $REPLY
echo "Enter name: "
read
echo ""
```

### Passing arguments

```bash
echo $1 $2 $3 '> echo $1 $2 $3'
echo $0 $1 $2 $3 '> echo $1 $2 $3' # appends the script  name on the output
```

run 

```bash
./hello.sh John Jane James

# output
#John Jane James > echo $1 $2 $3
#./hello.sh John Jane James > echo $1 $2 $3
```

```bash
# pass arguments as an array
args=("$@") # store arguments as array

echo ${args[0]} ${args[1]} ${args[2]} ${args[3]}

echo $@ # print the whole array

echo $# # print number of arguments
```

### If statements

If then else

##### Integer comparison
+ -eq (is equal to) - if ["$a" -eq "$b"]
+ -ne (is not equal to) - if ["$a" -ne "$b"]
+ -gt (is greater than) - if ["$a" -gt "$b"]
+ -ge (is greater than or equal to) - if ["$a" -ge "$b"]
+ lt (is less than) - if ["$a" -lt "$b"]
+ -le (is less than or equal to) - if ["$a" -le "$b"]
+ < (is less than) - if ["$a" < "$b"]
+ <= (is less than or equal to) - if ["$a" <= "$b"]
+ > (is greater than) - if ["$a" > "$b"]
+ >= (is greater than or equal to) - if ["$a" >= "$b"]

```bash
count=10

if [ $count -eq 10 ]
then
    echo "condition is true"
fi
```

##### String comparison

+ = (is equal to) - if ["$a" = "$b"]
+ == (is equal to) - if ["$a" == "$b"]
+ != (is not equal to) - if ["$a" != "$b"]
+ < (is less than, in ASCII alphabetic order) - if ["$a" < "$b"]
+ >(is greater than, in ASCII alphabetic order) - if ["$a" > "$b"]
+ -z (string is null, that is, has zero length)

```bash
#! /usr/bin/bash

count=10

if [ $count -eq 11 ]
then
    echo "condition is true"
else
    echo "condition is false"
fi

if (($count >= 8))
then
    echo "condition is true"
fi

if (("zion" < "abc"))
then
    echo "yes"
else
    echo "no"
fi
```

### File test operators

```bash
echo -e "Enter name of the file : \c"
read file_name

if [ -e $file_name ]
then
    echo "$file_name found"
else
    echo "$file_name not found"
fi

echo -e "Enter name of the file : \c"
read file_name

if [ -s $file_name ]
then
    echo "$file_name not empty"
else
    echo "$file_name empty"
fi
```
