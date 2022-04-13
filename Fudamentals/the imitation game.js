function solve(input) {
  let message = input.shift();

  let commands = {
    Move,
    Insert,
    ChangeAll,
  };

  while (input[0] != "Decode") {
    let line = input.shift();
    let tokens = line.split("|");
    let command = tokens[0];
    message = commands[command](message, tokens[1], tokens[2]);              
  }

  function Move(string, count) {
    let result = string.substring(count) + string.substring(0, count);
    return result;
  }

  function Insert(string, index, value) {
    let splitted = string.split("");
    let first = splitted.slice(0, index);
    let second = splitted.slice(index);
    let result = first.join("") + value + second.join("");
    return result;
  }

  function ChangeAll(string, substring, replacement) {
    let result = "";
    for (let letter of string) {
      if (letter !== substring) {
        result += letter;
      } else {
        let replace = letter.replace(letter, replacement);
        result += replace;
      }
    }
    return result;
  }

  console.log(`The decrypted message is: ${message}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

/* if (line[0] == "ChangeAll") {
  message = changeAll(message, line[1], line[2]);
} else if (line[0] == "Insert") {
  message = insert(message, line[1], line[2]);
} else if (line[0] == "Move") {
  message = move(message, line[1]);
}
 */