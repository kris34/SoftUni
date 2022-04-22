function oddNumbers(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      newArr.push(arr[i]);
    }
  }

  let reversedArr = [];

  for (let i = newArr.length - 1; i >= 0; i--) {
    reversedArr.push(newArr[i]);
  }
  let result = [];
  for (let element of reversedArr) {
    let res = element * 2;
    result.push(res);
  }
  console.log(result.join(" "));
}
oddNumbers([3, 0, 10, 4, 7, 3]);
