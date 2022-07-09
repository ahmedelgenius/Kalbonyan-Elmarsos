const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator >  snowball
// const balance = movements.reduce(function (accu, cur, i, arr) {
//   console.log(`iteration ${i}: ${accu}`);
//   return accu + cur;
// }, 0);
const balance = movements.reduce((accu, cur) => accu + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// max value
const max = movements.reduce((accu, mov) => {
  if (accu > mov) return accu;
  else return mov;
}, movements[0]);
console.log(max);
