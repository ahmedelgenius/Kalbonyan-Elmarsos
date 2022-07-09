const age = 20;

// const isoldEnough = age >= 20;
// if (isoldEnough) {
// console.log('Sarah can start driving license ');

if (age >= 20) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 20 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 21;
} else {
  century = 22;
}
console.log(century);
