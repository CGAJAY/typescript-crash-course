"use strict";
console.log("classes");
// Classes are a foundational concept in object-oriented programming (OOP)
// A class is a bluprint for creating objects with shared properties and behaviours
// Classes make our code more organised, re-usable and scalable
// WHY USE CLASSES
// Encapsulation - Bundle data(properties) & behaviours(methods into one unit)
// Reusability - Creating multiple objects from the same class
// Inheritance - Classes inherit from other classes, promoting code re-use
// Abstraction - Hide unnecessary implementation details
// Polymorphism - Define methods indifferent way for different classes, improving flexibility
// BASIC SYNTAX
// Typescript builds on JavaScript classes by adding type-checking and other powerful features
class Theperson {
    // Constructor to initialize properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(`Hi my name is ${this.name} and I am ${this.age}  years old`);
    }
}
// Create an object (instance) of the class
const Person20 = new Theperson("Frank", 18);
Person20.greetings();
// ACCESS MODIFIERS IN TYPESCRIPT
