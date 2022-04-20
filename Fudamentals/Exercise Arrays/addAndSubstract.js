function solve(array) {
  let sum = 0;
  let sumNew = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (array[i] % 2 === 0) {
      array[i] += i;
    } else {
      array[i] -= i;
    }
    sumNew += array[i];
  }
  console.log(array);
  console.log(sum);
  console.log(sumNew);
}

solve([5, 15, 23, 56, 35]);
