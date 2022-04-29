function practise(input) {
  let countDays = Number(input[0]);
  let totalFood = Number(input[1]);
  let index = 2;

  let biscuittes = 0;
  let totalFoodEaten = 0;
  let totalFoodCat = 0;
  let totalFoodDog = 0;

  for (let i = 1; i <= countDays; i++) {
    let foodDog = Number(input[index++]);
    let foodCat = Number(input[index++]);

    totalFoodDog += foodDog;
    totalFoodCat += foodCat;
    totalFoodEaten += foodDog + foodCat;

    if (i % 3 === 0) {
      biscuittes += (foodCat + foodDog) * 0.1;
    }
  }

  let foodPercentage = ((totalFoodEaten / totalFood) * 100).toFixed(2);
  let catPercent = ((totalFoodCat / totalFoodEaten) * 100).toFixed(2);
  let dogPercent = ((totalFoodDog / totalFoodEaten) * 100).toFixed(2);
  console.log(`Total eaten biscuits: ${Math.round(biscuittes)}gr.`);
  console.log(`${foodPercentage}% of the food has been eaten.`);
  console.log(`${dogPercent}% eaten from the dog.`);
  console.log(`${catPercent}% eaten from the cat.`);
}
practise(["3", "500", "100", "30", "110", "25", "120", "35"]);
