function cake(input) {
  let index = 0;
  let l = Number(input[index]);
  index++;
  let w = Number(input[index]);
  index++;

  let cakeSize = l * w;
  let command = input[index];
  index++;
  let isCake = true;

  while (command !== "STOP") {
    let pieces = Number(command);
    cakeSize -= pieces;

    if (cakeSize < 0) {
      isCake = false;
      break;
    }
    command = input[index];
    index++;
  }

  if (isCake) {
    console.log(`${cakeSize} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(cakeSize)} pieces more.`
    );
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
