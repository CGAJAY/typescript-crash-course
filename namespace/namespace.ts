console.log("namespace");

// namespaces aare internal modules
// a namespace is a way to logically group related code under a single name to prevent naming conflicts and make code organization easier
// It is particularly useful when your codebase grows, and you want to avoid clashes between identifiers like classes, interfaces, functions, or variables.

// BASIC SYNTAX
namespace MathOperations {
	export function add(a: number, b: number): number {
		return a + b;
	}

	export function subtract(a: number, b: number): number {
		return a - b;
	}
}

// To use members of the namespace, prefix them with the namespace name:
const result1 = MathOperations.add(10, 5); // 15
console.log(result1);
const result2 = MathOperations.subtract(10, 5); // 5
console.log(result2);

// By default, everything inside a namespace is private.
// Use the export keyword to expose specific members.
namespace Greeting {
	export function sayHello(name: string): string {
		return `Hello, ${name}!`;
	}

	function privateFunction(): void {
		console.log("This is private.");
	}
}

console.log(Greeting.sayHello("Alice")); // Works
// Greeting.privateFunction(); // Error: privateFunction is not exported

// NESTED NAMESPACES
// Namespaces can be nested inside one another for better organization.
namespace Geometry {
	export namespace Circle {
		const PI = 3.14;

		export function calculateArea(radius: number): number {
			return PI * radius * radius;
		}
	}
}

const area = Geometry.Circle.calculateArea(5);
console.log(`Circle Area: ${area}`); // Circle Area: 78.5

// MERGING NAMESPACES
// You can declare the same namespace in multiple files or blocks, and TypeScript will merge them.
namespace Library {
	export function issueBook(bookName: string): void {
		console.log(`${bookName} has been issued.`);
	}
}

namespace Library {
	export function returnBook(bookName: string): void {
		console.log(`${bookName} has been returned.`);
	}
}

Library.issueBook("TypeScript Handbook");
Library.returnBook("TypeScript Handbook");

// ALIASES
// To make the code cleaner, you can create aliases for namespaces.
namespace MathUtilities {
	export function square(num: number): number {
		return num * num;
	}
}

import MU = MathUtilities;

console.log(MU.square(4)); // 16
