// e. Prototypes and Inheritance
// Definition: JS uses prototype chain for inheritance.
// Example:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return "Hello " + this.name;
};