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