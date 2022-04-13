function vacationBooksList(input) {
  let numberOfPages = Number(input[0]);
  let pagesForOneHour = Number(input[1]);
  let days = Number(input[2]);

  let totalHours = numberOfPages / pagesForOneHour;
  let hoursNeeded = totalHours / days;
  console.log(hoursNeeded);
}
vacationBooksList(["212 ", "20 ", "2 "]);
