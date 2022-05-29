function pascal(string) {
  let arr = string.toLowerCase().split(" ");

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(word);
  }
  console.log(result.join(""));
}
camel()
