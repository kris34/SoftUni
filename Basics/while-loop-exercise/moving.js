function practise(input) {
  let index = 0;
  let w = Number(input[index]);
  index++;
  let l = Number(input[index]);
  index++;
  let h = Number(input[index]);
  index++;

  let size = w * l * h;

  let command = input[index];
  index++;

  let isFull = true;

  let totalSizeBoxes = 0;

  while (command !== "Done") {
    let boxes = Number(command);
    size -= boxes;

    if (size < 0) {
      isFull = false;
      break;
    }
    command = input[index];
    index++;
  }

  if (isFull) {
    console.log(`${size} Cubic meters left.`);
  } else {
    console.log(
      `No more free space! You need ${Math.abs(size)} Cubic meters more.`
    );
  }
}

practise(["10", "1", "2", "4", "6", "Done"]);
