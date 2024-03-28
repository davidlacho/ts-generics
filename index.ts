// Generics with Classes
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

// Can be refactored as:

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

// Generics with Functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3, 4]);
printAnything<string>(["A", "B", "C"]);

printAnything([1, 2, 3, 4]);
printAnything(["A", "B", "C"]);

// Generic Constraints

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

// When we extend T to Printable,
// We're telling it that it has all the methods
// That type Printable has.
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars([new House(), new House()]);

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars([new Car(), new Car()]);

printHousesOrCars<Car | House>([new House(), new Car()]);
printHousesOrCars([new House(), new Car()]);
