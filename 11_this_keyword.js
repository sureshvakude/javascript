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