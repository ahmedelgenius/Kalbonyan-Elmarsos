const flight = "lh234";
const ahmed = {
  name: "ahmed hany",
  passport: 54646464,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 54646464) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, ahmed);
// console.log(flight);
// console.log(ahmed);

// Is the same as doing...
// const flightNum = flight;
// const passenger = ahmed;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(ahmed);
checkIn(flight, ahmed);
