function solve(arr) {
  arr = arr.sort();
  let result = arr.sort((a, b) => a.length - b.length);
  console.log(result.join("\n"));
}
solve(["test", "Deny", "omen", "Default"]);
