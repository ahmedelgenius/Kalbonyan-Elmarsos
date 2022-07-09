const friends = ["ahmed", "yousef", "mohamed"];

// Add elements
const newLength = friends.push("mo");
console.log(friends);
console.log(newLength);

friends.unshift("ali");
console.log(friends);

// remove elements from array
friends.pop(); // remove from last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove from first
console.log(friends);

console.log(friends.indexOf("yousef"));
console.log(friends.indexOf("jo"));

friends.push(23);
console.log(friends.includes("yousef"));
console.log(friends.includes("jo"));
console.log(friends.includes(23));

if (friends.includes("yousef")) {
  console.log("You have a friend called yousef");
}
