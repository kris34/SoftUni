function solve(a, b) {
  let res = 1;

  for (let i = 1; i <= b; i++) {
    res *= a;
  }

  console.log(res);
}
solve(2, 8);
