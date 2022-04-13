function heroes(input) {
  let heroCount = Number(input.shift());

  let result = {};

  for (let i = 0; i < heroCount; i++) {
    let [hero, hp, mana] = input.shift().split(' ');
    hp = Number(hp);
    mana = Number(mana);

    result[hero] = {
      hp,
      mana,
    };
  }

  while (input[0] != 'End') {
    let [command, hero, num, spell] = input.shift().split(' - ');

    num = Number(num);

    if (command == 'CastSpell') {
      if (result[hero].mana >= num) {
        let diff = (result[hero].mana -= num);
        console.log(
          `${hero} has successfully cast ${spell} and now has ${diff} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spell}!`);
      }
    } else if (command == 'TakeDamage') {
      let diff = result[hero].hp - num;
      result[hero].hp -= num;
      if (result[hero].hp > 0) {
        console.log(
          `${hero} was hit for ${num} HP by ${spell} and now has ${diff} HP left!`
        );
      } else {
        delete result[hero];
        console.log(`${hero} has been killed by ${spell}!`);
      }
    } else if (command == 'Recharge') {
      let currMP = result[hero].mana;
      let newMP = (result[hero].mana += num);
      if (result[hero].mana > 200) {
        result[hero].mana = 200;
        newMP = 200;
      }
      let recharged = newMP - currMP;
      console.log(`${hero} recharged for ${recharged} MP!`);
    } else if (command == 'Heal') {
      let currHP = result[hero].hp;
      let newHP = (result[hero].hp += num);
      if (result[hero].hp > 100) {
        result[hero].hp = 100;
        newHP = 100;
      }
      let healed = newHP - currHP;
      console.log(`${hero} healed for ${healed} HP!`);
    }
  }

  for (let heroes in result) {
    console.log(heroes);
    console.log(`HP: ${result[heroes].hp}`);
    console.log(`MP: ${result[heroes].mana}`);
  }
}

heroes([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);
