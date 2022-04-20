function solve(lost, helmet, sword, shield, armor) {
  let helmCounter = 0;
  let swordCounter = 0;
  let shieldCounter = 0;
  let armourCounter = 0;
  let counter = 0;

  for (let i = 1; i <= lost; i++) {
    counter++;

    if (counter % 2 === 0) {
      helmCounter++;
      if (counter % 6 === 0) {
        shieldCounter++;
        swordCounter++;
        if (counter % 12 === 0) {
          armourCounter++;
        }
      }
    } else if (counter % 3 === 0) {
      swordCounter++;
    }
  }

  let total = helmCounter + swordCounter + shieldCounter + armourCounter;

  let totalPrice =
    helmCounter * helmet +
    swordCounter * sword +
    shieldCounter * shield +
    armourCounter * armor;

  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
solve(23, 12.5, 21.5, 40, 200);
