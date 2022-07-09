"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = " Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let score = 20;
let highscore = 0;
let numberRandom = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);
  console.log(typeof guessValue);

  if (!guessValue) {
    displayMessage("no number");
    // document.querySelector(".message").textContent = "no number";
  } else if (guessValue === numberRandom) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = numberRandom;
    // document.querySelector(".message").textContent = " Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessValue !== numberRandom) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      displayMessage(guessValue > numberRandom ? " Too high" : " Too low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" you lost the game");
      // document.querySelector(".message").textContent = " you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }

  // } else if (guessValue > numberRandom) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = " you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guessValue < numberRandom) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " Too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  numberRandom = Math.trunc(Math.random() * 20) + 1;
  displayMessage(" Start guessing...");
  // document.querySelector(".message").textContent = " Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
