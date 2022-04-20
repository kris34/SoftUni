function solve(num) {
  let numToString = num.toString();
  let res = 0;

  for (let i = 0; i < numToString.length; i++) {
    res += Number(numToString[i]);
  }

  console.log(res);
}
solve(245678);
