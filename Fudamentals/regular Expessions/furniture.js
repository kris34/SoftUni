function solve(input) {
  let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;
  let furniture = [];
  let total = 0;

  while (input[0] != 'Purchase') {
    let line = input.shift();

    let match = pattern.exec(line);

    if (match != null) {
      let { name, price, qty } = match.groups;
      price = Number(price);
      qty = Number(qty);

      total += price * qty;
      furniture.push(name);
    }
  }

  console.log(`Bought furniture:`);
  for (let el of furniture) {
    console.log(el);
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
}
