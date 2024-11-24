console.log("Generics");

// Generics allow us to write reusable, flexible & type-safe code
// Let us define components(functions, classes, interfaces) that work with a variety of data types without sacrificing type safety

// BASIC SYNTAX
// Generic type parameter is defined using <T> where "T" = Type
function identity<T>(value: T): T {
	return value;
}

console.log(identity<string>("Hello")); // Hello
//  TypeScript can often infer the type, so you don’t need to explicitly specify it.
console.log(identity("Hello")); // Hello
console.log(identity<number>(420)); // 420
console.log(identity(420)); // 420

// GENERICS FUNCTIONS
function getFirstElement<T>(arr: T[]): T {
	return arr[0];
}

const numss = [1, 2, 3];
const namess = ["Alice", "Bob"];

console.log(getFirstElement(numss)); // Output: 1
console.log(getFirstElement(namess)); // Output: Alice

function hello23<T>(arg: T[]): T[] {
	let alpha: T[] = [];
	for (let i = 0; i < arg.length; i++) {
		alpha.push(arg[i]);
	}
	return alpha;
}

console.log(hello23<number>([33, 44, 55]));
console.log(hello23<string>(["one", "two", "three"]));

// GENERIC CLASSES
class Box<T> {
	content: T;
	constructor(value: T) {
		this.content = value;
	}
	getContent(): T {
		return this.content;
	}
}

// Usage
const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // Output: 123

// MULTIPLE GENERICS
function mySelf<A, Z>(name: A, age: Z): [A, Z] {
	return [name, age];
}
console.log(mySelf<string, number>("Frank", 22));
console.log(mySelf<string, string>("Joyce", "Eighteeen"));
