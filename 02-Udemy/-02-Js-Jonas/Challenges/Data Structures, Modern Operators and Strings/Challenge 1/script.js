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

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "thiago", "coutinho", "periscic"];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scord`);
};

printGoals("davies", "muller", "kimmich");
printGoals("davies", "muller");
printGoals(...game.scored);

team1 < team2 && console.log("team 1 is more likely to win");
team1 > team2 && console.log("team 2 is more likely to win");
