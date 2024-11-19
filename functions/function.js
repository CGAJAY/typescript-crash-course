"use strict";
console.log("TypeScript Functions");
// Functions inTypescript are similar to those in JavaScript but with added type Checking
// TypeScript lets you define the parameter types, return type and even handle optional/default parameters
// BASIC FUNCTION SYNTAX
function add(a, b) {
    // a: number and b: number define the types of the parameters.
    // : number after the parameter list specifies the return type.
    return a + b; // returns a number
}
console.log(add(2, 3)); // Output: 5
// console.log(add(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// ARROW FUNCTIONS
const square = (x) => x * x;
console.log(square(4)); // Output: 16
// ANONYMOUS FUNCTIONS
// Are often used as callbacks
const names = [
    "Flavian",
    "Joyce",
    "Claire",
    "Frank",
];
names.forEach((name) => {
    console.log(name);
});
// Output: Flavian, Joyce, Claire, Frank
// OPTIONAL PARAMETERS
// You can make a parameter optional using ?
// Optional parameters are automatically of type undefined if not provided
function greet(name, age) {
    // Use ? for optional parameters (age?: number).
    // Optional parameters must come after required ones.
    if (age) {
        return `Hello, ${name}. You are ${age} years old.`;
    }
    return `Hello ${name}.`;
}
console.log(greet("Frank")); // Output: Hello, Alice
console.log(greet("Joyce", 18)); // Output: Hello, Joyce. You are 18 years old.
// console.log(greet()); // Error: Expected 1-2 arguments, but got 0.
// DEFAULT PARAMETERS
// You can assign default values to parameters.
function multiply(a, b = 1) {
    // If no value is passed for b, it defaults to 1.
    // Default parameters can simplify function calls.
    return a * b;
}
console.log(multiply(5)); // Output: 5 (b defaults to 1)
console.log(multiply(5, 3)); // Output: 15
// FUNCTION TYPES
// A function type specifies:
// The parameter types (inside parentheses ()).
// The return type (after the arrow =>).
// function type: Takes two numbers and return a number
let calculate;
// assigning a function that matches the type
calculate = (x, y) => x + y;
console.log(calculate(5, 3)); // Output: 8
// calculate = (x, y) => "sum"; // Error: Type 'string' is not assignable to type 'number'
// Error: Function must return a number
// FUNCTION TYPES AS PARAMETERS
// A function itself can be passed as an arguement to another function
// It's type must be specified
// Function type: Takes a number and returns a number
let process1;
process1 = (n) => n * 2;
function applyFunction(fn, // Accept a single number as input & Return a number as output.
value) {
    // Returns the result of calling fn(value)
    return fn(value);
}
console.log(applyFunction(process1, 10)); // Output: 20
// VOID FUNCTIONS
// we use void for functions that don't return a value
function logMessage3(message) {
    console.log(message);
}
logMessage3("Hello, TypeScript!");
// function invalidLog(message: string): void {
//     return message; // Error: Type 'string' is not assignable to type 'void'.
// }
// Error: Void function cannot return a value
// REST PARAMETERS
// Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array.
// They are particularly useful when creating functions that need to handle a variable number of inputs.
function sum(...numbers) {
    // ...numbers: The rest parameter syntax collects all remaining arguments into an array called numbers
    // number[] indicates that numbers is an array of numbers.
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
// Rest parameters must be an array type. Assigning a non-array type causes an error.
// COMMON ERRORS IN TYPESCRIPT FUNCTIONS
// Missing parameter types
// function greet1(name){
// 	// Error: Parameter 'name' implicitly has an 'any' type
// 	return `Hello ${name}`;
// }
// TypeScript doesn't allow parameters or variables to have an implicit any type when the noImplicitAny compiler option is enabled (which is often the case in strict TypeScript configurations).
// Incorrect return type
// function add2(a: number, b: number): string {
// 	// Error: Type 'number' is not assignable to type 'string'
// 	return a + b;
// }
// Mismatched function type
let calc;
// calc = (x, y) => "result";
// Error: Type 'string' is not assignable to type 'number'
// SUMMARY
// Functions in TypeScript let's you specify parameter and return types
// You can use optional and default parameters for flexibility
// TypeScript ensures type safety for arguements, return types & function types
// Use (void) for functions that don't return values
// Use (rest parameters) for handling multiple arguements
