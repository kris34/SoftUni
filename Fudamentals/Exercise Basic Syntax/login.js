function login(user) {
  let username = user.shift();
  let splitUsername = username.split("");
  let reverseUsername = splitUsername.reverse();
  let joinUsername = splitUsername.join("");

  let pass = user.shift();

  let counter = 0;

  while (pass !== joinUsername) {
    counter++;

    if (pass === joinUsername) {
      console.log(`User ${username} logged in.`);
      break;
    } else if (counter === 4) {
      console.log(`User ${username} blocked!`);
      break;
    } else {
      console.log(`Incorrect password. Try again.`);
    }

    pass = user.shift();
  }

  if (pass === joinUsername) {
    console.log(`User ${username} logged in.`);
  }
}
login(["eAcr", "login", "go", "let me in", "recA"]);
