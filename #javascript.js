// *** 1. Basic of Javascript // -------------------------------------------------------------------------------------

// a. Variables
// Definition: Used to store data values.
// Use Cases: Storing user input, configuration settings.
// Why Use: To retain and manipulate data.
// Example:
let name = "Alice"; // can be reassigned
const age = 30;     // cannot be reassigned

// b. Data Types
// Definition: JavaScript has primitive and non-primitive data types.
// Use Cases: Represent different kinds of data.
// Example:
let str = "Hello";      // string
let num = 42;           // number
let flag = true;        // boolean
let nothing = null;     // null
let notDefined;         // undefined
let person = { name: "Alice" }; // object

// c. Operators
// Definition: Symbols used to perform operations.
// Example:
let x = 10 + 5; // Arithmetic
let isAdult = age >= 18; // Comparison

// d. Control flow
// Definition: Used to control the order in which statements are executed.
// Example:
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// e. Functions
// Definition: Reusable blocks of code.
// Use Cases: Logic encapsulation, modularity.
// Example:
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Alice"));



// *** 2. Working with data structures // -------------------------------------------------------------------------------------

// a. Arrays
// Definition: Ordered list of elements.
// Example:
let colors = ["red", "green", "blue"];
colors.push("yellow");

// b. Objects
// Definition: Key-value pairs used to represent structured data.
// Example:
let car = {
  brand: "Toyota",
  year: 2021
};
console.log(car.brand);



// *** 3. Intermediate JavaScript // -------------------------------------------------------------------------------------

// a. Scope
// Definition: Defines where variables can be accessed.
// Example:
function test() {
  let local = "I am local";
}

// b. Hoisting
// Definition: Variables/functions are moved to the top of their scope.
// Example:
console.log(a); // undefined
var a = 5;

// c. Closures
// Definition: Functions that remember their lexical environment.
// Example:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
let counter = outer();
console.log(counter());

// d. The `this` Keyword
// Definition: Refers to the object that owns the current code.
// Example:
let person1 = {
  name: "Bob",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};
person.greet();

// e. Prototypes and Inheritance
// Definition: JS uses prototype chain for inheritance.
// Example:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return "Hello " + this.name;
};

// f. Higher-Order Functions
// Definition: Functions that take/return other functions.
// Example:
function greet(name) {
  return () => "Hello " + name;
}

// g. Destructuring & Spread/Rest
// Example:
let [a, b] = [1, 2];
let {x1, y1} = {x: 10, y: 20};



// *** 4. Asynchronous JavaScript // -------------------------------------------------------------------------------------

// a. Callbacks
// Definition: A function passed into another function.
// Example:
function fetchData(callback) {
  setTimeout(() => callback("Done"), 1000);
}

// b. Promises
// Definition: Handle async operations in a cleaner way.
// Example:
let promise = new Promise((resolve) => resolve("Success"));
promise.then(console.log);

// c. async/await
// Definition: Syntactic sugar over promises.
// Example:
async function getData() {
  let res = await fetch("/api");
  let data = await res.json();
  return data;
}

// d. Event Loop & Call Stack
// Definition: Mechanism allowing non-blocking async behavior.
// Example:
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// e. Non-blocking IO
// Definition: JS doesn’t wait for async operations to complete.



// *** 5. Error Handling // -------------------------------------------------------------------------------------

// a. try/catch/finally
// Example:
try {
  throw new Error("Oops");
} catch (e) {
  console.log(e.message);
}

// b. Custom Errors
throw new Error("Custom error");


// *** 6. Date and Time // -------------------------------------------------------------------------------------

let now = new Date();
console.log(now.toISOString());


// *** 7. DOM Manipulation (Browser) // -------------------------------------------------------------------------------------

document.getElementById("btn").addEventListener("click", () => alert("Clicked"));


// *** 8. Browser APIs // -------------------------------------------------------------------------------------

localStorage.setItem("name", "Alice");
fetch("/api").then(res => res.json()).then(console.log);


// *** 9. ES6+ Features // -------------------------------------------------------------------------------------

const sum = (a, b) => a + b;
let [a1, b1] = [1, 2];
import { x } from "./module.js";


// *** 10. Advanced Concepts // -------------------------------------------------------------------------------------

// Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Currying
function add(a) {
  return function(b) {
    return a + b;
  }
}

// Set, Map
let set = new Set([1, 2, 3]);
let map = new Map([["key", "value"]]);


// *** 11. Testing & Debugging // -------------------------------------------------------------------------------------

console.log("Debug info");


// *** 12. Security & Performance // -------------------------------------------------------------------------------------

// Validate inputs to prevent XSS
// Use HTTPS and tokens to prevent CSRF

// *** 13. Tooling and Ecosystem // -------------------------------------------------------------------------------------

// Use npm install to manage packages
// Use Webpack/Vite for bundling
// Use ESLint for linting and Prettier for formatting