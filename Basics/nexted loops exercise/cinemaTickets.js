function solve(input) {
  let movieName = input[0];
  let freeSeats = Number(input[1]);
  let index = 2;
  let ticketType = input[index++];
  let standardCounter = 0;
  let kidCounter = 0;
  let studentCounter = 0;
  let totalTickets = 0;
  let totalTickets2 = 0;
  let takenSeats = freeSeats;

  while (movieName !== "Finish") {
    while (ticketType !== "End") {
      totalTickets++;
      takenSeats -= 1;
      if (ticketType === "student") {
        studentCounter++;
      } else if (ticketType === "kid") {
        kidCounter++;
      } else {
        standardCounter++;
      }
      if (takenSeats === 0) {
        break;
      }

      ticketType = input[index++];
    }

    if (ticketType === "End" || takenSeats === 0) {
      let percentage = (totalTickets / freeSeats) * 100;
      console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);
    }

    movieName = input[index++];

    freeSeats = Number(input[index++]);
    takenSeats = Number(freeSeats);
    ticketType = input[index++];
    totalTickets2 += totalTickets;
    totalTickets = 0;
  }

  console.log(`Total tickets: ${totalTickets2}`);
  let percetageStudent = (studentCounter / totalTickets2) * 100;
  let percentageStandard = (standardCounter / totalTickets2) * 100;
  let percentageKids = (kidCounter / totalTickets2) * 100;
  console.log(`${percetageStudent.toFixed(2)}% student tickets.`);
  console.log(`${percentageStandard.toFixed(2)}% standard tickets.`);
  console.log(`${percentageKids.toFixed(2)}% kids tickets.`);
}

solve([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
