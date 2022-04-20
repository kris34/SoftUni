function sort(num1, num2, num3) {
  let numbers = [num1, num2, num3];

  for (let i = 0; i < numbers.length; i++) {
    numbers.sort(function (a, b) {
      return b - a;
    });
    console.log(numbers[i]);
  }
}
sort(2, 1, 3);
