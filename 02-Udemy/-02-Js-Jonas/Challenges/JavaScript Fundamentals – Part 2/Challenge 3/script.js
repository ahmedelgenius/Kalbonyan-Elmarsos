const mark = {
  fullName: "mark miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(this.bmi);
console.log(this.mass);
console.log(this.height);
const john = {
  fullName: "john smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s bmi (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s bmi (${mark.bmi})`
  );
}
