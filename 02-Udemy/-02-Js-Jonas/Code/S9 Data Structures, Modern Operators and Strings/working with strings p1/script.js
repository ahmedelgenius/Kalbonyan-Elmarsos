const airline = " TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.Log(plane[1]);
console.log(plane[2]);
console.log("B737"[01]);
console.log(airline.length);
console.log("B737".length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf("")));
console.log(airline.slice(airline.lastIndexOf("") + 1));
Console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s == "B" || s === "E")
    console.log(`You got
    the middle seat`);
  else console.log("You got lucky");
};
checkMiddleSeat("118");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
I;

console.log(new String("ahmed"));
console.log(typeof new String("ahmed")); // type = object
console.log(typeof new String("ahmed").slice(1)); // type = string
