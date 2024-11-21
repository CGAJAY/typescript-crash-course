console.log("types");

// type is a way to define shape or structure of data
// Improves Readability: Makes code easier to understand and maintain.
// Prevents Errors: Detects mismatched data types during development.
// Enhances Flexibility: Allows you to define complex structures and reuse them.

type Username = string;

// using the username
const name4: Username = "Flav";
// const name5: Username = 123; ❌ Error: Type 'number' is not assignable to type 'string'

// UNION TYPES
// Combine multiple types using the | operator
type status = "Success" | "Error" | "Loading";

let currentStatus: status = "Success";
currentStatus = "Error";
// currentStatus = "Pending"; // ❌ Error: Type '"pending"' is not assignable to type 'Status'

// TYPE WITH OBJECTS
type Customer = {
	name: string;
	age: number;
};

let c1: Customer = { name: "Adani", age: 25 };
console.log(c1);

c1.name = "Patel";
console.log(c1);

// TUPLE TYPES
// Define fixed length arrays with specific types
type Point = [number, number];
const point: Point = [10, 20];
console.log(point);

// UNION INTERSECTION
interface One {
	value: number;
}

interface Two {
	count: number;
}

// intersect
type i = One & Two;
let d1: i = {
	value: 5,
	count: 6,
};
console.log(d1);

// union
type u = One | Two;
let d2: u = { value: 10 };
let d3: u = { count: 99 };
console.log(d2, d3);

// TYPE FUNCTIONS
type Customer1 = {
	name: string;
	age: number;
	checkout(): void;
};

let c2: Customer1 = {
	name: "C2",
	age: 23,
	checkout() {
		console.log("Purchase successful");
	},
};
console.log(c2);
c2.checkout();

// Both type and interface can define object shapes, but type can also represent:
// Primitive types, Union and intersection types, Tuples, Functions

// When to Use type
// Union/Intersection: Use type for combining types (| or &).
// Primitives and Complex Types: Use type for custom aliases for primitives or complex constructs.
// Function Types: Use type for describing functions.
