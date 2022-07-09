// rrimitive types
let lastName = "hany";
let oldLastName = lastName;
lastName = "yousef";
console.log(lastName, oldLastName);

// reference types
const ahmed = {
  firstName: "ahmed",
  lastName: "hany",
  age: 20,
};
const marriedahmed = ahmed;
marriedahmed.lastName = "yousef";
console.log("Before marriage:", ahmed);
console.log("After marriage: ", marriedahmed);
// marriedahmed = {};

// copying objects
const ahmed2 = {
  firstName: "ahmed",
  lastName: "hany",
  age: 20,
  family: ["mohamed", "mahmoud"],
};

const ahmedCopy = Object.assign({}, ahmed2); // change here and not change in object officail
ahmedCopy.lastName = "yousef";

ahmedCopy.family.push("yousef");
ahmedCopy.family.push("mostafa");

console.log("Before marriage:", ahmed2);
console.log("After marriage: ", ahmedCopy);
