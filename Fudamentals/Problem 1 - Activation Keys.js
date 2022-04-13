function activation(input) {
  let key = input.shift();

  while (input[0] != 'Generate') {
    let tokens = input.shift().split('>>>');
    let command = tokens[0];

    if (command == 'Slice') {
      key = slicer(key, tokens[1], tokens[2]);
      console.log(key);
    } else if (command == 'Flip' && tokens[1] == 'Upper') {
      key = flipperUpper(key, tokens[2], tokens[3]);
      console.log(key);
    } else if (command == 'Flip' && tokens[1] == 'Lower') {
      key = flipperLower(key, tokens[2], tokens[3]);
      console.log(key);
    } else if (command == 'Contains') {
      contain(key, tokens[1])
    }
  }
  console.log(`Your activation key is: ${key}`);

  function contain(string, substring) {
    if (string.includes(substring)) {
      console.log(`${string} contains ${substring}`);
    } else {
      console.log(`Substring not found!`);
    }
  }

  function flipperUpper(string, startIndex, endIndex) {
    let result = string;
    string = string.substring(startIndex, endIndex);
    result = result.replace(string, string.toUpperCase());

    return result;
  }

  function flipperLower(string, startIndex, endIndex) {
    let result = string;
    string = string.substring(startIndex, endIndex);
    result = result.replace(string, string.toLowerCase());

    return result;
  }

  function slicer(string, startIndex, endIndex) {
    let subString = string.substring(startIndex, endIndex);
    string = string.replace(subString, '');
    return string;
  }
}
activation(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
