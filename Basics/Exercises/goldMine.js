function goldMine(input) {
  let locations = Number(input[0]);
  let index = 1;
  let expectedDaily = Number(input[index]);
  index++;
  let totalPerDay = 0;
  for (let i = 0; i < locations; i++) {
    let days = Number(input[index]);
    index++;
    for (let j = 0; j < days; j++) {
      let extractionPerDay = Number(input[index]);
      totalPerDay += extractionPerDay;
      index++;
    }
    let avg = totalPerDay / days;
    if (avg >= expectedDaily) {
      console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`);
    } else {
      let diff = Math.abs(avg - expectedDaily);
      console.log(`You need ${diff.toFixed(2)} gold.`);
    }
    totalPerDay = 0;
    expectedDaily = Number(input[index]);
    index++;
  }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
