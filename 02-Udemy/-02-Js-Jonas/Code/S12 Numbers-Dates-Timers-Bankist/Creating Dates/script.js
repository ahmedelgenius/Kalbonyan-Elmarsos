const now = new Date();
console.log(now);

console.log(new Date("Jan 04 2022 15:05:30"));
console.log(new Date("Feb 22, 2010"));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2050, 5, 6, 8, 20, 5));
console.log(new Date(2050, 5, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// working with dates
const future = new Date(2037, 10, 6, 8, 20);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(3145756980000));

console.log(Date.now());

future.setFullYear(2050);
console.log(future);
