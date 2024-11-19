"use strict";
console.log("interfaces");
const user = {
    name: "Frank",
    age: 20,
};
// Access properties
console.log(user.name);
console.log(user.age);
// reassign properties
user.age = 18;
console.log(user.age);
const user1 = {
    name: "Claire", // Valid, age is optional
};
// Access properties
console.log(user1.name);
console.log(user1.age); // Output: undefined
// const invalidUser: User = { age: 25 };
// ❌ Error: Property 'name' is missing in type
const user2 = {
    name: "Flavian",
    age: 18,
};
// Access properties
console.log(user2.name);
console.log(user2.age);
let a1 = {
    model: "Iphone 15",
    price: 1500,
    specs: "32gb ram",
};
a1.price = 2000; // Allowed
const translations = {
    hello: "hola",
    world: "mundo",
    goodbye: "adiós",
};
console.log(translations["hello"]); // "hola"
console.log(translations["world"]); // "mundo"
const calculator = {
    add(a, b) {
        return a + b;
    },
};
console.log(calculator.add(2, 3)); // 5
const employee1 = {
    name: "Alice",
    employeeId: 123,
};
const car = {
    numberOfWheels: 4,
    engineType: "V8",
};
class Person2 {
    greet() {
        return "Hello!";
    }
}
const student = new Person2();
console.log(student.greet()); // "Hello!"
