function tenis(input) {
  let index = 0;
  let tournamentsCount = Number(input[index]);
  index++;
  let startingPoints = Number(input[index]);
  index++;

  let tempPoints = 0;
  let winCount = 0;

  for (let i = 0; i < tournamentsCount; i++) {
    let res = input[index];
    index++;

    switch (res) {
      case "W":
        tempPoints += 2000;
        winCount++;
        break;
      case "F":
        tempPoints += 1200;
        break;
      case "SF":
        tempPoints += 720;
        break;
    }
  }

  let total = tempPoints + startingPoints;
  let avgPoints = tempPoints / tournamentsCount;
  let win = (winCount / tournamentsCount) * 100;

  console.log(`Final points: ${total}`);
  console.log(`Average points: ${Math.floor(avgPoints)}`);
  console.log(win.toFixed(2) + "%");
}
tenis(["5", "1400", "F", "SF", "W", "W", "SF"]);
