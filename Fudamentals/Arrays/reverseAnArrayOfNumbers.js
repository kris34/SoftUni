function solve(n, array) {
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(array[i]);
  }

  let res = "";

  for (let i = newArr.length - 1; i >= 0; i--) {
    res += newArr[i];
    res += " ";
  }
  console.log(res);
}
solve(3, [10, 20, 30, 40, 50]);

// create new array with n numbers from the original one, reverse the numbers, and print
