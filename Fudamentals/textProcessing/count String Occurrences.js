function occurrences(text, word) {
  let arr = text.split(" ");
  let counter = 0;

  for (let element of arr) {
    if (element == word) {
      counter++;
    }
  }
  console.log(counter);
}
occurrences("This is a word and it also is a sentence", "is");
