function solve(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    let num = Number(arr[i]);
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  let res = sumEven - sumOdd;
  console.log(res);
}
solve([1, 2, 3, 4, 5, 6]);
