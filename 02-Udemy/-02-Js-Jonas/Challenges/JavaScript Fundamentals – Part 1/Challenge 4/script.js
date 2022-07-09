let bill = 430;
// Ternary
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill} and  the tip was ${tip} and the total value ${
    bill + tip
  }`
);
