function solve(fruit, weight, price) {

    let toKg = weight / 1000
    let sum = price * toKg
    console.log(`I need $${sum.toFixed(2)} to buy ${toKg.toFixed(2)} kilograms ${fruit}.`);

}
solve("orange", 2500, 1.8);
