---
title: learn java
date: "2021-11-4T23:19:03.284Z"
description: "java"
---

Java

```java
package com.bwake;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

Strings use double quotes
Characters can use single quote
Compile and run application using the run button on intelj idea
or
by using the terminal.
```bash
javac Main.java//inside the  app package name directory
java com.bwake.Main //inside src directory
```

## Comments
Comments start with forward slash and multi-line Aster and slashes

```java
//single line comment
/*
        Multi line comment
 */
```

## Variables

Primitive values

```java
package com.bwake;

import java.util.Date;

public class Main {
    public static  void main( String[] args){
        //primitive data types
        byte Byte = -128;
        byte Byte2 = 127;
        short Short = -32768;
        short Short2 = 32_767;
        int number = 100; //integer
        long Long = 868689468961L;
        float floatNum = 3.142F; // float sufficient for 6/7 decimal digits
        double decimal = 99.99; //double sufficient for 15 decimal digits
        char a = 'A'; //character
        boolean isAdult = true;
        System.out.println(number);
    }
}
```

Reference Types

```java
package com.bwake;

import java.time.LocalDate;
import java.util.Date;

public class Main {
    public static  void main( String[] args){
        //Non-primitive data types or reference types
        String name = new String("Davis");
        LocalDate now = LocalDate.now();
        System.out.println(now.getMonth());
    }
}
```

Passing by reference

```java
package com.bwake;

import java.time.LocalDate;
import java.util.Date;

public class Main {
    public static  void main( String[] args){
        //Non-primitive data types or reference types
        String name = new String("Davis");
        LocalDate now = LocalDate.now();
        System.out.println(now.getMonth());

        Person alex = new Person("Alex");
        Person ann = alex;

        System.out.println("before changing Alex");
        System.out.println(alex.name + " " + ann.name);

        alex.name = "Alexander";

        System.out.println("after changing alex");
        System.out.println(alex.name + " " + ann.name);
    }

    static  class  Person {
        String name;

        Person(String name) {
            this.name = name;
        }
    }
}
```

## Strings

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //String
        char a = 'A';

        String name = new String("Davis");
        System.out.println(name.toLowerCase());
        System.out.println(name.charAt(1));
        System.out.println(name.contains("is"));
    }
}
```

## Packages and imports

```java
package com.bwake;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

public class Main {
    public static  void main( String[] args){
        Date date = new Date();
        java.sql.Date dateSql = new java.sql.Date(1);
        LocalDate localDate = LocalDate.now();
        LocalDateTime localDateTime = LocalDateTime.now();
    }
}
```

## Math Operators

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        int ten = 10;
        int two = 2;
        int sum = ten + two;
        System.out.println(sum);
        System.out.println(Math.max(23,45));
    }
}
```

## Comparison operators

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //comparison operators
        int age1 = 17;
        int age2 = 22;
        System.out.println(age1 > age2);
        System.out.println(age1 >= age2);
        System.out.println(age1 < age2);
        System.out.println(age1 <= age2);
        System.out.println(age1 == age2);
        System.out.println(age1 != age2);
    }
}
```

### Logical Operators

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //Logical operators
        boolean isAdult = false;
        boolean isRegistered = true;

        System.out.println(isAdult && isRegistered);
        System.out.println(isAdult || isRegistered);
        System.out.println(isAdult || !isRegistered);
        System.out.println(!isAdult && isRegistered);
    }
}
```

## if ...else if

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //if statements
        int age = 17;
        if(age >= 18 ) {
            System.out.println("An Adult");
        } else if(age >= 16 && age < 18) {
            System.out.println("Almost 18 you know");
        }
        else  {
            System.out.println("Not an adult");
        }
    }
}
```

## Ternary operator

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //ternary operator
        int age = 17;
        String message = age >= 18 ? "An adult" : "Not an adult";
        System.out.println(message);
    }
}
```

## Switch Statements

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //switch statements
        String gender = "MALE";

        switch (gender) {
            case "FEMALE":
                System.out.println("female");
                break;
            case "MALE":
                System.out.println("male");
                break;
            default:
                System.out.println("Prefer not to say");
                break;
        }
    }
}
```

## Arrays

```java
package com.bwake;

import java.util.Arrays;

public class Main {
    public static  void main( String[] args){
        //Arrays
        int [] nums = {2, 0, 3}; //dynamic array
        int [] numbers = new int[3]; //fixed array
        String [] names = { "Davis", "Bwake"};
        numbers[0] = 0;
        numbers[1] = 1;
        numbers[2] = 2;
        System.out.println(Arrays.toString(numbers));
        System.out.println(Arrays.toString(nums));
        System.out.println(names.length); //get length
        System.out.println(nums[2]); //grabbing by index
    }
}
```

## Loops

```java
package com.bwake;

import java.util.Arrays;

public class Main {
    public static  void main( String[] args){
        //Loops
        int [] numbers = {3, 45,73, 48, 976, 199, 0, 13};
        int number = 0;
        number++;

        for (int i = 0; i< numbers.length; i++) {
            System.out.println(numbers[i]);
        }

        for(int num : numbers) {
            System.out.println(num);
        }

        Arrays.stream(numbers).forEach((System.out::println));
    }
}
```

## break and continue

```java
package com.bwake;

import java.util.Arrays;

public class Main {
    public static  void main( String[] args){
        //Break and Continue
        String[] names = { "Davis", "Alex", "Peter", "Paul"};
        for (String name : names) {
            System.out.println(name);
            if ((name.startsWith("A"))){
                continue;
            }
            if(name.equals("Peter")) {
                break;
            }
        }
    }
}
```

## while loop

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //while loop
        int count = 0;
        while (count <= 20) {
            System.out.println("count" + count);
            count++;
        }
    }
}
```

## do while loop

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //do while loop
        int count = 0;

        do{
            System.out.println("count" + count);
            count++;
        }
        while (count <= 20);
    }
}
```

## user input

```java
package com.bwake;

import java.time.LocalDate;
import java.util.Scanner;

public class Main {
    public static  void main( String[] args){
        //scanner
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter name");
        String username = scanner.nextLine();
        System.out.println("Hello " + username);

        System.out.println("Enter your age");
        int age = scanner.nextInt();
        int year = LocalDate.now().minusYears(age).getYear();
        System.out.println("You were born in " + year);
    }
}
```

## Methods

```java
package com.bwake;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static  void main( String[] args){
        //Methods
        char[] letters = { 'A', 'B', 'C',
        'D', 'D'};
        int counter = count(letters, 'D');
        System.out.println(counter);
    }

    public  static  int  count(char [] letters,
                               char searchLetter) {
        int occurence = 0;
        System.out.println(Arrays.toString((letters)));
        System.out.println(searchLetter);
        for (char letter : letters) {
            if (letter == searchLetter) {
                occurence++;
            }
        }
        return  occurence;
    }
}
```

## classes and objects

```java
package com.bwake;

public class Main {
    public static  void main( String[] args){
        //Classes and Objects
        Lens lensOne = new Lens(
                "Sony",
                "85mm",
                true
        );
    }

    static  class  Lens {
        String brand;
        String focalLength;
        boolean isPrime;

        Lens(String brand,
        String focalLength,
        boolean isPrime) {
            this.brand = brand;
            this.focalLength = focalLength;
            this.isPrime = isPrime;
        }
    }
}
```