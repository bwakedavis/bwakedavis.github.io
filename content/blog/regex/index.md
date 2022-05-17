---
title: Regex
date: "2020-05-12T22:12:03.284Z"
description: "Regular expressions"
---

Allows us to check a series of character for matches eg. emails

```*``` - 0 or more matches
```+``` - 0 or 1 match
```^``` - matches the start of the string or line
```$``` - signifies escape sequence
```.``` - matches any single character except new line
```()``` - captures a group that can be saved and used later
```+``` - 0 or 1 match
```|``` - used as a logic or inside a capturing
```[abc]``` - character set. matches one of the things in the brackets
```[^abc]``` - negated character set, matches anything except the ones in the bracket.
```[a-zA-Z]``` - matches all upper and lowercase letters, you can specify any range
```{1}``` - exact one number of matches, comes after a set of group
```{1,5}``` - inclusive range for number of matches
```{1, }``` - maximum number of matches
```{ ,5}``` - maximum number of matches
```\s``` - matches any whitespace character
```\d``` - matches any digit same as ```[0-9]```
```\D``` - matches any non digit
```w``` - any word character same as ```[a-zA-Z0-9]```
```W``` - any non-word character same as ```[^a-zA-Z0-9]```
```b``` - word boundary
```B``` - non-word boundary
```\b``` - escape sequence for a backspace character
```u0404``` - 4 digital unicode hex value for a character
```\t``` - matches tab character only
```\d --``` - matches only digit character
```d--``` - matches d character
