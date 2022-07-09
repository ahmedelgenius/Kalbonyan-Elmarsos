// test one
// const mark_mass = 78;
// const mark_height = 1.69;
// const  john_mass = 92;
// const  john_height = 1.95;

// test two
const mark_mass = 95;
const mark_height = 1.88;
const john_mass = 85;
const john_height = 1.76;

const Bmi_mark = mark_mass / mark_height ** 2;
const Bmi_john = john_mass / (john_height * john_height);
const markHigherBMI = Bmi_mark > Bmi_john;

console.log(Bmi_mark, Bmi_john, markHigherBMI);
