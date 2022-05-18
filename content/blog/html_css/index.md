---
title: HTML
date: "2018-12-27T22:12:03.284Z"
description: "HyperText Markup Language"
---

```www``` - world wide web
```URL``` - Uniform Resource Locator
```HTTP`` - Hypertext Transfer Protocol

## Tables

```<table>``` - table tag
```tr``` - table rows
```th``` - table heading
```td``` - table data
```<th colspan="3>``` - Spans 3 columns
```<th rowspan="3>``` - Spans 3 rows
```caption``` - Adds caption inside the table element
```thead``` - groups the header content in a table
```tbody``` - groups the body content in a table
```tfoot``` - groups the footer content in a table

common table styling

```css
table, th,td {
    border: 1px solid black;
    border-collapse: collapse;
}
```

```html
<table>  
    <tr>
    <th></th>
    </tr>
    <tr>
    <td></td>
    </tr>
</table>
```

## Lists

Unordered lists

```html
    <ul>
        <li></li>
    </ul>
```

Ordered lists

```html
    <ol>
        <li></li>
    </ol>
```

Nested lists - lists inside lists

```html
<dl>
    <dt>Coffee</dt>
    <dd>black coffee</dd>
</dl>
```

common list styling

```html
<ul type="1">
<ul type="a">
<ul type="A">
<ul type="i">
```

## Block Elements

``` html
<div>
```

``` html
<h1> - <h6>
```

``` html
<p>
```

``` html
<form>
```

## Inline Elements

``` html
<span>
<a>
<img>
```

## Semantic Elements

``` html
<header>
<nav>
<section>
<article>
<aside>
<footer>
```

```iframe``` - is used to display a web page with a web page

```html
<iframe src="github.com" frameborder="0"></iframe>
<iframe src="demo.html" frameborder="0"></iframe>
```

## Head

Container for metadata(data about data)
HTML character encoding helps in displaying the page correctly

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">  <!-- defines characterset -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- defines viewport -->
<base href="www.youtube.com" target="_blank">  <!-- specifies the base URL and base target url for all relative URL's in a page -->
```

## Uniform Resource Locators(URL's

scheme - defines the type of internet service
prefix - defines a domain (default of http is www)
domain - defines the internet domain
path - defines a path at the server
filename - defines the name of a document/resource
ftp - downloading or uploading files

## Entities

```> greater than &gt &#62```

## Forms

Used to collect user inputs

### Form Inputs

### Input Attributes

## Canvas

## Media

## Plugins

## API's