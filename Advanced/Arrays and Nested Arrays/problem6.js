function solve(arr) {
  let result = [];
   arr.forEach((el) =>
    arr.indexOf(el) % 2 == 1 ? result.push(el) : false
  );
  result.forEach((el) => el = el * 2)
  console.log(result);
}
solve([10, 15, 20, 25]);
