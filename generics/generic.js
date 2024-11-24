"use strict";
console.log("Generics");
// Generics allow us to write reusable, flexible & type-safe code
// Let us define components(functions, classes, interfaces) that work with a variety of data types without sacrificing type safety
// BASIC SYNTAX
// Generic type parameter is defined using <T> where "T" = Type
function identity(value) {
    return value;
}
console.log(identity("Hello")); // Hello
//  TypeScript can often infer the type, so you don’t need to explicitly specify it.
console.log(identity("Hello")); // Hello
console.log(identity(420)); // 420
console.log(identity(420)); // 420
// GENERICS FUNCTIONS
function getFirstElement(arr) {
    return arr[0];
}
const numss = [1, 2, 3];
const namess = ["Alice", "Bob"];
console.log(getFirstElement(numss)); // Output: 1
console.log(getFirstElement(namess)); // Output: Alice
function hello23(arg) {
    let alpha = [];
    for (let i = 0; i < arg.length; i++) {
        alpha.push(arg[i]);
    }
    return alpha;
}
console.log(hello23([33, 44, 55]));
console.log(hello23(["one", "two", "three"]));
// GENERIC CLASSES
class Box {
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
// Usage
const numberBox = new Box(123);
console.log(numberBox.getContent()); // Output: 123
// MULTIPLE GENERICS
function mySelf(name, age) {
    return [name, age];
}
console.log(mySelf("Frank", 22));
console.log(mySelf("Joyce", "Eighteeen"));
