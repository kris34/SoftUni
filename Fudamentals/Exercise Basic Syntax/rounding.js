function rounding(num, numTwo) {
  if (numTwo > 15) {
    numTwo = 15;
    console.log(`${parseFloat(num.toFixed(numTwo))}`);
  } else {
    console.log(`${parseFloat(num.toFixed(numTwo))}`);
  }
}
rounding(10.5, 3);
