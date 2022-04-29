function foodDelivery(input) {
  let chickenNum = Number(input[0]);
  let fishNum = Number(input[1]);
  let veganNum = Number(input[2]);

  let chickenSum = chickenNum * 10.35;
  let fishSum = fishNum * 12.4;
  let veganSum = veganNum * 8.15;
  let total = chickenSum + fishSum + veganSum;
  let desert = total * 0.2;
  let deliveryCost = 2.5;
  let totalSum = total + desert + deliveryCost;
  console.log(totalSum);
}
foodDelivery(["2 ", "4 ", "3 "]);
