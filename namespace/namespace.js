"use strict";
console.log("namespace");
// namespaces aare internal modules
// a namespace is a way to logically group related code under a single name to prevent naming conflicts and make code organization easier
// It is particularly useful when your codebase grows, and you want to avoid clashes between identifiers like classes, interfaces, functions, or variables.
// BASIC SYNTAX
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
})(MathOperations || (MathOperations = {}));
// To use members of the namespace, prefix them with the namespace name:
const result1 = MathOperations.add(10, 5); // 15
console.log(result1);
const result2 = MathOperations.subtract(10, 5); // 5
console.log(result2);
// By default, everything inside a namespace is private.
// Use the export keyword to expose specific members.
var Greeting;
(function (Greeting) {
    function sayHello(name) {
        return `Hello, ${name}!`;
    }
    Greeting.sayHello = sayHello;
    function privateFunction() {
        console.log("This is private.");
    }
})(Greeting || (Greeting = {}));
console.log(Greeting.sayHello("Alice")); // Works
// Greeting.privateFunction(); // Error: privateFunction is not exported
// NESTED NAMESPACES
// Namespaces can be nested inside one another for better organization.
var Geometry;
(function (Geometry) {
    let Circle;
    (function (Circle) {
        const PI = 3.14;
        function calculateArea(radius) {
            return PI * radius * radius;
        }
        Circle.calculateArea = calculateArea;
    })(Circle = Geometry.Circle || (Geometry.Circle = {}));
})(Geometry || (Geometry = {}));
const area = Geometry.Circle.calculateArea(5);
console.log(`Circle Area: ${area}`); // Circle Area: 78.5
// MERGING NAMESPACES
// You can declare the same namespace in multiple files or blocks, and TypeScript will merge them.
var Library;
(function (Library) {
    function issueBook(bookName) {
        console.log(`${bookName} has been issued.`);
    }
    Library.issueBook = issueBook;
})(Library || (Library = {}));
(function (Library) {
    function returnBook(bookName) {
        console.log(`${bookName} has been returned.`);
    }
    Library.returnBook = returnBook;
})(Library || (Library = {}));
Library.issueBook("TypeScript Handbook");
Library.returnBook("TypeScript Handbook");
// ALIASES
// To make the code cleaner, you can create aliases for namespaces.
var MathUtilities;
(function (MathUtilities) {
    function square(num) {
        return num * num;
    }
    MathUtilities.square = square;
})(MathUtilities || (MathUtilities = {}));
var MU = MathUtilities;
console.log(MU.square(4)); // 16
