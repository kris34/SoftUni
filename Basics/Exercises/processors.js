function processors(input) {
  let cpu = Number(input[0]);
  let emploees = Number(input[1]);
  let workDays = Number(input[2]);

  let totalH = emploees * workDays * 8;
  let totalCpu = Math.floor(totalH / 3);
  let diff = Math.abs(totalCpu - cpu);

  let money = diff * 110.1;

  if (totalCpu >= cpu) {
    console.log(`Profit: -> ${money.toFixed(2)} BGN`);
  } else {
    console.log(`Losses: -> ${money.toFixed(2)} BGN`);
  }
}
processors(["150", "7", "18"]);
