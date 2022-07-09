const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "ahmed hany");
lufthansa.book(635, "jo magdy");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'sarah Williams');

// Call method
book.call(eurowings, 23, "sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "mary cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "mary cooper");

// Apply method
const flightData = [583, "george cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
