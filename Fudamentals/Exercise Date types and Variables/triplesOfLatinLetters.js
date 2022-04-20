function solve(n) {
  let num = Number(n);

  for (let i = 0; i < num; i++) {
    let letterA = String.fromCharCode(97 + i);
    for (let j = 0; j < num; j++) {
      let letterB = String.fromCharCode(97 + j);
      for (let x = 0; x < num; x++) {
        let letterC = String.fromCharCode(97 + x);
        let res = letterA + letterB + letterC;
        console.log(res);
      }
    }
  }
}
solve("3");
