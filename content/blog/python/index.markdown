---
title: python
date: "2022-05-27T22:25:03.284Z"
description: "python programming and scripting"
---


```python
print("hello world")
```

Integers

Floats

Strings

Data structures are containers or collections of data that organize and group data types together in different ways.

Lists
- ordered
- mutable

- slice - lower bound is inclusive, upper bound is exclusive.

Tuples
- ordered
- immutable
- indexable and sliceable

Sets
- unordered
- mutable
- used to identify unique elements

Dictionaries
- Store key: value pairs

Compound Data Structures

Membership

- *in* - Evaluates if object on the left side is included in object on the right side
- *not in* Evaluates if object on the left side is not included in object on the right side

Identity
- *is* - evaluates if both sides have the same identity
- *is not* - evaluates if both sides have different identities

Loops
1. for loop
```python

cities = ['new york city', 'mountain view', 'chicago', 'los angeles']

for index in range(len(cities)):
    cities[index] = cities[index].title()
print(cities)

capitalized_cities = []

for city in cities:
    capitalized_cities.append(city.title())

print(capitalized_cities)

```

## Advanced Python

### Lists

```python
# Lists: ordered, mutable, allows duplicate elements
mylist = ['banana', 'apple', 'orange', "cherry"]
mylist2 = list()
mylist2 = [5, False, "Ben", "Andrew"]

#accessible by index
print(mylist[0], mylist[-1],mylist2[-2])

#loop
for i in mylist:
    print(i)

#check
if "Cherry" in mylist:
    print("yes")
else:
    print("no")

#length
print(len(mylist))

#append to the end
mylist.append("avocado")
print(mylist)

#insert at the certain position
mylist.insert(1, "mango")
print(mylist)

#remove at the end
item = mylist.pop()
print(mylist)

#remove specific
item = mylist.remove('orange')
print(mylist)

#sort
#mylist.sort() #changes original list order
newlist = sorted(mylist)
print(newlist)

nums = [0] * 5
print(nums)

nums2 = [2,3,5,6,6]

joinedlist = nums + nums2
print(joinedlist)

# slice some part
a = joinedlist[3:8] # the start index is inclusive, stop index is excluded
print(a)

b = joinedlist[:7]
print(b)

# step
c = joinedlist[::2]
print(c)

# reverse
d = joinedlist[::-1]
print(d)

#copy
## when copy is modified doesn't modify the original copy
list_copy = mylist.copy()
list_copy.append("grapes")
print(list_copy)
print(mylist)

list_copy2 = mylist.copy()
list_copy2.append("guavas")
print(list_copy2)
print(mylist)

## when modified modify also the original list
list_copy3 = mylist 
list_copy3.append("lemon")
print(list_copy3)
print(mylist)

# list comprehension
list_a = [1,2,3,4,5,6]
list_b = [n*n for n in list_a]
print(list_a)
print(list_b)
```

### Tuples

```python
# Tuples: ordered, immutable, allows duplicate elements

mytuple = ("Davis", 30, "Nairobi")
mytuple2 = ("Mt. Kenya", 5199, "Kirinyaga")
single_element_tuple = ("Kenya",)
print(mytuple, type(single_element_tuple), mytuple2)

item = mytuple[0]
print(item)

# Loop
for i in mytuple2:
    print(i)

#check
if "Mombasa" in mytuple2:
    print("yes")
else:
    print("no")

#length
print(len(mytuple))
#count
print(mytuple.count("Nairobi"))
#index
print(mytuple2.index("Kirinyaga"))

# tuple from list
a = [5]*5
a = tuple(a)
print(a)
# list from tuple
a = list(a)
print(a)

# slice
c = (1,2,3,4,5,6,7,8,9,10)
## upper bound exclusive, lower bound inclusive
print(c[:3])
print(c[1:4])

## step
print(c[::2])

#reverse
print(c[::-1])

#unpacking
mytuple3 = "Fort Jesus", 1500, "Mombasa"
name, year, city = mytuple3
print(name, year, city)

# comparison with lists
import sys
list_a = [1,2,3, "good morning", True]
tuple_a = (1,2,3, "good morning", True)
print(sys.getsizeof(list_a), "bytes")
print(sys.getsizeof(tuple_a), "bytes") # smaller and sometime efficient

import timeit
print(timeit.timeit(stmt="[0,1,2,3,4,5]", number=1000000))
print(timeit.timeit(stmt="(0,1,2,3,4,5)", number=1000000)) #faster to create
```

### Dictionaries

```python
# Dictionaries: key-value pairs, unordered, mutable

my_dict = {"name": "Davis", "age": 23, "city": "Kisumu"}
my_dict["course"] = "Computer Science" # add item
my_dict.pop("age") # remove specified
my_dict.popitem()# remove last inserted item
print(my_dict, my_dict["name"])

#check
if "name" in my_dict:
    print(my_dict["name"])

try:
    print(my_dict["lastname"])
except:
    print("key not found")



my_dict2 = dict(name="Andrew", age=22, city="Nakuru")
del my_dict2["age"] # delete specified
print(my_dict2,)

for key, value in my_dict.items():
    print(key, value)

for key in my_dict2.keys():
    print(key)

for value in my_dict2.values():
    print(value)

my_dict3 = {"name": "Bwake", "age": 24, "city": "Kitale"}

#copy
my_dict3_copy = my_dict3.copy()
my_dict3_copy["email"] = "bwake@email.com"
print(my_dict3_copy)
print(my_dict3)

my_dict3_copy = dict(my_dict3)
my_dict3_copy["email"] = "bwake@email.com"
print(my_dict3_copy)
print(my_dict3)

## modify the original one too
my_dict3_copy = my_dict3
my_dict3_copy["email"] = "bwake@email.com"
print(my_dict3_copy)
print(my_dict3)
```

### Object oriented

Intro to classes

classes and instances
```py
class Employee:
    def __init__(self, first_name, last_name, pay):
        self.first_name = first_name
        self.last_name = last_name
        self.pay = pay
        self.email = first_name + '.' + last_name + '@mail.com'
    def full_name(self):
        return '{} {}'.format(emp_1.first_name, emp_1.last_name)

emp_1 = Employee('Davis', 'Bwake', 50000)
emp_2 = Employee('Test', 'User', 60000)


print(emp_2.email)

print(emp_1.full_name())
```

Class and static methods

```py
class Employee:

    raise_amount = 1.04
    def __init__(self, first_name, last_name, pay):
        self.first_name = first_name
        self.last_name = last_name
        self.pay = pay
        self.email = first_name + '.' + last_name + '@mail.com'

    def full_name(self):
        return '{} {}'.format(emp_1.first_name, emp_1.last_name)
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)
    @classmethod
    def set_raise_amount(cls, amount):
       cls.raise_amount = amount
    @staticmethod
    def is_workday(day):
        if day.weekday == 5 or day.weekday == 6:
            return False
        else: 
            return True

emp_1 = Employee('Davis', 'Bwake', 50000)
emp_2 = Employee('Test', 'User', 50000)



Employee.set_raise_amount(1.05)
print(Employee.raise_amount)
print(emp_1.raise_amount)
print(emp_2.raise_amount)

import datetime
my_date = datetime.date(207, 7, 10)

print(Employee.is_workday(my_date))
```

Inheritance

```py
class Employee:

    raise_amount = 1.04
    def __init__(self, first_name, last_name, pay):
        self.first_name = first_name
        self.last_name = last_name
        self.pay = pay
        self.email = first_name + '.' + last_name + '@mail.com'

    def full_name(self):
        return '{} {}'.format(self.first_name, self.last_name)
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)

class Developer(Employee):
    def __init__(self, first_name, last_name, pay, prog_lang):
        super().__init__(first_name, last_name, pay)
        self.prog_lang = prog_lang

class Manager(Employee):
    def __init__(self, first_name, last_name, pay, employees=None):
        super().__init__(first_name, last_name, pay)
        if employees is None:
            self.employees = []
        else:
            self.employees = employees
    def add_employee(self, employee):
        if employee not in self.employees:
            self.employees.append((employee))
    def remove_employee(self, employee):
        if employee in self.employees:
            self.employees.remove((employee))
    def print_employees(self):
        for employee in self.employees:
            print(employee.full_name())

emp_1 = Employee('Davis', 'Bwake', 50000)
dev = Developer('Test', 'User', 50000, 'Python')

mng_1 = Manager("Sue", "Smith", 90000, [emp_1, dev])

print(dev.email)
print(mng_1.print_employees())

print(isinstance(mng_1, Manager))
print(isinstance(mng_1, Developer))
print(isinstance(mng_1, Employee))
```

Magic Dunder

```python
class Employee:

    raise_amount = 1.04
    def __init__(self, first_name, last_name, pay):
        self.first_name = first_name
        self.last_name = last_name
        self.pay = pay
        self.email = first_name + '.' + last_name + '@mail.com'

    def full_name(self):
        return '{} {}'.format(self.first_name, self.last_name)
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)
    def __repr__(self):
        return "Employee( '{}', '{}', '{}' )".format(self.first_name, self.last_name, self.pay)
    def __str__(self):
        return '{} {}'.format(self.full_name(), self.email)
    def __add__(self, other):
        return self.pay + other.pay
    def __len__(self):
        return len(self.full_name())

emp = Employee('Davis', 'Bwake', 50000)
emp_1 = Employee('John', 'Doe', 50000)

print(emp.__str__())
print(emp.__repr__())

print(int.__add__(1, 2))
print(emp + emp_1)
print(len(emp))
```

Setter

```python
class Employee:

    raise_amount = 1.04
    def __init__(self, first_name, last_name, pay):
        self.first_name = first_name
        self.last_name = last_name
        self.pay = pay
    @property
    def email(self):
        return '{}.{}@email.com'.format(self.first_name, self.last_name)
    @property
    def full_name(self):
        return '{} {}'.format(self.first_name, self.last_name)
    @full_name.setter
    def full_name(self, value):
        first_name, last_name = value.split(' ')
        self.first_name = first_name
        self.last_name = last_name
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)

emp = Employee('Davis', 'Bwake', 50000)
emp_1 = Employee('John', 'Doe', 50000)

print(emp.email)
emp.full_name = 'John Doe'
print(emp.full_name)
```