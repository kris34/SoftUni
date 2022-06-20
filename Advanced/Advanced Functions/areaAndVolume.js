function solve(areaIn, volIn, input) {
  let data = JSON.parse(input);

  let result = [];

  for (let cube of data) {
    const obj = {
      area: areaIn.call(cube),
      volume: volIn.call(cube),
    };

    result.push(obj)
  }
  console.log(result)
}asdf
solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function area() {
  return Math.abs(this.x * this.y);
}
