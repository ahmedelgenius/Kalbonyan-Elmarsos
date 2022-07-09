const rest = new Map();
rest.set("name", "classico");
rest.set(1, "firenz");
console.log(rest.set(2, "lisbon, portugal"));

rest
  .set("categ", ["watier", "chef"])
  .set("open", 10)
  .set("close", 22)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(rest.get("name"));
console.log(rest.get("true"));

const time = 20;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categ"));
rest.delete(1);

// rest.clear

const arr = [1, 2];
rest.set(arr, "test");
rest.set(document.querySelector("h1", "heading"));
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
