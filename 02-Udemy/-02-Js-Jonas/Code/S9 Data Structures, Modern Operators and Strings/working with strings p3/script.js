console.log("a+very+nice".split("+"));
console.log("ahmed hany".split(" "));

const [firstName, lastName] = "ahmed hany".split(" ");

const newName = ["mr", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("ahmed hany");

// padding
const message = "go to gate 22";
console.log(message.padStart(27, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-3);

  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(3499329847));
console.log(maskCreditCard(9850234845840));

const message2 = " bad wather ... all departues delayes";
console.log(message2.repeat(4));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${"#".repeat(n)} `);
};

planesInLine(3);
planesInLine(7);
planesInLine(2);
