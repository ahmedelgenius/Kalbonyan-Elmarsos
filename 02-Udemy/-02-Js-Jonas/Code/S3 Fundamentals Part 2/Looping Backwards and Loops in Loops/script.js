const ahmed = [
  "ahmed",
  "hany",
  2022 - 2000,
  "programmer",
  ["mohamed", "yousef", "ali"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0
// array is reverse
for (let i = ahmed.length - 1; i >= 0; i--) {
  console.log(i, ahmed[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(` Starting exercise ${exercise}`);

  for (let i = 1; i < 6; i++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${i}`);
  }
}
