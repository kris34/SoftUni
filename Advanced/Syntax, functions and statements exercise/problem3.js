function solve(nums) {
  let string = String(nums);
  let first = string[0];
  let sum = 0;
  let isSame = true;

  for (let i = 0; i < string.length; i++) {
    sum += +string[i];
    if (string[i] != first) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
  
}
solve(1234);
