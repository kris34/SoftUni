function huntingGames(input) {
  let days = Number(input.splice(0, 1));
  let playersCount = Number(input.splice(0, 1));
  let energy = Number(input.splice(0, 1));
  let water = Number(input.splice(0, 1));
  let food = Number(input.splice(0, 1));

  let totalFood = days * food * playersCount;
  let totalWater = days * water * playersCount;

  for (let i = 1; i < input.length + 1; i++) {
    energy -= input[i - 1];

    if (i % 2 == 0) {
      totalWater -= totalWater * 0.3;
      energy += energy * 0.05;
    }

    if (i % 3 == 0) {
      totalFood -= totalFood / playersCount;
      energy += energy * 0.1;
    }
    if (energy <= 0) {
      console.log(
        `You will run out of energy. You will be left with ${totalFood.toFixed(
          2
        )} and ${totalWater.toFixed(2)}`
      );
      break;
    }
  }
  if (energy > 0) {
    console.log(
      `You are ready for the quest. You will be left with - ${energy.toFixed(
        2
      )} energy!`
    );
  }
}
huntingGames([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
]);
