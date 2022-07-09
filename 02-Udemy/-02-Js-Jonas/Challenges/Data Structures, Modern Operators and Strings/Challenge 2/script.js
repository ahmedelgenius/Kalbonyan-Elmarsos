const game = {
  team1: "bayern munich",
  team2: "borrussia dortmund",
  players: [
    ["neuer", "pavard", "alaba", "coman", "davies"],
    ["burki", "shulz", "akanji", "weigl", "witsel"],
  ],
  score: "4:0",
  scored: ["burki", "shulz", "akanji", "weigl"],
  date: "jun 7th , 2022",
  odds: {
    team1: 1.22,
    x: 3.44,
    team2: 5.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`goal ${i + 1}: ${player}`);
}
const oddsValues = Object.values(game.odds);
let avg = 0;
for (const odd of oddsValues) {
  avg += odd;
  avg /= oddsValues.length;

  console.log(avg);
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
