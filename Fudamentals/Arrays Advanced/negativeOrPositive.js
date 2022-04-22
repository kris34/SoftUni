function negativeOrPositive(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.unshift(arr[i]);
    }

    if (arr[i] >= 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join("\n"));
}
negativeOrPositive(["3", "-2", "0", "-1"]);
