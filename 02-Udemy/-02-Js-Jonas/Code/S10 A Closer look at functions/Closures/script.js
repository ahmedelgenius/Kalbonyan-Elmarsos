const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++; // this is golbel here
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
