console.log("namespace");

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
