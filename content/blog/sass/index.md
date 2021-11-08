---
title: learn sass
date: "2020-06-12T22:12:03.284Z"
description: "Syntactically Awesome Stylesheet"
---

It's a CSS preprocessor/extension
Allows us to use features that don't exist yet in CSS
compiled to regular CSS form (.scss/sass)

## Variables in CSS

```css
$primary: "blue"
```

## mixins and functions

```css
@mixin transform  ($property) {

}

.box{
    @include transform(rotate(30deg))
}
```

## Inheritance

```css
%message-shared {
    border: 1px solid #ccc;
}
```

inherit

```css
.message {
    @extend % message-shared;
}

.success {
    @extend % message-shared;
    padding: 1px;
}
```

## Operators

*, /, -, +

## Conditionals

```css
@if $direction === up {

}
```

```css
@else if $direction === right {

}
```

```css
@else {

}
```

```css
@error {

}
```

## Loops

```css
each in
```

## imports

Allows imports from other files
