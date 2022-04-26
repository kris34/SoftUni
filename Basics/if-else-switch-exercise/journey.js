function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let shelter;
  let price = 0;

  if (budget <= 100) {
    console.log(`Somewhere in Bulgaria`);
    if (season == "summer") {
      price = budget * 0.3;
      shelter = "Camp";
    } else if (season == "winter") {
      price = budget * 0.7;
      shelter = "Hotel";
    }
    console.log(`${shelter} - ${price.toFixed(2)}`);
  } else if (budget <= 1000) {
    console.log(`Somewhere in Balkans`);
    if (season == "summer") {
      price = budget * 0.4;
      shelter = "Camp";
    } else if (season == "winter") {
      price = budget * 0.8;
      shelter = "Hotel";
    }
    console.log(`${shelter} - ${price.toFixed(2)}`);
  } else if (budget > 1000) {
    console.log(`Somewhere in Europe`);
    if (season == "winter" || season == "summer") {
      shelter = "Hotel";
      price = budget * 0.9;
    }
    console.log(`${shelter} - ${price.toFixed(2)}`);
  }
}
journey(["50", "summer"]);
