console.log("classes");

// Classes are a foundational concept in object-oriented programming (OOP)
// A class is a bluprint for creating objects with shared properties and behaviours
// Classes make our code more organised, re-usable and scalable

// WHY USE CLASSES
// Encapsulation - Bundle data(properties) & behaviours(methods into one unit)
// Reusability - Creating multiple objects from the same class
// Inheritance - Classes inherit from other classes, promoting code re-use
// Abstraction - Hide unnecessary implementation details
// Polymorphism - Define methods indifferent way for different classes, improving flexibility

// BASIC SYNTAX
// Typescript builds on JavaScript classes by adding type-checking and other powerful features
class Theperson {
	name: string;
	age: number;

	// Constructor to initialize properties
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greetings(): void {
		console.log(
			`Hi my name is ${this.name} and I am ${this.age}  years old`
		);
	}
}

// Create an object (instance) of the class
const Person20 = new Theperson("Frank", 18);
Person20.greetings();

// INHERITANCE
// Classes can extend other classes to inherit their properties and methods
// Subclasses can add or override functionality while still leveraging the parent class implementation
class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	speak(): void {
		console.log(`${this.name} makes a sound`);
	}
}

class Dog extends Animal {
	speak(): void {
		console.log(`${this.name} barks.`);
	}
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks

// ACCESS MODIFIERS IN TYPESCRIPT
// They determine the visibility & accessibility of properties & methods within a class

// 1. Public (default)
// Properties & methods marked as public (or left without a modifier) are accessible from anywhere

class PublicExample {
	public name: string;
	nickName: string;
	constructor(name: string, nickName: string) {
		this.name = name;
		this.nickName = nickName;
	}
	public greetingss(): void {
		console.log(`Hello ${this.name}`);
	}
}

const friend1 = new PublicExample("Flavian", "Kibz");
console.log(friend1.name); // Flavian
console.log(friend1.nickName); // Kibz
friend1.greetingss(); // Hello Flavian
// The name, nickName and greet() are accessible both inside and outside the class.

// 2. Private
// properties & methods marked as private are accessible only within the class where they are defined
// They can't be accessed outside the class or by derived classes (subclasses)

class PrivateExample {
	private secret: string;
	constructor(secret: string) {
		this.secret = secret;
	}
	public revealSecret(): void {
		console.log(`The secret is: ${this.secret}`);
	}
}

const obj33 = new PrivateExample("topSecret");
// console.log(obj33.secret); // Property 'secret is private
obj33.revealSecret(); // The secret is: topSecret
// You can't directly access secret from outside the class, but you can use methods like revealSecret to interact with it indirectly

// 3. Protected
// properties and methods marked as protected are accessible within the class and in its subclasses but not from outside the class

class ProtectedExample {
	protected data: string;
	constructor(data: string) {
		this.data = data;
	}
	protected showData(): void {
		console.log(`Data: ${this.data}`);
	}
}

class DerivedExample extends ProtectedExample {
	public display(): string {
		this.showData(); // Accessing the protected method
		return "hello";
	}
}

let obj4 = new DerivedExample("sensitive Data");
// console.log(obj4.data); // Property 'data' is protected
obj4.display(); // Data: sensitive Data
console.log(obj4.display()); // Accesible from anywhere

// The data property is accessible inside DerivedExample but not outside it

// STATIC MEMBERS
// Properties & methods that belong to the class itself rather than an instance of the class
// They can only be accessed using the class name not an instance of the class

class Counter {
	static count: number = 0;
	isCounting: boolean;
	constructor(bol: boolean) {
		this.isCounting = bol;
	}
	static increment(): void {
		console.log(++this.count);
	}
}

let voters = new Counter(true);
// console.log(voters.count); // can't be accessed through an instance
// console.log(voters.increment); // can't be accessed through an instance
console.log(voters.isCounting); // true
console.log(Counter.count); // 0
Counter.increment(); // 1

// GETTERS & SETTERS
// Special methods in a class that allow control over access to an object properties
// They provide a way to add logic when retrieving or updating a property, rather than directly accessing or assigning its value.

class Persona {
	private _name: string;

	constructor(name: string) {
		this._name = name;
	}

	// Getter
	get name(): string {
		return this._name;
	}

	// Setter
	set name(value: string) {
		if (value.length < 3) {
			throw new Error(
				"Name must be at least 3 characters long."
			);
		}
		this._name = value;
	}
}

const person78 = new Persona("Alice");
console.log(person78.name); // Getter is called, Output: Alice

person78.name = "Bob"; // Setter is called
console.log(person78.name); // Output: Bob
// person78.name = "Al"; // Error: Name must be at least 3 characters long.

// The private property is often prefixed with _ (e.g., _name) to distinguish it from the getter/setter.
// This is not mandatory but is a common practice.
// getter method Acts like a property when accessed, Use it to return the value of a property.
// setter method Acts like a property when assigning a value, Use it to validate or modify the value before setting it.

// INTERFACES IN CLASSES
// An interface is a structure that defines the shape of an object
// When used in classes, they specify what properties & methods a class must have
// If a class implements an interface, it must fulfill all the requirements defined by the interface

interface MyAnimal {
	name: string;
	makeSound(): void;
}

class Cat implements MyAnimal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	makeSound(): void {
		console.log("Meow! Meow!");
	}
}

const cat1 = new Cat("Atara");
cat1.makeSound(); // Meow! Meow!
