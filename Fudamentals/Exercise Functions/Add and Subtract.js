function addAndSubstract(a, b, c) {
  function add(num1, num2) {
    return num1 + num2;
  }

  function sub(res, c) {
    return res - c;
  }

  let plus = add(a, b);
  let minus = sub(plus, c);
  console.log(minus);
}
addAndSubstract(23, 6, 10);
