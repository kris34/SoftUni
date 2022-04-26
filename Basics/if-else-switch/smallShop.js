function shop(input) {
  let product = input[0];
  let city = input[1];
  let quantity = Number(input[2]);
  let finalPrice = 0;

  if (city === "Sofia") {
    switch (product) {
      case "coffee":
        finalPrice = 0.5 * quantity;
        break;
      case "water":
        finalPrice = 0.8 * quantity;
        break;
      case "beer":
        finalPrice = 1.2 * quantity;
        break;
      case "sweets":
        finalPrice = 1.45 * quantity;
        break;
      case "peanuts":
        finalPrice = 1.6 * quantity;
        break;
    }
  } else if (city === "Plovdiv") {
    switch (product) {
      case "coffee":
        finalPrice = 0.4 * quantity;
        break;
      case "water":
        finalPrice = 0.7 * quantity;
        break;
      case "beer":
        finalPrice = 1.15 * quantity;
        break;
      case "sweets":
        finalPrice = 1.3 * quantity;
        break;
      case "peanuts":
        finalPrice = 1.5 * quantity;
        break;
    }
  } else if (city === "Varna") {
    switch (product) {
      case "coffee":
        finalPrice = 0.45 * quantity;
        break;
      case "water":
        finalPrice = 0.7 * quantity;
        break;
      case "beer":
        finalPrice = 1.1 * quantity;
        break;
      case "sweets":
        finalPrice = 1.35 * quantity;
        break;
      case "peanuts":
        finalPrice = 1.55 * quantity;
        break;
    }
  }
  console.log(finalPrice);
}
shop(["peanuts", "Plovdiv", "1"]);
