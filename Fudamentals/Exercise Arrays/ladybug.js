function solve(arr) {
  let size = arr[0];
  let positions = arr[1];
  let index = 2;
  let commands = arr[index++];
  let currentPosition = 0;

  let field = [];

  for (let i = 1; i <= size; i++) {
    let newPosition = size / 3;
    field.push(newPosition);
  }

  for (let i = 0; i < positions.length; i++) {
    currentPosition = Number(positions[i]);
  }
}
solve([3, "0 1", "0 right 1", "2 right 1"]);
