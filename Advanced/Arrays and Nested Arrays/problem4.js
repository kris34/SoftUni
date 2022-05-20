function solve(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = [];
  if (sorted.length % 2 == 1) {
    result = sorted.splice(Math.ceil(sorted.length / 2) -1 );
  } else {
    result = sorted.splice(Math.ceil(sorted.length / 2));
  }
  return result
}
solve([3, 19, 14,7]);
