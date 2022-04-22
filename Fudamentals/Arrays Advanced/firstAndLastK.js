function firstAndLastK(arr) {
  let count = arr.splice(0, 1);
  let k = Number(count);

  let first = arr.slice(0, k);
  let last = arr.slice(-k);
  console.log(first.join(" "));
  console.log(last.join(" "));
}
firstAndLastK([3, 6, 7, 8, 9]);
