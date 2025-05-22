// f. Higher-Order Functions
// Definition: Functions that take/return other functions.
// Example:
function greet(name) {
  return () => "Hello " + name;
}