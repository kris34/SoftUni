function sumOdd(n) {
  let counter = 0;
  let sum = 0;

  let i = 1;

  while (counter < n) {
    console.log(i);
    sum += i;
    i += 2;

    if (counter == n) {
      break;
    }
    counter++;
  }
  console.log(`Sum: ${sum}`);
}
sumOdd(3);
