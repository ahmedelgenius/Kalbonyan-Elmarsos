console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4838430248342043823408394839483204n); // n = BigInt() = 4838430248342043823408394839483204n
console.log(BigInt(48384302)); //48384302n

// operations
console.log(20000n + 20000n); // 40000n
console.log(440986376946372493726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); //bigint
console.log(20n == "20"); //true

console.log(huge + " is really big");

// divisions
console.log(11n / 3n); // 3n
console.log(10 / 3);
