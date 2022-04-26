function sumNumbers(input) {
  let intervalStart = Number(input[0]);
  let intervalEnd = Number(input[1]);
  let magicNumber = Number(input[2]);

  let counter = 0;
  let isFound = false;

  for (let i = intervalStart; i <= intervalEnd; i++) {
    for (let j = intervalStart; j <= intervalEnd; j++) {
      counter++;
      if (i + j === magicNumber) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }

  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumNumbers(["23", "24", "20"]);
