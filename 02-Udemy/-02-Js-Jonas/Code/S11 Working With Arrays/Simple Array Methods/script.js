let arr = ["a", "b", "c", "d", "e"];

// slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice method
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // delete count
console.log(arr);

// reverse method
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// concat method
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join method
console.log(letters.join(" - ")); // a - b - c
