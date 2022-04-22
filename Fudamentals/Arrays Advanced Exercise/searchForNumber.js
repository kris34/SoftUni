function searchForNumber(param1, param2) {
  let numbersCount = Number(param2[0]); //numbers to take from array
  let deleteCount = Number(param2[1]); // numbers to delete from array
  let magicNum = Number(param2[2]); // number to search after the first two manipulations
  let counter = 0;

  let newArr = param1.slice(0, numbersCount);
  newArr.splice(0, deleteCount);
  for (let element of newArr) {
    if (element == magicNum) {
      counter++;
    }
  }

  console.log(`Number ${magicNum} occurs ${counter} times.`);
}
searchForNumber([5, 5, 5, 8, 5, 7], [3, 1, 5]);
