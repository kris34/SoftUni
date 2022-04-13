function secretChat(input) {
  let message = input.shift();

  let functions = {
    InsertSpace,
    Reverse,
    ChangeAll,
  };

  while (input[0] != 'Reveal') {}

  function InsertSpace(string, index) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
      if (i == index) {
        result += '  ';
      }
      result += string[i];
    }
    return result;
  }

  function Reverse(string, substring) {
    let result = '';
    let index = string.indexOf(substring);
    if (index != -1) {
      let left = string.slice(0, index);
      let right = string.slice(index + substring.length);
      result = left + right + substring.split('').reverse().join('');
    } else {
      console.log('error');
    }
    return result;
  }

  function ChangeAll(string, substring, replacement) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
      if (string[i] == substring) {
        result += replacement;
      } else {
        result += string[i];
      }
    }
    return result;
  }
}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);
