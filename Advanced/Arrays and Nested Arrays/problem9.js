function solve(matrix) {
  let biggestNums = [];
  for (let i = 0; i < matrix.length; i++) {
    let sorted = matrix[i].sort((a, b) => a - b);
    biggestNums.push(sorted.pop());
  }

  biggestNums = biggestNums.sort((a, b) => a - b);
  return biggestNums.pop();
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
