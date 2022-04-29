function kozunak(input) {
  let n = Number(input[0]);
  let index = 1;
  let sugar = Number(input[index++]);
  let flour = Number(input[index++]);

  let sugarSum = 0;
  let flourSum = 0;
  let highestFlour = 0;
  let highestSugar = 0;

  for (let i = 0; i < n; i++) {
    sugarSum += sugar;
    flourSum += flour;

    if (sugar > highestSugar) {
      highestSugar = sugar;
    }

    if (flour > highestFlour) {
      highestFlour = flour;
    }

    sugar = Number(input[index++]);
    flour = Number(input[index++]);
  }

  let packSugar = Math.ceil(sugarSum / 950);
  let packFlour = Math.ceil(flourSum / 750);

  console.log(`Sugar: ${packSugar}`);
  console.log(`Flour: ${packFlour}`);
  console.log(
    `Max used flour is ${highestFlour} grams, max used sugar is ${highestSugar} grams.`
  );
}
kozunak(["3", "400", "350", "250", "300", "450", "380"]);
