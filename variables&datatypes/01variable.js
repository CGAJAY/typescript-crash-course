"use strict";
// only integer is allowed in age variable
let age = 25;
age = 30; // No error, reassigning a number
console.log(age);
// age = "30"; // Error: Type 'string' is not assignable to type 'number'
let floatNumber = 44.23;
console.log(floatNumber);
// only string is allowed in admin variable
let admin = "Jdoe";
console.log(admin);
// We can call all string methods on the string
console.log(`Index of e is`, admin.indexOf("e"));
admin = admin.toUpperCase();
console.log(admin);
// we can use single, double, or backticks
let myName = "John";
//name = 123;// Error: Type 'number' is not assignable to type 'string'
let greeting = `Hello, ${myName}`;
// only boolean is allowed in isDev variable
let isDev = true;
console.log(isDev);
isDev = false; // No error, reassigning a boolean
// isDev = "true"; // Error: Type 'string' is not assignable to type 'boolean'
// Setting a variable to hold more than one datatype
let char = 2;
console.log(char);
console.log(`type of char: ${typeof char}`);
// Re-assign a string
char = "2";
console.log(char);
console.log(`type of char: ${typeof char}`);
// Re-assign a boolean
char = true;
console.log(char);
console.log(`type of char: ${typeof char}`);
// TypeScript automatically infers the type of address as number.
let address = 1;
// This means address can only hold values of type number going forward.
// Trying to assign "kimanthi st" (a string) to address violates this inferred type, so TypeScript throws an error.
// address = "kimanthi st";
// num is an array of only numbers
let num = [1, 3, 5, 7]; // No error, valid array of numbers
num.push(99);
console.log(num);
// num.push('88'); // this will result to an error
// num = 3; // Type 'number' is not assignable to type 'number[]'
// Another syntax of creating arrays
// An array of only string values
let friends = ["Joyce", "Flav", "Claire", "Frank"];
console.log(friends);
friends.push("Mark");
console.log(friends);
// I prefer the first syntax of creating arrays
// An array of only boolean values
let bool = [true, false];
console.log(bool);
// Setting an array to hold more than one datatype
let myArray = [1, "GomyCode", true];
console.log(`myArray: ${myArray}`);
console.log(`type of myArray: ${typeof myArray[0]}`);
console.log(`type of myArray: ${typeof myArray[1]}`);
console.log(`type of myArray: ${typeof myArray[2]}`);
// TypeScript analyzes the contents of the array [200,"Not found"] and infers its type as (number | string)[].
let myStatus = [200, "Not found"];
// This means the array can only hold elements of type number or string
//If I try to add a boolean typescript will throw an error
// myStatus.push(true);
// any is a special type that essentially disables type checking for a variable.
let any1 = ["Name", 27, false];
console.log(any1);
let data = 42;
// data.toUpperCase(); // No compile-time error, but runtime error if `data` is not a string
console.log(data);
data = "Hello";
console.log(data);
data = true;
console.log(data);
// Tuples
// A tuple is an ordered collection of elements of different types. You specify the types in the order they appear.
let person = ["Alice", 30]; // No error, valid tuple
person = ["Bob", 25]; // No error, valid reassignment
// person = [30, "Bob"]; // Error: Type 'number' is not assignable to type 'string'
// You must follow the exact type order of the tuple (i.e., first a string, then a number in the example above).
// Enum
// Enums are a way to define named constants.
// Enums are useful when yo have a fixed set of related values
// Numeric enums are the most common and straightforward. Values are auto-incremented starting from 0 (or a custom starting point).
var Day;
(function (Day) {
	Day[(Day["Monday"] = 1)] = "Monday";
	Day[(Day["Tuesday"] = 2)] = "Tuesday";
	Day[(Day["Wednesday"] = 3)] = "Wednesday";
	Day[(Day["Thursday"] = 4)] = "Thursday";
	Day[(Day["Friday"] = 5)] = "Friday";
	Day[(Day["Saturday"] = 6)] = "Saturday";
	Day[(Day["Sunday"] = 7)] = "Sunday";
})(Day || (Day = {}));
console.log(Day.Monday); // Output: 1
console.log(Day.Sunday); // Output: 7
// String enums explicitly assign string values to each member.
var Color;
(function (Color) {
	Color["Red"] = "RED";
	Color["Green"] = "GREEN";
	Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
console.log(Color.Blue); // Output: "BLUE"
// Technically, TypeScript allows mixing strings and numbers in enums, but it’s considered a bad practice because it can lead to confusion.
// Avoid mixing types in enums to maintain clarity and consistency.\
(function (Color) {
	Color[(Color["Yellow"] = 1)] = "Yellow";
	Color["Gray"] = "23";
})(Color || (Color = {}));
console.log(Color.Yellow); // Output: 1
console.log(Color.Gray); // Output: "23"
// Unknown
// The unknown type is safer than any.
let value = "Hello"; // No error, valid assignment
// You can assign anything to an unknown variable, but you must check its type before performing operations on it.
// value.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof value === "string") {
	console.log(value.toUpperCase()); // No error after type check
}
// Null and Undefined
// null represents the intentional absence of any object value.
// undefined represents an uninitialized variable.
let n = null; // No error, valid null assignment
// n = undefined; // Error: Type 'undefined' is not assignable to type 'null'
let u = undefined; // No error, valid undefined assignment
// u=null // Error: Type 'null' is not assignable to type 'undefined'
let a = null; // No error, valid null assignment to a union type
a = 5; // No error, valid number assignment
// a = undefined; // Error: Type 'undefined' is not assignable to type 'number | null'
// Void
// The void type is used for functions that do not return a value.
// It is typically used as the return type for functions that do not return anything.
function logMessage(message) {
	console.log(message); // No error, function does not return anything
}
let result = logMessage("Hello!"); // No error, result is undefined
console.log(`result is ${result}`);
//  If you try to return something from a function that’s supposed to return void, TypeScript will give you an error.
function logMessage(message) {
	console.log(message);
	// return "Hello";  // Error: Type 'string' is not assignable to type 'void'
}
// Never
// The never type represents values that never occur. It is used for functions that never return (e.g., they throw an error or enter an infinite loop).
function throwError(message) {
	throw new Error(message); // No error, function never returns a value
}
// You cannot assign anything to a variable of type never, because it is used to represent the absence of a return type.
function infiniteLoop() {
	while (true) {
		console.log("Running forever...");
	}
}
//  shape can only be "circle" or "square". If you try to access any other type of shape, TypeScript knows it’s impossible.
function getArea(shape) {
	if (shape.kind === "circle") {
		return Math.PI * shape.radius * shape.radius;
	} else if (shape.kind === "square") {
		return shape.side * shape.side;
	} else {
		// TypeScript knows this block is unreachable.
		const _exhaustiveCheck = shape; // Error if new types are added to Shape
		return _exhaustiveCheck;
	}
}
// Object
// In TypeScript, the object type is a broad type that represents any non-primitive value. This includes:
// Objects like { key: value }
// Arrays like [1, 2, 3]
// Functions like function () {}
// You can assign any value that is not a primitive (string, number, boolean, symbol, null, undefined, or bigint) to a variable of type object.
// However, working with the object type can be limiting because it doesn’t provide much type safety or detailed information about the shape of the data.
let obj; // Variable `obj` can hold any non-primitive type.
obj = { name: "John", age: 30 }; // Valid
obj = { isLoggedIn: true }; // Valid
// obj = "Hello"; // Error: Type 'string' is not assignable to type 'object'
// obj = 42; // Error: Type 'number' is not assignable to type 'object'
let arr;
// Since arrays in JavaScript are technically objects, you can assign an array to a variable of type object. However, you won’t have access to array-specific methods (like .push() or .map()) without additional type information
arr = [1, 2, 3]; // Valid: Arrays are objects in JavaScript.
arr = ["apple", "banana"]; // Valid: Arrays with strings are also objects.
let person1 = { name: "Alice", age: 25 }; // Valid
person1.name; // Works fine because TypeScript knows the shape of the object.
// Using specific array type
let numbers = [1, 2, 3];
numbers.push(4); // Works fine because TypeScript knows it's a number array.
