function thePianist(input) {
  let number = Number(input.shift());
  let result = {};

  for (let i = 0; i < number; i++) {
    let tokens = input.shift().split('|');
    let name = tokens[0];
    let composer = tokens[1];
    let key = tokens[2];

    result[name] = {
      composer,
      key,
    };
  }

  while (input[0] != 'Stop') {
    let token = input.shift().split('|');

    if (token[0] == 'Add') {
      if (result.hasOwnProperty(token[1])) {
        console.log(`${token[1]} is already in the collection!`);
      } else {
        let name = token[1];
        let composer = token[2];
        let key = token[3];
        result[name] = {
          composer,
          key,
        };
        console.log(
          `${token[1]} by ${token[2]} in ${token[3]} added to the collection!`
        );
      }
    } else if (token[0] == 'Remove') {
      if (result.hasOwnProperty(token[1])) {
        delete result[token[1]];
        console.log(`Successfully removed ${token[1]}!`);
      } else {
        console.log(
          `Invalid operation! ${token[1]} does not exist in the collection.`
        );
      }
    } else if (token[0] == 'ChangeKey') {
      let pieceNew = token[1];
      let keyNew = token[2];
      if (result.hasOwnProperty(token[1])) {
        result[pieceNew].key = keyNew;
        console.log(`Changed the key of ${pieceNew} to ${keyNew}!`);
      } else {
        console.log(`Invalid operation! ${token[1]}} does not exist in the collection.
        `);
      }
    }
  }

  let entries = Object.entries(result);

  for (let [name, properties] of entries) {
    console.log(
      `${name} -> Composer: ${properties.composer}, Key: ${properties.key}`
    );
  }
}
thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);
