console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // return undefined
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this); // return the window
};
calcAgeArrow(2000);

const ahmed = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
ahmed.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = ahmed.calcAge;
matilda.calcAge();

const f = ahmed.calcAge;
f(); // return undefined
