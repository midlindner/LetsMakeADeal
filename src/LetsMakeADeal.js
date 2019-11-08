let wins = 0;
let losses = 0;
const iterations = 100000000;

const getRandomInt = () => Math.floor(Math.random() * 3) + 1;

for (let i = 0; i < iterations; i++) {
  const winningDoor = getRandomInt();
  const selection = getRandomInt();
  let losingDoor = 0;
  let newSelection = 0;
// Find the first losing door that wasn't selected
  for (let x = 1; x <= 3 && !losingDoor; x++) {
    if (x !== winningDoor && x !== selection) {
      losingDoor = x;
    }
  }
// Select the door not previously selected and not the losing door
  for (let x = 1; x <= 3; x++) {
    if (x !== selection && x !== losingDoor) {
      newSelection = x;
    }
  }
    if (newSelection === winningDoor) {
      wins++;
    } else {
      losses++;
    }
}

console.log(`Wins: ${wins}  Winning Percentage: ${Math.round(wins / iterations * 10000) / 100}%`);
console.log(`Losses: ${losses}  Losing Percentage: ${Math.round(losses / iterations * 10000) / 100}%`);
