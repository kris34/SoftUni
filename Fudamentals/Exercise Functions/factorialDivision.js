function factorial(a, b) {
  let finalResult = calculator(a) / calculator(b);
  console.log(finalResult.toFixed(2));
}
factorial(5, 2);
function calculator(number) {
  let result = 1;
  while (number != 1) {
    result *= number;
    number -= 1;
  }
  return result;
}
