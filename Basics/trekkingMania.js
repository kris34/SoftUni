function practise(input) {
  let index = 0;
  let groupsCount = Number(input[index]);
  index++;

  let musala = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;
  let total = 0;

  for (let i = 0; i < groupsCount; i++) {
    let people = Number(input[index]);
    index++;
    total += people;

    if (people <= 5) {
      musala += people;
    } else if (people >= 6 && people <= 12) {
      monblan += people;
    } else if (people >= 13 && people <= 25) {
      kilimanjaro += people;
    } else if (people >= 26 && people <= 40) {
      k2 += people;
    } else {
      everest += people;
    }
  }

  let peopleMusala = (musala / total) * 100;
  let peopleMonblan = (monblan / total) * 100;
  let peopleKilimanjaro = (kilimanjaro / total) * 100;
  let peopleK2 = (k2 / total) * 100;
  let peopleEverest = (everest / total) * 100;

  console.log(peopleMusala.toFixed(2) + "%");
  console.log(peopleMonblan.toFixed(2) + "%");
  console.log(peopleKilimanjaro.toFixed(2) + "%");
  console.log(peopleK2.toFixed(2) + "%");
  console.log(peopleEverest.toFixed(2) + "%");
}
practise(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
