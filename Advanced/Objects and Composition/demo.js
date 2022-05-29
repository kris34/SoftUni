function print() {
  return console.log(`${this.name} said hello!`);
}

let name = "Sofia";

let town = { name, print };
