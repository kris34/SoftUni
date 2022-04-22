function distictArray(array) {
  for (let i = 0; i < array.length; i++) {
    let currEl = array[i];

    for (let k = i + 1; k < array.length; k++) {
      let next = array[k];
      if (currEl === next) {
        array.splice(k, 1);
        k = k - 1;
      }
    }
  }
  console.log(array.join(" "));
}
distictArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
