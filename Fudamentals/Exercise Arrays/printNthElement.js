function solve(array) {
  let last = array.slice(-1);

  let lastToString = Number(last.join(""));
  let newArr = [];

  for (let i = 0; i < array.length - 1; i += lastToString) {
    newArr.push(array[i]);
  }
  console.log(newArr.join(" "));
}

solve(["dsa", "asd", "test", "test", "2"]);
