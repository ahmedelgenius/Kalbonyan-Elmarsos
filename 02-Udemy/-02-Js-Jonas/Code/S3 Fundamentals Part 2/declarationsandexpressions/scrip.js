function calcAge1(birthYear) {
  return 2022 - birthYear;
} // = >> start with 'function'
const age1 = calcAge1(2000);

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
}; // =>> function expression
const age2 = calcAge2(2000);

console.log(age1, age2);
