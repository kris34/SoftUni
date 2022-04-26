function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);

  let price = 0;

  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    switch (fruit) {
      case "banana":
        price = (quantity * 2.5).toFixed(2);
        console.log(price);
        break;
      case "apple":
        price = (quantity * 1.2).toFixed(2);
        console.log(price);
        break;
      case "orange":
        price = (quantity * 0.85).toFixed(2);
        console.log(price);
        break;
      case "grapefruit":
        price = (quantity * 1.45).toFixed(2);
        console.log(price);
        break;
      case "kiwi":
        price = (quantity * 2.7).toFixed(2);
        console.log(price);
        break;
      case "pineapple":
        price = (quantity * 5.5).toFixed(2);
        console.log(price);
        break;
      case "grapes":
        price = (quantity * 3.85).toFixed(2);
        console.log(price);
        break;
      default:
        console.log("error");
        break;
    }
  } else if (day == "Saturday" || day == "Sunday") {
    switch (fruit) {
      case "banana":
        price = (quantity * 2.7).toFixed(2);
        console.log(price);
        break;
      case "apple":
        price = (quantity * 1.25).toFixed(2);
        console.log(price);
        break;
      case "orange":
        price = (quantity * 0.9).toFixed(2);
        console.log(price);
        break;
      case "grapefruit":
        price = (quantity * 1.6).toFixed(2);
        console.log(price);
        break;
      case "kiwi":
        price = (quantity * 3.0).toFixed(2);
        console.log(price);
        break;
      case "pineapple":
        price = (quantity * 5.6).toFixed(2);
        console.log(price);
        break;
      case "grapes":
        price = (quantity * 4.2).toFixed(2);
        console.log(price);
        break;
    }
  } else {
    console.log("error");
  }
}
fruitShop(["orange", "Sunday", "3"]);
