function solve(array) {
  let rotations = array.pop();
  let last = array.pop();

  for (let i = 0; i < rotations; i++) {
    last = array.pop();
    array.unshift(last);
  }
  console.log(array);
}
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
