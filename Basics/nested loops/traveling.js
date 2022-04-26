function traveling(input) {
  let index = 0;
  let destination = input[index++];
  let minBudget = Number(input[index++]);
  let tempMoney = Number(input[index++]);

  while (destination !== "End") {
    while (tempMoney < minBudget) {
      tempMoney += Number(input[index]);
      index++;

      if (tempMoney >= minBudget) {
        console.log(`Going to ${destination}! `);
        break;
      }
    }

    destination = input[index++];
    minBudget = Number(input[index++]);
    tempMoney = 0;
  }
}

traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
