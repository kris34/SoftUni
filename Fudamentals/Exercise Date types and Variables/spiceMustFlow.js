function solve(startingYield) {
  let totalAmount = 0;
  let daysCounter = 0;

  for (let i = startingYield; i >= 100; i++) {
    totalAmount += startingYield - 26;
    startingYield -= 10;
    daysCounter++;
    if (startingYield < 100) {
      totalAmount -= 26;
      break;
    }
  }
  console.log(daysCounter);
  console.log(totalAmount);
}
solve(450);
