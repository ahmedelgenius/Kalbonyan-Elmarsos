const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("ahmed");
greeterHey("marwan");

greet("Hello")("ahmed");

// challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`); // arrow function

greetArr("Hi")("ahmed");
