function solve(string, num) {
  let string2 = "";

  for (let i = 1; i <= num; i++) {
    string2 += string;
  }
  console.log(string2);
}
solve("String", 2);
