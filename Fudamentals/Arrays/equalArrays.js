function solve(arr1, arr2) {
  let sum = 0;

  let isFalse = false;

  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isFalse = false;
      break;
    } else {
      isFalse = true;
      sum += Number(arr1[i]);
    }
  }

  if (isFalse) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
