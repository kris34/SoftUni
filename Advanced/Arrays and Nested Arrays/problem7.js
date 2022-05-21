function solve(matrix) {
  let sum = 0;
  let sum2 = 0;
  matrix.forEach((el, index) => (sum += el[index]));
  matrix.reverse().forEach((el, index) => (sum2 += el[index]));

  return [sum,sum2].join(" ")
}
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
