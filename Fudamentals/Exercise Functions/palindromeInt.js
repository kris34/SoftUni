function palindromeIntegers(arr) {
  function reversedNum(number) {
    let normalNum = number;
    let reverseNum = Number(number.toString().split("").reverse().join(""));
    if (normalNum === reverseNum) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    console.log(reversedNum(currNum));
  }
}
palindromeIntegers([123, 323, 421, 121]);

/* function palindromeIntegers(arr) {
  let normalArr = [];

  for (let i = 0; i < arr.length; i++) {
    normalArr.push(arr[i]);
  }

  let reversed = arr.reverse();

  for (let i = 0; i < normalArr.length; i++) {
    if (normalArr[i] === reversed[i]) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
} */
