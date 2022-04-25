function shopping(input) {
  let budget = Number(input[0]);
  let videocards = Number(input[1]);
  let processors = Number(input[2]);
  let ram = Number(input[3]);

  let videocardsPrice = videocards * 250;
  let processorsPrice = videocardsPrice * 0.35;
  let moneyForProcessors = processorsPrice * processors;
  let ramPrice = videocardsPrice * 0.1;
  let moneyForRam = ram * ramPrice;
  let totalPrice = videocardsPrice + moneyForProcessors + moneyForRam;

  if (videocards > processors) {
    totalPrice = totalPrice * 0.85;
  }
  let diff = Math.abs(totalPrice - budget);

  if (budget >= totalPrice) {
    console.log(`You have ${diff.toFixed(2)} leva left!
`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}
shopping(["900", "2", "1", "3"]);
