function cinema(input) {
  let movieType = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let income = 0;

  if (movieType == "Premiere") {
    income = rows * columns * 12;
  } else if (movieType == "Normal") {
    income = rows * columns * 7.5;
  } else if (movieType == "Discount") {
    income = rows * columns * 5.0;
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"]);
