function reportSystem(input) {
  let target = Number(input[0]);
  let index = 1;
  let command = input[index++];

  let creditCard = 0;
  let cash = 0;
  let counter = 0;
  let collectedMoney = 0;
  let cardCounter = 0;
  let cashCounter = 0;

  while (collectedMoney < target) {
    let money = Number(command);
    counter++;

    if (command === "End") {
      console.log("Failed to collect required money for charity.");
      break;
    }

    if (counter % 2 === 0) {
      if (money >= 10) {
        creditCard += money;
        collectedMoney += money;
        cardCounter++;
        console.log("Product sold!");
      } else {
        console.log("Error in transaction!");
      }
    } else if (money <= 100 && money >= 1) {
      cash += money;
      collectedMoney += money;
      cashCounter++;
      console.log("Product sold!");
    } else {
      console.log("Error in transaction!");
    }

    command = input[index++];
  }

  if (collectedMoney >= target) {
    let averageCash = cash / cashCounter;
    let averageCard = creditCard / cardCounter;
    console.log(`Average CS: ${averageCash.toFixed(2)}`);
    console.log(`Average CC: ${averageCard.toFixed(2)}`);
  }
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
