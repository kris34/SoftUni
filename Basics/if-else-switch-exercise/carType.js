function carRent(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let carType;
  let rent = 0;

  if (budget <= 100) {
    console.log("Economy class");
    if (season === "Summer") {
      carType = "Cabrio";
      rent = budget * 0.35;
      console.log(`${carType} - ${rent.toFixed(2)}`);
    } else if (season === "Winter") {
      carType = "Jeep";
      rent = budget * 0.65;
      console.log(`${carType} - ${rent.toFixed(2)}`);
    }
  } else if (budget > 100 && budget <= 500) {
    console.log("Compact class");
    if (season === "Summer") {
      carType = "Cabrio";
      rent = budget * 0.45;
      console.log(`${carType} - ${rent.toFixed(2)}`);
    } else if (season === "Winter") {
      carType = "Jeep";
      rent = budget * 0.8;
      console.log(`${carType} - ${rent.toFixed(2)}`);
    }
  } else if (budget > 500) {
    console.log("Luxury class");
    if (season === "Summer" || season === "Winter") {
      carType = "Jeep";
      rent = budget * 0.9;
      console.log(`${carType} - ${rent.toFixed(2)}`);
    }
  }
}
carRent(["1010", "Summer"]);
