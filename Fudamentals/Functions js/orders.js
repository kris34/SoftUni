function solve(order, quntity) {
  let price = 0;

  switch (order) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2;
      break;
  }

  let total = price * quntity;
  console.log(total.toFixed(2));
}
solve("water", 5);
