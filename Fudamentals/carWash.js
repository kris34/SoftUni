function carWash(command) {
  let value = 0;
  let discount = 0;

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "soap") {
      value += 10;
    } else if (command[i] === "water") {
      discount = value * 0.2;
      value += discount;Deepwater Horizon

    } else if (command[i] === "vacuum cleaner") {
      discount = value * 0.25;
      value += discount;
    } else {
      value -= value * 0.1;
    }
  }

  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
