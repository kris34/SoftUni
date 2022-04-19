function solve(input) {
  let result = {};
  let count = 0;
  while (input[0] != 'Stop') {
    let line = input.shift();

    let [pref, guest, food] = line.split('-');

    if (pref == 'Like') {
      if (!result.hasOwnProperty(guest)) {
        result[guest] = {};
        result[guest][meal] = meal;
      } else {
        if (!result[guest].hasOwnProperty(meal)) {
          result[guest][meal] = meal;
        }
      }
    } else if (pref == 'Dislike') {
      if (!result.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
      } else {
        if (result[guest].hasOwnProperty(meal)) {
          delete result[guest][meal];
          console.log(`${guest} doesn't like the ${meal}.`);
          count++;
        } else {
          console.log(
            `${guest} doesn't have the ${meal} in his/her collection.`
          );
        }
      }
    }
    
  }
  for (let guest of Object.keys(result)) {
    console.log(`${guest}: ${Object.keys(result[guest]).join(', ')}`);
  }
  console.log(`Unliked meals: ${count}`);
}

solve([
  'Like-Krisi-shrimps',
  'Like-Krisi-soup',
  'Like-Penelope-dessert',
  'Like-Misho-salad',
  'Stop',
]);
