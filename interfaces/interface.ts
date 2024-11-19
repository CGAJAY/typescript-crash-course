console.log("interfaces");

// An interface in Typescript is a way to define the structure of an object
// Specifies the types of properties & methods that an object can have
// Interfaces acts as contracts that objects must adhere to, providing type safety and clarity in your code
// Advantages of using interface over type is, interface can inherit, extend and declare merging

// BASIC SYNTAX
interface interfaceName {
	// propertyName: PropertyType;
	// methodName(param: ParamType): ReturnType;
}

// KEY FEATURES
// Allows some properties to be optional using the (?) modifier
// prevents modifications of proprties after initialisation
// Interfaces can define callable function types
// Enables interfaces to inherit from other interfaces
// Defines proprties dynamically

// BASIC INTERFACE
// Define an interface for a User object
interface User {
	name: string; // Mandatory property
	age: number; // Mandatory property
}

const user: User = {
	name: "Frank",
	age: 20,
};

// Access properties
console.log(user.name);
console.log(user.age);

// reassign properties
user.age = 18;
console.log(user.age);

// OPTIONAL ATTRIBUTES
// Use (?) to mark properties as optional
interface User1 {
	name: string; // // Mandatory property
	age?: number; // Optional property
}

const user1: User1 = {
	name: "Claire", // Valid, age is optional
};
// Access properties
console.log(user1.name);
console.log(user1.age); // Output: undefined

// const invalidUser: User = { age: 25 };
// ❌ Error: Property 'name' is missing in type

const user2: User1 = {
	name: "Flavian",
	age: 18,
};

// Access properties
console.log(user2.name);
console.log(user2.age);

// INTERFACE WITH READ ONLY PROPERTIES
// Use readonly to make a property immutable after initialization.
interface Mobile {
	model: string;
	price: number;
	readonly specs: string;
}

let a1: Mobile = {
	model: "Iphone 15",
	price: 1500,
	specs: "32gb ram",
};

a1.price = 2000; // Allowed
// a1.specs = "64gb ram"; // ❌ Error: Cannot assign to 'specs' because it is a read-only property

// INDEX SIGNATURES
// Defines dynamic property keys of a certain type
// An index signature in TypeScript allows you to define a structure for objects where the property names (keys) are not known in advance but follow a consistent type.
// This is particularly useful for objects that store dynamic data, like dictionaries or maps.

// syntax
interface InterfaceName {
	// key is a placeholder for the dynamic property name.
	// [key: KeyType]: ValueType;
}

interface TranslationDictionary {
	[key: string]: string; // The key is a string, and the value is also a string
}

const translations: TranslationDictionary = {
	hello: "hola",
	world: "mundo",
	goodbye: "adiós",
};

console.log(translations["hello"]); // "hola"
console.log(translations["world"]); // "mundo"

// const invalidDictionary: TranslationDictionary = {
// 	number: 123, // ❌ Error: Type 'number' is not assignable to type 'string'
// };

// FUNCTION INTERFACES
// You can define methods or callable types in an interface.
// Interface with a method
interface MathOperations {
	add(a: number, b: number): number;
}

const calculator: MathOperations = {
	add(a, b) {
		return a + b;
	},
};

console.log(calculator.add(2, 3)); // 5

// const invalidCalculator: MathOperations = {
// 	add(a, b) {
// 		return a + b + "error"; // ❌ Error: Type 'string' is not assignable to type 'number'
// 	},
// };

// EXTENDING INTERFACES
interface Persons {
	name: string;
}

interface Employee extends Persons {
	employeeId: number;
}
const employee1: Employee = {
	name: "Alice",
	employeeId: 123,
};

// const invalidEmployee: Employee = {
// 	employeeId: 123, // ❌ Error: Property 'name' is missing
// };

// extending multiple interfaces
interface HasWheels {
	numberOfWheels: number;
}

interface HasEngine {
	engineType: string;
}

interface Vehicle extends HasWheels, HasEngine {}

const car: Vehicle = {
	numberOfWheels: 4,
	engineType: "V8",
};

// IMPLEMENTING INTERFACES IN CLASSES
// Classes can implement interfaces to enforce structure.
interface Greeter {
	greet(): string;
}

class Person2 implements Greeter {
	greet() {
		return "Hello!";
	}
}

const student = new Person2();
console.log(student.greet()); // "Hello!"
