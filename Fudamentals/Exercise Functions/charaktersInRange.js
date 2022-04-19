function inRange(char1, char2) {
  let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

  let charArr = [];

  for (let i = startChar + 1; i < endChar; i++) {
    charArr.push(String.fromCharCode(i));
  }
  console.log(charArr.join(" "));
}
inRange("a", "d");
