function solve(a, operator, b) {
  if (operator === "+") {
    console.log((a + b).toFixed(2));
  } else if (operator === "-") {
    console.log((a - b).toFixed(2));
  } else if (operator === "/") {
    console.log((a / b).toFixed(2));
  } else if (operator === "*") {
    console.log((a * b).toFixed(2));
  }
}
solve(25.5, "-", 3);
