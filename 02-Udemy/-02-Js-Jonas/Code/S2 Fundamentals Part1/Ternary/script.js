const age = 25;
// age >= 18 ? console.log('Ilike to drink wine ') : console.log('Ilike to drink water ');

const drink = age >= 18 ? "wine " : "water ";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine ";
} else {
  drink2 = "water ";
}
console.log(drink2);

console.log(`Ilike to drink ${age >= 18 ? "wine " : "water "}`);
