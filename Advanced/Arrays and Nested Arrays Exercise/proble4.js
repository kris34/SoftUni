function solve(arr, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    let el = arr.pop();
    arr.unshift(el);
  }
  console.log(arr.join(" "));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);

