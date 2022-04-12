function cleverLily(input) {
  let age = Number(input[0]);
  let priceWashingMachine = Number(input[1]);
  let priceToy = Number(input[2]);

  let money = 0;
  let currentMoney = 10;
  let toy = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += currentMoney;
      currentMoney += 10;
      money -= 1;
    } else {
      toy++;
    }
  }

  let totalMoney = toy * priceToy + money;
  let diff = Math.abs(priceWashingMachine - totalMoney);

  if (diff >= priceWashingMachine) {
    console.log(`No! ${diff.toFixed(2)}`);
  } else {
    console.log(`Yes! ${diff.toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
