function vacation(num, type, day) {
  let price = 0;
  let totalPrice = 0;

  switch (type) {
    case "Students":
      if (day === "Friday") {
        price = 8.45;
        totalPrice = price * num;
      } else if (day === "Saturday") {
        price = 9.8;
        totalPrice = price * num;
      } else if (day === "Sunday") {
        price = 10.46;
        totalPrice = price * num;
      }
      break;
    case "Business":
      if (day === "Friday") {
        price = 10.9;
        totalPrice = price * num;
      } else if (day === "Saturday") {
        price = 15.6;
        totalPrice = price * num;
      } else if (day === "Sunday") {
        price = 16;
        totalPrice = price * num;
      }
      break;
    case "Regular":
      if (day === "Friday") {
        price = 15;
        totalPrice = price * num;
      } else if (day === "Saturday") {
        price = 20;
        totalPrice = price * num;
      } else if (day === "Sunday") {
        price = 22.5;
        totalPrice = price * num;
      }
      break;
  }

  let discount = 10 * price;

  if (num >= 30 && type === "Students") {
    totalPrice = totalPrice * 0.85;
  } else if (type === "Business" && num >= 100) {
    totalPrice -= discount;
  } else if (type === "Regular" && num >= 10 && num <= 20) {
    totalPrice = totalPrice * 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
