function easterBattle(input) {
  let playerOneEggs = Number(input[0]);
  let playerTwoEggs = Number(input[1]);

  let index = 2;
  let command = input[index++];

  while (command !== "End of battle") {
    let winner = command;

    if (winner === "one") {
      playerTwoEggs -= 1;
    } else if (winner === "two") {
      playerOneEggs -= 1;
    }

    if (playerOneEggs === 0) {
      console.log(
        `Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`
      );
      break;
    } else if (playerTwoEggs === 0) {
      console.log(
        `Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`
      );
      break;
    }

    command = input[index++];
  }

  if (command === "End of battle") {
    console.log(`Player one has ${playerOneEggs} eggs left.`);
    console.log(`Player two has ${playerTwoEggs} eggs left.`);
  }
}
easterBattle(["6", "3", "one", "two", "two", "one", "one"]);
