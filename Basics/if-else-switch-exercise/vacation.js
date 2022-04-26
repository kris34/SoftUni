function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let house;
  let location;
  let price = 0;

  if (budget <= 1000) {
    house = "Camp";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.65;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    house = "Hut";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.8;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.6;
    }
  } else if (budget > 3000) {
    house = "Hotel";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.9;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.9;
    }
  }

  console.log(`${location} - ${house} - ${price.toFixed(2)}`);
}
