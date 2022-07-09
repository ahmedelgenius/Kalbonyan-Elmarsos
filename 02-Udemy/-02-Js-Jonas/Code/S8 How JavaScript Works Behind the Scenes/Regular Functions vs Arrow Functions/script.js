// var firstName = 'matilda'; the global variable

const ahmed = {
  firstName: "ahmed",
  year: 2000,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    // solution one
    // const self = this; // self or that  this here = ahemd object
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution two
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // this here return  the window
  },
};
ahmed.greet();
ahmed.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
