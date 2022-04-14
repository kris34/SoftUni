function gladiatorInventory(array) {
  let inventory = array[0].split(" ");

  for (let i = 1; i < array.length; i++) {
    let command = array[i].split(" ");

    if (command[0] == "Buy") {
      if (inventory.includes(command[1]) == false) {
        inventory.push(command[1]);
      }
    } else if (command[0] == "Trash") {
      if (inventory.includes(command[1])) {
        let index = inventory.indexOf(command[1]);
        inventory.splice(index, 1);
      }
    } else if (command[0] == "Repair") {
      if (inventory.includes(command[1])) {
        let index = inventory.indexOf(command[1]);
        inventory.push(inventory.splice(index, 1)[0]);
      }
    } else if (command[0] == "Upgrade") {
      let item = command[1].split("-");
      let upgraded = item.join(":");
      if (inventory.includes(item[0])) {
        let index = inventory.indexOf(item[0]);
        inventory.splice(index + 1, 0, upgraded);
      }
    }
  }
  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
