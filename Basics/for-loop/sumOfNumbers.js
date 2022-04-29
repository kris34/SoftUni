function sumOfNumbers(input) {
  let n = input[0];

  let res = 0;

  for (let i = 0; i < n.length; i++) {
    res += Number(n[i]);
  }
  console.log(`The sum of the digits: ${res}`);
}
sumOfNumbers(["1234"]);
