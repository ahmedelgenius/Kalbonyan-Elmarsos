"use strict";
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never to this
  // this.calcAge = function () {
  //   console.log(2025 - this.birthYear);
  // };
};
const ahmed = new Person("ahmed", 2000);
console.log(ahmed);

//  new {} is created
//  function is called  this = {}
//  {} linked to prototype
//  function automatically return {}

const jo = new Person("jo", 2015);
const mo = new Person("mo", 1990);

console.log(ahmed instanceof Person);

Person.hey = function () {
  console.log("hey");
  console.log(this);
};
Person.hey();

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
ahmed.calcAge();
jo.calcAge();
console.log(ahmed.__proto__);
console.log(ahmed.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(ahmed));
console.log(Person.prototype.isPrototypeOf(jo));
console.log(Person.prototype.isPrototypeOf(Person));
// prototyeOfLinkedObjects
Person.prototype.species = "homo Sapiens";
console.log(ahmed.species, jo.species);
console.log(ahmed.hasOwnProperty("firstName"));
console.log(ahmed.hasOwnProperty("species"));

// ! Prototypal Inheritance on Built-In Objects
console.log(ahmed.__proto__);
// Object.prototype (top of prototype chain)
console.log(ahmed.__proto__.__proto__);
console.log(ahmed.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// ! ES6 Classes
// class expression
// const PersonClass = class {}
// class declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // instance methods
  // methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
  // set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log("hey");
    console.log(this);
  }
}
const ja = new PersonClass("ja ", 1995);
console.log(ja);
ja.calcAge();
console.log(ja.age);
console.log(ja.__proto__ === PersonClass.prototype);
// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
ja.greet();
//  Classes are not hoisted
//  Classes are first class citizens
//  Classes are executed in strict mode
const wr = new PersonClass("Walter White", 1965);
// PersonClass.hey();

// ! Setters and Getters
const account = {
  owner: "ahmed",
  movements: [200, 490, 130, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// ! Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2000;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

// ! Inheritance Between Classes > Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student("Mike", 2020, "CS");
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// ! Inheritance Between "Classes": ES6 Classes

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2025 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log("hey there ");
  }
}
class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    // always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`my name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2025 - this.birthYear
      } years old but as a student I feel more like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}
const martha = new StudentClass("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();

//  ! Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  // fix
  console.log(`my name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();

// ! Another Class Example
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

//  Public fields
//  Private fields
//  Public methods
//  Private methods
// there is also the static version

class Account {
  //  Public fields >>> instances
  locale = navigator.language;

  // Private fields >>> instances
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //  Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  //  Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
// ! chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
