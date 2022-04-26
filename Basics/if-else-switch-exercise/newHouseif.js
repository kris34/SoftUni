function newHouse(input) {
  let type = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;

  if (type === "Roses") {
    price = quantity * 5;
    if (quantity > 80) {
      price = price * 0.9;
    }
  } else if (type === "Dahlias") {
    price = quantity * 3.8;
    if (quantity > 90) {
      price = price * 0.85;
    }
  } else if (type === "Tulips") {
    price = quantity * 2.8;
    if (quantity > 80) {
      price = price * 0.85;
    }
  } else if (type === "Narcissus") {
    price = quantity * 3 * 1.15;
    if (quantity >= 120) {
      price = quantity * 3;
    }
  } else if (type === "Gladiolus") {
    price = quantity * 2.5 * 1.2;
    if (quantity >= 80) {
      price = quantity * 2.5;
    }
  }

  let diff = Math.abs(budget - price);

  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${quantity} ${type} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else if (budget < price) {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

newHouse(["Narcissus", "119", "360"]);
