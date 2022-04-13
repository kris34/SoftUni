function counterStrike(array) {
  let energy = Number(array[0]);
  let index = 1;
  let command = array[index++];
  let battleCounter = 0;
  let isOver = false;

  while (command !== "End of battle") {
    let distance = Number(command);

    if (energy - distance >= 0) {
      energy -= distance;
      battleCounter++;
      if (battleCounter % 3 === 0) {
        energy += battleCounter;
      }
    } else {
      isOver = true;
      break;
    }
    command = array[index++];
  }

  if (isOver) {
    console.log(
      `Not enough energy! Game ends with ${battleCounter} won battles and ${energy} energy`
    );
  }
  if (command === "End of battle") {
    console.log(`Won battles: ${battleCounter}. Energy left: ${energy}`);
  }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
