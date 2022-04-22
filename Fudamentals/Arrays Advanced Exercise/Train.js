function train(array) {
  let wagons = array.shift(" ").split(" ");

  for (let i = 0; i < wagons.length; i++) {
    wagons[i] = Number(wagons[i]);
  }

  let maxCapacity = Number(array.shift(" "));

  for (let i = 0; i < array.length; i++) {
    let commands = array[i].split(" ");

    if (commands[0] == "Add") {
      wagons.push(Number(commands[1]));
    }

    for (let j = 0; j < wagons.length; j++) {
      let passenger = Number(commands);
      if (wagons[j] + passenger <= maxCapacity) {
        wagons[j] += passenger;
        break;
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
