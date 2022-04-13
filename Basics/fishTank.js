function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percentage = Number(input[3]);

  let volume = length * width * height * 0.001;
  let percentageTakenSpace = volume * (percentage / 100);
  let liters = volume - percentageTakenSpace;

  console.log(liters);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
