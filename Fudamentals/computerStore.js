function solve(input) {
  let index = 0;
  let command = input[index++];
  let totalPrice = 0;
  let tax = 0;
  let totalPriceNotax = 0;

  while (command !== "special" || command !== "regular") {
    if (command === "special" || command === "regular") {
      break;
    }
    let prices = Number(command);
    if (prices <= 0) {
      console.log(`Invalid price!`);
      command = input[index++];
      continue;
    }

    let tempTax = prices * 0.2;
    tax += tempTax;
    totalPrice += prices + tempTax;
    totalPriceNotax += prices;

    command = input[index++];
  }
  if (command === "special") {
    totalPrice = totalPrice * 0.9;
  }
  if (totalPrice == 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPriceNotax.toFixed(2)}$
Taxes: ${tax.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$
`);
  }
}
solve(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
