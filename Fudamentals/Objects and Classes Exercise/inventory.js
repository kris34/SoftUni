function inventory(input) {
  let register = [];

  for (let element of input) {
    let [hero, level, items] = element.split(" / ");

    let currHero = {
      hero,
      level,
      items,
    };

    register.push(currHero);
  }
  let heroesSorted = register.sort((a, b) => a.level - b.level);

  for (let element of heroesSorted) {
    console.log(`Hero: ${element.hero}`);
    console.log(`level => ${element.level}`);
    console.log(`items => ${element.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
