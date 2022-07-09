const friend1 = "ahmed";
const friend2 = "mohamed";
const friend3 = "yousef";
// array
const friends = ["ahmed", "mohamed", "yousef"];
console.log(friends);

const y = new Array(2000, 1990, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "mo";
console.log(friends);
// friends = ['mazn', 'ali']

const firstName = "ahmed";
const ahmed = [firstName, "hany", 2022 - 2000, "programming", friends];
console.log(ahmed);
console.log(ahmed.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
