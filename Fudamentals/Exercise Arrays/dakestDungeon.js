function solve(input) {
  let rooms = input[0].split("|");
  console.log(rooms);
  let coins = 0;
  let health = 100;
  let isSurvived = true;
  let tempHealth = 0;
  let diff = 0;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" ");

    if (room[0] === "potion") {
      let curHealth = Number(room[1]);
      if (health <= 100) {
        if (health + curHealth >= 100) {
          curHealth = 100 - health;
          health = 100;
        } else {
          health += curHealth;
        }
      }

      console.log(`You healed for ${curHealth} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] === "chest") {
      console.log(`You found ${Number(room[1])} coins.`);
      coins += Number(room[1]);
    } else {
      health -= room[1];
      if (health > 0) {
        console.log(`You slayed ${room[0]}.`);
      } else {
        console.log(`You died! Killed by ${room[0]}.`);
        console.log(`Best room: ${i + 1}`);
        isSurvived = false;
        break;
      }
    }
  }

  if (isSurvived) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
