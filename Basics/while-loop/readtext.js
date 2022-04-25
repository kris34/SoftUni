function readText(input) {
  let index = 0;
  let words = input[index];

  while (words !== "Stop") {
    console.log(words);
    index++;
    words = input[index];
  }
}
readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
