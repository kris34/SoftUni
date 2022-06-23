function solution() {
  let recepies = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  let stock = {
    carbohydrate: 0,
    protein: 0,
    fat: 0,
    flavour: 0,
  };

  let commands = {
    restock,
    prepare,
    report,
  };
  return manager;
  function manager(line) {
    let [command, param, qty] = line.split(" ");

    let fn = commands[command];
    return fn(param, qty);
  }

  function restock(type, qty) {
    stock[type] += Number(qty);
    return "Success";
  }
  function prepare(recepieAsString, qty) {
    qty = Number(qty);

    let recepie = Object.entries(recepies[recepieAsString]);

    recepie.forEach((ingredient) => (ingredient[1] *= qty));

    for (let [ingredient, quantity] of recepie) {
      if (stock[ingredient] < qty) {
        return `Error: not enough ${ingredient} in stock`;
      }
    }

    recepie.forEach(([ingredient, reqired]) => (stock[ingredient] -= reqired));
    return "Success"
  }
  function report() {
    return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
  }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("report"));