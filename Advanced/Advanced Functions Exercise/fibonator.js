function getFibonator() {
  let start = 0;
  let current = 1;

  return function sum() {
    let sum = start + current;
    start = current;
    current = sum;
    return start;
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
