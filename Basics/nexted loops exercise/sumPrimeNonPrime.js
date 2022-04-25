function primeNonPrime(input) {
  let sumPrimeNum = 0;
  let sumNonPrime = 0;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "stop") {
    let num = Number(command);

    if (num < 0) {
      console.log("Number is negative");
      command = input[index];
      index++;
      continue;
    }

    if (num === 1) {
      sumPrimeNum += num;
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;

    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      sumPrimeNum += num;
    } else {
      sumNonPrime += num;
    }

    command = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
primeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
