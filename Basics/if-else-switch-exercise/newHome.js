function newHouse(input) {
  let type = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);

  let sum = 0;

  switch (type) {
    case "Roses":
      sum = quantity * 5;
      if (quantity > 80) {
        sum = sum * 0.9;
      }
      break;
    case "Dahlias":
      sum = quantity * 3.8;
      if (quantity > 90) {
        sum = sum * 0.85;
      }
      break;
    case "Tulips":
      sum = quantity * 2.8;
      if (quantity > 80) {
        sum = sum * 0.85;
      }
      break;
    case "Narcissus":
      sum = quantity * 3;
      if (quantity < 120) {
        sum = sum * 1.15;
      }
      break;
    case "Gladiolus":
      sum = quantity * 2.5;
      if (quantity < 80) {
        sum = sum * 1.2;
      }
      break;
  }
  let diff = Math.abs(sum - budget);

  if (budget >= sum) {
    console.log(
      `Hey, you have a great garden with ${quantity} ${type} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}
newHouse(["Narcissus", "119", "360"]);
