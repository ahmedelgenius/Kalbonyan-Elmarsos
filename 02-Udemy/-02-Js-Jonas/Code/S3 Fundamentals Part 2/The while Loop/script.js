// for loop vs while loop
// for loop
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} `);
}
// while loop
let i = 1;
while (i <= 10) {
  // console.log(`while: Lifting weights repetition ${i} `);
  rep++;
}
// the  Math.random() = any number
// The Math.trunc() function returns the integer part of a number by removing any fractional digits.
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
