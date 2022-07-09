console.log(23 === 23.0);

// Base  >> 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333
// Binary base >> 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// conversion
console.log(Number("21"));
console.log(+"21");

// parsing
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e21", 10));

console.log(Number.parseInt("  2.5rem  "));
console.log(Number.parseFloat("  2.5rem  "));

// console.log(parseFloat('  2.5rem  ')); // 2.5

// check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(21 / 0));
// checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(21 / 0));
console.log(Number.isInteger(21));
console.log(Number.isInteger(21.0));
console.log(Number.isInteger(21 / 0));
