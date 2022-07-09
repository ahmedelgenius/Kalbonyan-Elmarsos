"use strict";

const socreZero = document.querySelector("#score--0");
const socreOne = document.getElementById("score--1");
const diceELement = document.querySelector(".dice");
const currentZero = document.getElementById("current--0");
const currentOne = document.getElementById("current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  socreZero.textContent = 0;
  socreOne.textContent = 0;
  currentZero.textContent = 0;
  currentOne.textContent = 0;

  diceELement.classList.add("hidden");
  playerZero.classList.remove("player--winner");
  playerOne.classList.remove("player--winner");
  playerZero.classList.add("player--active");
  playerOne.classList.remove("player--active");
};
init();
// rolling dice functionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    // step one genrating a randem dice roll
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRandom);

    // step two display dice

    diceELement.classList.remove("hidden");
    diceELement.src = `dice-${diceRandom}.png`;

    // step three check for rolled  if true , switch to next player
    if (diceRandom !== 1) {
      // add dice to current score
      currentScore += diceRandom;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // currentZero.textContent = currentScore;
    } else {
      // switch to next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // playerZero.classList.toggle("player--active");
      // playerOne.classList.toggle("player--active");
      switchPlayer();
    }
  }
});
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
};
btnHold.addEventListener("click", function () {
  if (playing) {
    //  add current score to active player score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceELement.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
