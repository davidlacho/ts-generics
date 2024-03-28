# TypeScript Generics

Generics in TypeScript are a powerful feature that enables classes, interfaces, and functions to be more flexible by allowing them to operate with any type rather than being restricted to one. This document provides an overview of how generics can be used in TypeScript to create robust and reusable code.

## Overview

Generics can be thought of as type variables that you pass into classes, interfaces, or functions at the time of their instantiation or invocation. This allows for a high degree of code reuse and type safety.

## Example: Generic Class

Consider a scenario where you need to work with arrays of numbers and strings. Instead of creating two separate classes for each type, you can create a single generic class that works with any type.

```tsx
class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

// Refactored using generics:

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

// Usage:
new ArrayOfAnything<string>(["a", "b", "c"]);
```

This example shows how a single, flexible class definition (`ArrayOfAnything<T>`) can be used with any type, eliminating the need for multiple, type-specific classes.

## Using Generics with Functions

Generics also enhance functions by enabling them to accept parameters of any type and perform operations based on that type.

```tsx
// Without generics:

function printStrings(arr: string[]): void {
  arr.forEach(console.log);
}

function printNumbers(arr: number[]): void {
  arr.forEach(console.log);
}

// With generics:

function printAnything<T>(arr: T[]): void {
  arr.forEach(console.log);
}

// Example usage:
printAnything<number>([1, 2, 3]);
printAnything<string>(["hello", "world"]);
```

In this case, a single function `printAnything<T>` replaces multiple type-specific functions, showcasing the power of generics for creating flexible and reusable code.

## Generic Constraints

Generic constraints are used to specify that a type parameter must meet certain criteria. This is useful when you want to limit the functionality to types that share certain characteristics.

```tsx
interface Printable {
  print(): void;
}

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach((item) => item.print());
}

// Usage:
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
```

This example uses a generic constraint (`T extends Printable`) to ensure that the `printHousesOrCars` function only accepts arrays of objects that implement the `Printable` interface, thereby ensuring type safety.

By utilizing generics, TypeScript developers can write more flexible and reusable code, reducing redundancy and improving type safety.
