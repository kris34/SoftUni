function censored(sentance, word) {
  let sentanceArray = sentance.split(" ");

  for (let i = 0; i < sentanceArray.length; i++) {
    if (sentanceArray[i] == word) {
      let index = i;
      let word = sentanceArray.splice(index, 1).join(" ");
      let newWord = "*".repeat(word.length);
      sentanceArray.splice(index, 0, newWord);
    }
  }
  console.log(sentanceArray.join(" "));
}
censored("Find the hidden word", "hidden");

function censoredWords(sentance, word) {
  let censored = "";

  for (let letter of word) {
    letter = "*";
    censored += letter;
  }
  console.log(sentance.split(word).join(censored));
}
censoredWords("A small sentence with some words", "small");

/* function censored(sentance, word) {

  
  while (sentance.includes(word)) {
    sentance = sentance.replace(word, "*".repeat(word.length))
    

  }

  console.log(sentance);
}
censored("Find the hidden word", "hidden");
 */
