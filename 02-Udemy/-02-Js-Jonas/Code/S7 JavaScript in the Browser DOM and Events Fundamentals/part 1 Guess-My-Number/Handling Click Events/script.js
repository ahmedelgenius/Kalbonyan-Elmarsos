"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = " Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);

  console.log(typeof guessValue);

  if (guessValue) {
    document.querySelector(".message").textContent = "no number";
  }
});
