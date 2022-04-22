function lastKNumbersSequence(x, k) {
  let result = [1];

  for (let i = 0; i < x - 1; i++) {
    let lastK = result.slice(-k);

    let sum = 0;

    for (let element of lastK) {
      sum += element;
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}
lastKNumbersSequence(8, 2);
