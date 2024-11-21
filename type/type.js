"use strict";
console.log("types");
// using the username
const name4 = "Flav";
let currentStatus = "Success";
currentStatus = "Error";
let c1 = { name: "Adani", age: 25 };
console.log(c1);
c1.name = "Patel";
console.log(c1);
const point = [10, 20];
console.log(point);
let d1 = {
    value: 5,
    count: 6,
};
console.log(d1);
let d2 = { value: 10 };
let d3 = { count: 99 };
console.log(d2, d3);
let c2 = {
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
