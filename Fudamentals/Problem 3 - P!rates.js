function pirates(input) {
  let result = {};

  while (input[0] != 'Sail') {
    let tokens = input.shift().split('||');
    let city = tokens[0];
    let people = Number(tokens[1]);
    let gold = Number(tokens[2]);   
    if (result.hasOwnProperty(city)) {
      result[city].gold += gold;
      result[city].people += people;
    } else {
      result[city] = {
        people,
        gold,
      };
    }
  }
  input.shift();

  while (input[0] != 'End') {
    let line = input.shift().split('=>');

    if (line[0] == 'Plunder') {
      result[line[1]].people -= line[2];
      result[line[1]].gold -= line[3];
      if (result[line[1]].people || result[line[1]].gold <= 0) {

      }
    }
  }
}
pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
