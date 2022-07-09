"use strict";
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // es5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("lh123");
createBooking("lh123", 2, 800);
createBooking("lh123", 2);
createBooking("lh123", 5);

createBooking("lh123", undefined, 1000);
