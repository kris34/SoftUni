function printSum(num1, num2) {
  let sum = 0;
  let string = "";

  for (let i = num1; i <= num2; i++) {
    string += i + " ";
    sum += i;
  }
  console.log(string);
  console.log(`Sum: ${sum}`);
}
printSum(0, 26);
