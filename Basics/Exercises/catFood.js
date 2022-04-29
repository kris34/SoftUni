function catFood(input) {
  let cats = Number(input[0]);
  let index = 1;
  let food = Number(input[index++]);

  let groupOne = 0;
  let groupTwo = 0;
  let groupThree = 0;
  let quantFood = 0;

  for (let i = 1; i <= cats; i++) {
    quantFood += food;

    if (food >= 100 && food < 200) {
      groupOne++;
    } else if (food >= 200 && food < 300) {
      groupTwo++;
    } else if (food >= 300 && food < 400) {
      groupThree++;
    }
    food = Number(input[index++]);
  }
  let foodInKg = quantFood / 1000;
  let price = foodInKg * 12.45;

  console.log(`Group 1: ${groupOne} cats.`);
  console.log(`Group 2: ${groupTwo} cats.`);
  console.log(`Group 3: ${groupThree} cats.`);
  console.log(`Price for food per day: ${price.toFixed(2)} lv.`);
}
catFood([
  "10",
  "256",
  "348",
  "198",
  "322",
  "186",
  "294",
  "321",
  "100",
  "200",
  "300",
]);
