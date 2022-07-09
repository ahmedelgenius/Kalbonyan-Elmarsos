const airline = " TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCaseCase());

const passenger = "aHmEd";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);
// trim() >>> remove the witespace
//comparing emails
const email = "hello@ahmed.io";
const loginEmail = "Hello@ahmed.Io\n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "200,00E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");

console.log(priceUS);

const announcoement = "boarding door 23 ,boarding door 23";
console.log(announcoement.replace("door", "gate"));
console.log(announcoement.replace(/door/g, "gate"));

// booleans
const plane = "Airbus A23neo";
console.log(plane.includes("A22"));
console.log(plane.includes("boeing"));
console.log(plane.startsWith("arib"));

if (plane.startsWith("airb") && plane.endsWith("neo")) {
  console.log("part of thee new aribus family");
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife" || baggage.includes("gun"))) {
    console.log("you are not allowed on board");
  } else {
    console.log("welcome");
  }
};
checkBaggage("pocket knife");
checkBaggage("socks and camera");
checkBaggage("got some snacks");
