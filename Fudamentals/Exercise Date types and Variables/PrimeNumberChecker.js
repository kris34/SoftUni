function solve(n) {
  if (n === 1) {
    return console.log("false");
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return console.log("false");
    }
  }
  return console.log("true");
}
solve(8);
