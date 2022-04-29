function bakery(input) {
  let cake = input[0];
  let cakeCount = Number(input[1]);
  let day = Number(input[2]);

  let price = 0;

  switch (cake) {
    case "Cake":
      if (day <= 15 || day > 22) {
        price = cakeCount * 24;
        if (price >= 100 && price <= 200 && day <= 22) {
          price = price * 0.85;
        } else if (price > 200 && day <= 22) {
          price = price * 0.75;
        }
      }
      if ((day > 15 && day <= 22) || day > 22) {
        price = cakeCount * 28.7;
        if (price >= 100 && price <= 200 && day <= 22) {
          price = price * 0.85;
        } else if (price > 200 && day <= 22) {
          price = price * 0.75;
        }
      }
      break;
    case "Souffle":
      if (day <= 15 || day > 22) {
        price = cakeCount * 6.66;
        if (price >= 100 && price <= 200 && day <= 22) {
          price = price * 0.85;
        } else if (price > 200 && day <= 22) {
          price = price * 0.75;
        }
      }
      if ((day > 15 && day <= 22) || day > 22) {
        price = cakeCount * 9.8;
        if (price >= 100 && price <= 200 && day <= 22) {
          price = price * 0.85;
        } else if (price > 200 && day <= 22) {
          price = price * 0.75;
        }
      }
      break;
    case "Baklava":
      if (day <= 15 || day > 22) {
        price = cakeCount * 12.6;
        if (price >= 100 && price <= 200 && day <= 22) {
          price = price * 0.85;
        } else if (price > 200 && day <= 22) {
          price = price * 0.75;
        }
      }
      if ((day > 15 && day <= 22) || day > 22) {
        price = cakeCount * 16.98;
        if (price >= 100 && price <= 200 && day <= 22) {
          price = price * 0.85;
        } else if (price > 200 && day <= 22) {
          price = price * 0.75;
        }
      }
      break;
  }

  if (day <= 15) {
    price = price * 0.9;
  }
  console.log(price.toFixed(2));
}
bakery(["Cake", "5", "12"]);
