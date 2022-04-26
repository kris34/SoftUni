function hotelRoom(input) {
  let month = input[0];
  let countOvernight = Number(input[1]);

  let priceStudio = 0;
  let priceApartment = 0;

  if (month === "May" || month === "October") {
    priceApartment = 65 * countOvernight;
    priceStudio = 50 * countOvernight;
    if (countOvernight > 7 && countOvernight < 14) {
      priceStudio = priceStudio * 0.95;
    } else if (countOvernight > 14) {
      priceStudio = priceStudio * 0.7;
      priceApartment = priceApartment * 0.9;
    }
  } else if (month === "June" || month === "September") {
    priceApartment = countOvernight * 68.7;
    priceStudio = countOvernight * 75.2;
    if (countOvernight > 14) {
      priceStudio = priceStudio * 0.8;
      priceApartment = priceApartment * 0.9;
    }
  } else if (month === "July" || month === "August") {
    priceApartment = countOvernight * 77;
    priceStudio = countOvernight * 76;
    if (countOvernight > 14) {
      priceStudio = priceStudio;
      priceApartment = priceApartment * 0.9;
    }
  }
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["June", "14"]);
