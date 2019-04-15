let wins = 0;
let losses = 0;
const iterations = 1000000;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 0; i < iterations; i++) {
  const winningDoor = getRandomInt(1, 3);
  const selection = getRandomInt(1, 3);
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

console.log(`Wins = ${Math.round(wins / iterations * 10000) / 100}%`);
console.log(`Losses = ${Math.round(losses / iterations * 10000) / 100}%`);