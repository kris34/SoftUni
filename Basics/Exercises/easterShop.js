function easterShop(input) {
  let eggs = Number(input[0]);
  let index = 1;
  let command = input[index++];

  let totalEggs = 0;

  while (command !== "Close") {
    let action = command;
    let newEggs = Number(input[index++]);

    if (newEggs > eggs && action !== "Fill") {
      console.log("Not enough eggs in store!");
      console.log(`You can buy only ${eggs}.`);
      break;
    }

    if (action === "Buy") {
      eggs -= newEggs;
      totalEggs += newEggs;
    } else if (action === "Fill") {
      eggs += newEggs;
    }

    command = input[index++];
  }

  if (command === "Close") {
    console.log("Store is closed!");
    console.log(`${totalEggs} eggs sold.`);
  }
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
