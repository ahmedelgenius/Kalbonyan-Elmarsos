"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = " Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let score = 20;
const numberRandom = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = numberRandom;
document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);
  console.log(typeof guessValue);

  if (!guessValue) {
    document.querySelector(".message").textContent = "no number";
  } else if (guessValue === numberRandom) {
    document.querySelector(".message").textContent = " Correct Number";
  } else if (guessValue > numberRandom) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessValue < numberRandom) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
