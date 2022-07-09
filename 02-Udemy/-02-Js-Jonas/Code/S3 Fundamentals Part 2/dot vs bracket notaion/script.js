const ahmed = {
  firstName: "ahmed",
  lastName: "hany",
  age: 2022 - 2000,
  job: "progarmmer",
  friends: ["ahmed", "yousef", "ali"],
};
console.log(ahmed);

console.log(ahmed.lastName);
console.log(ahmed["lastName"]);

const nameKey = "Name";
console.log(ahmed["first" + nameKey]);
console.log(ahmed["last" + nameKey]);

// console.log(ahmed.'last' + nameKey)

const interestedIn = prompt(
  "what do you want to know about ahmed? Choose between firstName, lastName, age, job, and friends"
);

if (ahmed[interestedIn]) {
  console.log(ahmed[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

ahmed.location = "Portugal";
ahmed["twitter"] = "@ahmedelgenius";
console.log(ahmed);

// challenge
// "ahmed has 3 friends, and his best friend is called ahmed"
console.log(
  `${ahmed.firstName} has ${ahmed.friends.length} friends, and his best friend is called ${ahmed.friends[0]}`
);
