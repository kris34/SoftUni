function solve(input) {
  let people = Number(input[0]);
  let spaces = input[1].split(" ");
  let spacesNum = [];

  for (let i = 0; i <= spaces.length - 1; i++) {
    spacesNum.push(parseInt(spaces[i]));
  }

  let isFull = false;
  for (let i = 0; i < spacesNum.length; i++) {
    if (people < 4) {
      spacesNum[i] += people;
      people -= people;
    } else {
      spacesNum[i] += 4;
      people -= 4;
    }

    let last = spacesNum.slice(-1);
    let lastString = last.join(" ");

    if (lastString === "4" && people === 0) {
      isFull = true;
    }

    if (spacesNum[i] > 4) {
      let diff = spacesNum[i] - 4;
      people += diff;
      spacesNum[i] = 4;
    }
  }

  if (people === 0 && isFull !== true) {
    console.log("The lift has empty spots!");
    console.log(`${spacesNum.join(" ")}`);
  }
  if (people > 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(`${spacesNum.join(" ")}`);
  }

  if (isFull) {
    console.log(`${spacesNum.join(" ")}`);
  }
}
solve(["15", "0 0 0 0 0"]);
