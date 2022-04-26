function combinations(input) {
  let num = Number(input[0]);

  let validCombinations = 0;

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      for (let n = 0; n <= num; n++) {
        let res = i + j + n;
        if (res === num) {
          validCombinations++;
        }
      }
    }
  }
  console.log(validCombinations);
}
combinations(["25"]);
