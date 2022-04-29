function christmasGifts(input) {
  let index = 0;
  let command = input[index++];

  let kids = 0;
  let adults = 0;

  while (command !== "Christmas") {
    let age = Number(command);

    if (age <= 16) {
      kids++;
    } else {
      adults++;
    }
    command = input[index++];
  }
  let kidsPrice = kids * 5;
  let adultsPrice = adults * 15;

  console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${kidsPrice}`);
  console.log(`Money for sweaters: ${adultsPrice}`);
}
christmasGifts(["16", "16", "16", "16", "16", "Christmas"]);
