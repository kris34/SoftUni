function race(input) {
  let namePattern = /[A-Za-z]/g;
  let distancePattern = /\d/g;

  while (input[0] !== 'end of race') {
    let line = input.shift();
    let name = line.match(namePattern);
    let distance = line.match(distancePattern);
    
  }
}
race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);
