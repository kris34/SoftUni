function dishwasher(input) {
  let detergentBottles = Number(input[0]);
  let index = 1;
  let command = input[index++];

  let totalDetergent = detergentBottles * 750;
  let detergentVessel = 5;
  let detergentPot = 15;
  let cleanedVessel = 0;
  let cleanedPot = 0;
  let counter = 0;

  while (totalDetergent >= 0) {
    let dishes = Number(command);
    counter++;

    if (command === "End") {
      break;
    }
    if (counter % 3 === 0) {
      cleanedPot += dishes;
      totalDetergent -= dishes * detergentPot;
    } else {
      cleanedVessel += dishes;
      totalDetergent -= dishes * detergentVessel;
    }

    command = input[index++];
  }
  if (totalDetergent < 0) {
    console.log(
      `Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`
    );
  } else {
    console.log(`Detergent was enough!`);
    console.log(`${cleanedVessel} dishes and ${cleanedPot} pots were washed.`);
    console.log(`Leftover detergent ${totalDetergent} ml.`);
  }
}
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
