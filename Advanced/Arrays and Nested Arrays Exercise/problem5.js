function solve(arr) {
  let result = [arr.shift()];

  while (arr.length != 0) {
    let curNum = arr.shift();
    let last = result[result.length - 1];
    if (curNum >= last) {
      result.push(curNum);
    }
  }
  return result
}
solve([20, 3, 2, 15, 6, 1]);
