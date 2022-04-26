function bikeRace(input) {
  let countJunior = Number(input[0]);
  let countSenior = Number(input[1]);
  let raceType = input[2];

  let taxJunior = 0;
  let taxSenior = 0;
  let grouptype;

  switch (raceType) {
    case "trail":
      taxJunior = 5.5 * countJunior;
      taxSenior = 7 * countSenior;
      break;
    case "cross-country":
      taxJunior = 8 * countJunior;
      taxSenior = 9.5 * countSenior;
      break;
    case "downhill":
      taxJunior = 12.25 * countJunior;
      taxSenior = 13.75 * countSenior;
      break;
    case "road":
      taxJunior = 20 * countJunior;
      taxSenior = 21.5 * countSenior;
      break;
  }

  let totalTax = taxJunior + taxSenior;
  let totalCount = countSenior + countJunior;

  if (raceType === "cross-country") {
    if (totalCount >= 50) {
      totalTax = totalTax * 0.75;
    }
  }
  let finalTax = totalTax * 0.95;
  console.log(finalTax.toFixed(2));
}

bikeRace(["30", "25", "cross-country"]);
