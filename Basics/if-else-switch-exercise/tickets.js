function tickets(input) {
  let budget = Number(input[0]);
  let category = input[1];
  let count = input[2];

  let price = 0;
  let priceTransport = 0;

  if (category === "VIP") {
    price = 499.99 * count;
  } else if (category === "Normal") {
    price = 249.99 * count;
  }

  if (count >= 1 && count < 5) {
    priceTransport = budget * 0.75;
  } else if (count >= 5 && count < 10) {
    priceTransport = budget * 0.6;
  } else if (count >= 10 && count < 25) {
    priceTransport = budget * 0.5;
  } else if (count >= 25 && count < 50) {
    priceTransport = budget * 0.4;
  } else if (count >= 50) {
    priceTransport = budget * 0.25;
  }

  let totalPrice = priceTransport + price;
  let moneyLeft = Math.abs(budget - priceTransport - price);

  if (budget >= totalPrice) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.
`);
  }
}
