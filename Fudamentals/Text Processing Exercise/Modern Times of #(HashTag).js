function hashtag(text) {
  let textArr = text.split(" ");
  let result = [];

  for (let token of textArr) {
    if (token[0] == "#" && token.length > 1) {
      let valid = true;
      for (let char of token.substring(1)) {
        let code = char.charCodeAt(0);
        if (code < 65 || (code > 90 && code < 97) || code > 122) {
          valid = false;
          break;
        }
      }
      if (valid) {
        textArr.slice(token);
        result.push(token);
      }
    }
  }

  for (let word of result) {
    word = word.substring(1);
    console.log(word);
  }
}
hashtag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
