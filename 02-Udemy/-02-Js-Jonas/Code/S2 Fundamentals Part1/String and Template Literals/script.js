const firstName = "ahmed";
const job = "programmer";
const birthYear = 2000;
const year = 2022;

const ahmed =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(ahmed);

const ahmedNow = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(ahmedNow);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");
// >>> \n\ >> new line
console.log(`String
multiple
lines`);
