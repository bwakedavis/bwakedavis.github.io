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

### Append to file

```bash

echo -e "Enter name of the file : \c"
read file_name

if [ -f $file_name ]
then
    if [ -w $file_name ]
    then
        echo "Type some text. To quit, press Ctrl+D."
        cat >> $file_name
    else
        echo "You do not have the right permissions"
    fi
else
    echo "$file_name does not exist"
fi
```

### Logical 'AND' Operator

```bash
#! /usr/bin/bash

age=20

if [ "$age" -gt 18 ] && [ "$age" -lt 30 ]
then
    echo "Valid candidate"
else
    echo "Candidate not valid"
fi

#OR
age=3

if [ "$age" -gt 18 -a "$age" -lt 30 ]
then
    echo "Valid candidate"
else
    echo "Candidate not valid"
fi

#OR
age=23

if [[ "$age" -gt 18 && "$age" -lt 30 ]]
then
    echo "Valid candidate"
else
    echo "Candidate not valid"
fi
```

### Logical 'OR' operator

```bash
#! /usr/bin/bash

age=40

if [ "$age" -lt 18 ] || [ "$age" -lt 30 ]
then
    echo "Valid candidate"
else
    echo "Candidate not valid"
fi

#OR
age=3

if [ "$age" -gt 18 -o "$age" -lt 30 ]
then
    echo "Valid candidate"
else
    echo "Candidate not valid"
fi

#OR
age=230

if [[ "$age" -lt 18 || "$age" -lt 30 ]]
then
    echo "Valid candidate"
else
    echo "Candidate not valid"
fi
```

### Arithmetic  operations

Whole numbers
```bash
num1=20
num2=5

echo $(( num1 + num2 ))
echo $(( num1 - num2 ))
echo $(( num1 * num2 ))
echo $(( num1 / num2 ))
echo $(( num1 % num2 ))

#OR
echo $(expr $num1 + $num2 )
echo $(expr $num1 - $num2 )
echo $(expr $num1 \* $num2 )
echo $(expr $num1 / $num2 )
echo $(expr $num1 % $num2 )
```

Floating point numbers math operations
Get around using ``bc`` tool
```bash
echo "20.5+5" | bc
echo "20.5-5" | bc
echo "20.5*5" | bc
echo "scale2;20.5/5" | bc
echo "20.5%5" | bc

num=27
echo "scale=2;sqrt($num)" | bc -l
echo "scale=2;3^3" | bc -l
```

### Case Statement

```bash
vehicle=$1

case "$vehicle" in
    "car" )
        echo "Rent of $vehicle is 100 dollars" ;;
    "van" )
        echo "Rent of $vehicle is 120 dollars" ;;
    "truck" )
        echo "Rent of $vehicle is 150 dollars" ;;
    "bicycle" )
        echo "Rent of $vehicle is 10 dollars" ;;
    * )
        echo "$vehicle is an unknown vehicle, try car, van, truck or bicycle" ;;
esac   
```

run
```bash
./hello.sh tuktuk
```

Regular Expression
```bash

echo -e "Enter some character: \c"
read value


case "$value" in
    [a-z] )
        echo "You entered $value which is between a-z" ;;
    [A-Z] )
        echo "You entered $value which is between A-Z" ;;
    [0-9] )
        echo "You entered $value which is between 0-9" ;;
    ? )
        echo "You entered $value which is a special character" ;;
    * )
        echo "$value is an unknown value, possibly more than one character" ;;
esac   
```

### Arrays Variables

```bash
os=("Parrot Os" "Kali Linux" "Windows" "Mac OS X" "Ubuntu")

echo "${os[@]}" # prints items in yhe array
echo "${!os[@]}" # prints index
echo "${#os[@]}" # prints length
echo "${os[3]}" # prints 4th element
echo "${os[0]}"
os[2]="Xubuntu"
echo "${os[@]}"
unset os[4]
echo "${os[@]}"

strings="An array of string"
echo "${strings[@]}"
echo "${strings[0]}" # the whole string is assigned to the index 0
echo "${#strings[1]}" #0
```

### While loops

```bash

n=1
while [ $n -le 10 ]
do
    echo "$n"
    n=$(( n+1 ))
done


#OR
n=1
while [ $n -le 10 ]
do
    echo "$n"
   (( n++ ))
done

#OR
n=1
while (( $n <= 10 ))
do
    echo "$n"
   (( ++n ))
done

n=1
while [ $n -le 10 ]
do
    echo "$n"
   (( n++ ))
   sleep 1 # delays each iteration by 1 second
done


n=1
while [ $n -le 3 ]
do
    echo "$n"
   (( n++ ))
   mate-terminal & # opens 3 terminal windows
done

# Read file content
while read p
do
    echo $p
done < file.txt

#OR
# Read file content
cat file.txt | while read p
do
    echo $p
done

#OR
# Read file content
while IFS=' ' read -r line
do
    echo $line
done < file.txt
```

### Until loop
Execute if condition is false

```bash
n=1
until [ $n -ge 10 ]
do
    echo $n
    n=$(( n+1 ))
done
```

### For loop

```bash
for i in 1 2 3 4 5
do
    echo "$i"
done

#OR
for i in {1..10}
do
    echo "$i"
done

# specify loop range
for i in {1..10..2}
do
    echo "$i"
done

#OR
for (( i=0; i<5; i++ ))
do
    echo "$i"
done

# execute commands
for command in ls pwd date
do
    echo "$command"
    $command
done
```

### Select loop

```bash
select name in mark jane isaac tom
do
    echo "$name selected"
done

select name in mark jane isaac tom
do
    case $name in
    mark )
    echo "mark selected" ;;
    jane )
    echo "jane selected" ;;
    isaac )
    echo "isaac selected" ;;
    tom )
    echo "tom selected" ;;
    * )
    echo "please select number between 1 and 4" ;;
    esac
done
```

### Break and Continue

```bash
for (( i = 0; i <10; i++ ))
do
    if [ $i -eq 2 -o $i -eq 5 ]
    then
        continue
    fi
    if [ $i -gt 7 ]
    then
        break
    fi
    echo "$i"
done
```

### Functions

Sequence matters in execution but not in declaration
```bash

function Hello() {
    echo "Hello"
}

function print() {
    echo "$1"
}

quit() {
    exit
}

print "Hi there!"
Hello
echo "foo"
quit

```

### Local variables

```bash
function print() {
    local name=$1
    echo "the name is $name"
}

name="Jane"

echo "name is $name"
print John
echo "name is $name"

# function example
usage() {
    echo "You need to provide an argument : "
    echo "usage : $0 file_name"
}

is_file_exist() {
    local filename="$1"
    [[ -f "${filename}" ]] && return 0 || return 1

}

if ( is_file_exist "$1")
then
    echo "File exists"
else
    echo "File does not exist"
fi
```

## readonly variables

```bash
var=31 #cannot be changed

readonly var
```

### Signals and traps

```bash
echo "pid is $$"
while (( COUNT < 10 ))
do
    sleep 1
    (( COUNT++ ))
    echo "${COUNT}"
done
exit 0
```
