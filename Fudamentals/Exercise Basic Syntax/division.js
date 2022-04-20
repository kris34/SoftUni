function division(a) {
  if (a % 10 === 0) {
    console.log("The number is divisible by 10");
  } else if (a % 7 === 0) {
    console.log("The number is divisible by 7");
  } else if (a % 6 === 0) {
    console.log("The number is divisible by 6");
  } else if (a % 3 === 0) {
    console.log("The number is divisible by 3");
  } else if (a % 2 === 0) {
    console.log("The number is divisible by 2");
  } else {
    console.log("Not divisible");
  }
}
division(30);
