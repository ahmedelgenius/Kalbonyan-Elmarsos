const mark_mass = 78;
const mark_height = 1.69;
const john_mass = 92;
const john_height = 1.95;

const Bmi_mark = mark_mass / mark_height ** 2;
const Bmi_john = john_mass / (john_height * john_height);
console.log(Bmi_johnm, Bmi_mark);

if (Bmi_mark > Bmi_john) {
  console.log(`Mark's BMI (${Bmi_mark}) is higher than John's (${Bmi_john})!`);
} else {
  console.log(`John's BMI (${Bmi_john}) is higher than Marks's (${Bmi_mark})!`);
}
