function easterGuests(input) {
  let guests = Number(input[0]);
  let budget = Number(input[1]);

  let priceKozunak = 4;
  let eggPrice = 0.45;

  let needKozunak = Math.ceil(guests / 3);
  let eggsNeed = guests * 2;
  let kozunakTotal = needKozunak * priceKozunak;
  let eggsTotal = eggPrice * eggsNeed;
  let total = eggsTotal + kozunakTotal;
  let diff = Math.abs(budget - total);

  if (budget >= total) {
    console.log(
      `Lyubo bought ${needKozunak} Easter bread and ${eggsNeed} eggs.`
    );
    console.log(`He has ${diff.toFixed(2)} lv. left.`);
  } else {
    console.log("Lyubo doesn't have enough money.");
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}

easterGuests(["10", "10"]);
