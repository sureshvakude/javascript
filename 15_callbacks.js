// a. Callbacks
// Definition: A function passed into another function.
// Example:
function fetchData(callback) {
  setTimeout(() => callback("Done"), 1000);
}