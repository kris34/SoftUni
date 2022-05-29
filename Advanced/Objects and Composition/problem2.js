function solve(arr) {
  let obj = {};

  while (arr.length != 0) {
    let [city, population] = arr.shift().split("<->");
    population = +population;

    if (!obj.hasOwnProperty(city)) {
      obj[city] = 0;
    }
    obj[city] += population;
  }

  Object.keys(obj).forEach(x => {
      console.log(`${x} - ${obj[x]}`);
  })
}
solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
