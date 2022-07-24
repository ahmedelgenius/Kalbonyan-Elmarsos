// Understanding "let" and "const"
var myName = "ahmed";
console.log(myName);
myName = "mohamed";
console.log(myName);

//  Arrow Functions
const multiply = (number) => number * 2;
console.log(multiply(2));

// Understanding Classes
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = "max";
    this.gender = "male";
  }
  printName() {
    console.log(this.name);
  }
}
// const person = new Person();
person.printGender();
person.printName();

// The Spread & Rest Operator

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));

// Destructuring

// const numbers = ([1, 2, 3][(num1, num3)] = numbers);
// console.log(num1, num3);

//  Reference and Primitive Types Refresher

const person = {
  name: "max",
};
const secondPerson = {
  ...person,
};

person.name = "manu";
console.log(secondPerson);
// Refreshing Array Functions

const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);
