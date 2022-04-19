/* function oddAndEvenSum(num) {
  let resEven = 0;
  let resOdd = 0;
  let numToString = num.toString();
  let newArr = [];

  for (let i = 0; i <= numToString.length - 1; i++) {
    newArr.push(Number(numToString[i]));
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 === 0) {
      resEven += newArr[i];
    } else {
      resOdd += newArr[i];
    }
  }

  console.log(`Odd sum = ${resOdd}, Even sum = ${resEven}`);
}
 */
function oddAndEvenSum(num) {
  let resEven = 0;
  let resOdd = 0;
  let numToString = num.toString();

  function stringToNumInArray(string) {
    let newArr = [];
    for (let i = 0; i <= string.length - 1; i++) {
      newArr.push(Number(numToString[i]));
    }
    return newArr;
  }

  let arr = stringToNumInArray(numToString);

  function sumNumbers(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        resEven += array[i];
      } else {
        resOdd += array[i];
      }
    }
    return [resEven, resOdd];
  }

  let newArr = sumNumbers(arr);
  let even = newArr[0];
  let odd = newArr[1];

  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(3495892137259234);
