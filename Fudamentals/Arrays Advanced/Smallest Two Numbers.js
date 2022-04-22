function smallestTwo(arr) {
  let first = arr.splice(arr.length / 2);
  let last = arr.slice(0, arr.length / 2);

  let smallestOne = 0;
  let smallestTwo = 0;

  for (let i = 0; i < first.length + 1; i++) {
    let currElment = first[i];
    let nextElement = first[i + 1];
    if (currElment < nextElement || currElment < smallestOne) {
      smallestOne = currElment;
    }
  }
  for (let i = 0; i < last.length + 1; i++) {
    let currElment = last[i];
    let nextElement = last[i + 1];
    if (currElment < nextElement || currElment < smallestTwo) {
      smallestTwo = currElment;
    }
  }

  let newArr = [];
  newArr.push(smallestTwo, smallestOne);
  console.log(newArr.join(" "));
}
smallestTwo([30, 15, 50, 5]);
