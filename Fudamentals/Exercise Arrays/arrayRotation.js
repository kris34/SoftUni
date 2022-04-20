function solve(array, num) {
  for (let i = 0; i < num; i++) {
    let currEl = array.shift();
    array.push(currEl);
  }

  console.log(array.join(" "));
}
solve([51, 47, 32, 61, 21], 2);
