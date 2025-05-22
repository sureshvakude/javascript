// c. async/await
// Definition: Syntactic sugar over promises.
// Example:
async function getData() {
  let res = await fetch("/api");
  let data = await res.json();
  return data;
}