const ahmed = [
  "ahmed",
  "hany",
  2022 - 2000,
  "programmer",
  ["mohamed", "yousef", "ali"],
  true,
];
const types = [];

// console.log(ahmed[0])
// console.log(ahmed[1])
// ...
// console.log(ahmed[4])
// ahmed[5] does NOT exist

for (let i = 0; i < ahmed.length; i++) {
  // reading from ahmed array
  console.log(ahmed[i], typeof ahmed[i]);

  // filling types array
  types.push(typeof ahmed[i]);
  // types[i] = typeof ahmed[i];
}

console.log(types);

const years = [2000, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break

for (let i = 0; i < ahmed.length; i++) {
  if (typeof ahmed[i] !== "string") continue;

  console.log(ahmed[i], typeof ahmed[i]);
}

for (let i = 0; i < ahmed.length; i++) {
  if (typeof ahmed[i] === "number") break;

  console.log(ahmed[i], typeof ahmed[i]);
}
