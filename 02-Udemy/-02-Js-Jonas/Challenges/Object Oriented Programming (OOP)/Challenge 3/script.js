const CarClass = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
CarClass.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
CarClass.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
  CarClass.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(CarClass.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};
//'tesla' going at 120 km/h  with a charge of 23%
const tesla = new EV("tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
