function bombNumbers(param1, param2) {
  let bombNumber = Number(param2[0]); // The bomb
  let bombPower = Number(param2[1]); // Count of integers to detonate left and right of the bomb

  for (let i = 0; i <= param1.length; i++) {
    if (param1[i] == bombNumber) {
      param1.splice(i - bombPower, bombPower * 2 + 1);
      i--;
    }
  }

  let sum = 0;
  for (let element of param1) {
    sum += element;
  }
  console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
