function shootForTheWin(arr) {
  let targets = arr[0].split(" ");

  let arrStringToNum = [];
  let newArr = [];
  let normalArr = [];
  let currTarget = 0;
  let shotTarget = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    arrStringToNum.push(parseInt(arr[i]));
  }

  for (let i = 0; i < targets.length; i++) {
    newArr.push(parseInt(targets[i]));
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arrStringToNum[i];
    let num1 = num;

    for (let j = 0; j < 1; j++) {
      currTarget = Number(newArr[j]);
      shotTarget = currTarget;

      if (num1 <= newArr.length - 1) {
        shotTarget = -1;
        for (let k = 0; k < newArr.length - 1; k++) {
          let prevTarget = Number(newArr[j]);
          currTarget = Number(newArr[k + 1]);
          newArr[k + 1] = currTarget - prevTarget;
        }
        newArr[j] = shotTarget;
      }
    }
  }
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
