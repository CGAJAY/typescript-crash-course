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
