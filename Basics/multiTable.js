function table(input) {
  let n = Number(input[0]);

  for (let i = 1; i <= 10; i++) {
    let res = i * n;
    console.log(`${i} * ${n} = ${res}`);
  }
}
table([5]);
