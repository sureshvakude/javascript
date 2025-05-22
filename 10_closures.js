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