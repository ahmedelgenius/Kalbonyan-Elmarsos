// this is Return on object  here
// this = ahmed as object

const ahmed = {
  firstName: "ahmed",
  lastName: "hany",
  birthYear: 2000,
  job: "programmer",
  friends: ["mohamed", "yousef", "ali"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      ahmed.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(ahmed.calcAge());

console.log(ahmed.age);
console.log(ahmed.age);
console.log(ahmed.age);

// Challenge
// "ahmed is a 20-year old programmer, and he has a driver's license"
console.log(ahmed.getSummary());
