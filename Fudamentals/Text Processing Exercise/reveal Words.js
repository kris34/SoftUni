/* function revealWords(words, text) {
  words = words.split(", ");
  text = ` ${text} `;

  for (let word of words) {

    let match = ` ${"*".repeat(word.length)} `;
    word = ` ${word} `;

    text = text.replace(match, word);
  }
  console.log(text);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
); */

function revealWords(words, text) {
  let wordsArr = words.split(", ");
  let textArr = text.split(" ");


  for (let token of textArr) {
    for (let word of wordsArr) {
      if (token == "*".repeat(word.length)) {
        let index = textArr.indexOf(token);
        textArr.splice(index, 1, word);
      }
    }
  }
  console.log(textArr.join(" "));
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
