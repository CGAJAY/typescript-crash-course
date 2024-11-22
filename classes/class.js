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
// INHERITANCE
// Classes can extend other classes to inherit their properties and methods
// Subclasses can add or override functionality while still leveraging the parent class implementation
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("Buddy");
dog.speak(); // Buddy barks
// ACCESS MODIFIERS IN TYPESCRIPT
// They determine the visibility & accessibility of properties & methods within a class
// 1. Public (default)
// Properties & methods marked as public (or left without a modifier) are accessible from anywhere
class PublicExample {
    constructor(name, nickName) {
        this.name = name;
        this.nickName = nickName;
    }
    greetingss() {
        console.log(`Hello ${this.name}`);
    }
}
const friend1 = new PublicExample("Flavian", "Kibz");
console.log(friend1.name); // Flavian
console.log(friend1.nickName); // Kibz
friend1.greetingss(); // Hello Flavian
// The name, nickName and greet() are accessible both inside and outside the class.
// 2. Private
// properties & methods marked as private are accessible only within the class where they are defined
// They can't be accessed outside the class or by derived classes (subclasses)
class PrivateExample {
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(`The secret is: ${this.secret}`);
    }
}
const obj33 = new PrivateExample("topSecret");
// console.log(obj33.secret); // Property 'secret is private
obj33.revealSecret(); // The secret is: topSecret
// You can't directly access secret from outside the class, but you can use methods like revealSecret to interact with it indirectly
// 3. Protected
// properties and methods marked as protected are accessible within the class and in its subclasses but not from outside the class
class ProtectedExample {
    constructor(data) {
        this.data = data;
    }
    showData() {
        console.log(`Data: ${this.data}`);
    }
}
class DerivedExample extends ProtectedExample {
    display() {
        this.showData(); // Accessing the protected method
        return "hello";
    }
}
let obj4 = new DerivedExample("sensitive Data");
// console.log(obj4.data); // Property 'data' is protected
obj4.display(); // Data: sensitive Data
console.log(obj4.display()); // Accesible from anywhere
// The data property is accessible inside DerivedExample but not outside it
