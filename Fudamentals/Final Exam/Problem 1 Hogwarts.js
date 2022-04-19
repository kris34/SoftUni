function hogwarts(input) {
  let word = input.shift();

  while (input[0] != 'Abracadabra') {
    let line = input.shift().split(' ');
    let spell = line[0];

    if (spell == 'Abjuration') {
      word = Abjuration(word);
      console.log(word);
    } else if (spell == 'Necromancy') {
      word = Necromancy(word);
      console.log(word);
    } else if (spell == 'Divination') {
      if (word.includes(line[1])) {
        word = Divination(word, line[1], line[2]);
        console.log(word);
      }
    } else if (spell == 'Alteration') {
      if (word.includes(line[1])) {
        word = Alteration(word, line[1]);
        console.log(word);
      }
    } else if (spell == 'Illusion') {
      let index = Number(line[1]);
      let char = line[2];
      if (index >= 0 && index < word.length) {
        word = Illusion(word, index, char);
        console.log('Done!');
      } else {
        console.log('The spell was too weak.');
      }
    } else {
      console.log(`The spell did not work!`);
    }
  }
  function Abjuration(string) {
    string = string.toUpperCase();
    return string;
  }

  function Necromancy(string) {
    string = string.toLowerCase();
    return string;
  }

  function Illusion(string, index, letter) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      if (i == index) {
        result += letter;
      } else {
        result += string[i];
      }
    }
    return result;
  }

  function Divination(string, substring, replacement) {
    string = string.split(substring).join(replacement);
    return string;
  }

  function Alteration(string, substring) {
    return (string = string.split(substring).join(''));
  }
}
hogwarts([
  'A7ci0',
  'Illusion 1 c',
  'Illusion 4 o',
  'Abjuration',
  'Abracadabra',
]);
