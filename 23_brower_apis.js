localStorage.setItem("name", "Alice");
fetch("/api").then(res => res.json()).then(console.log);