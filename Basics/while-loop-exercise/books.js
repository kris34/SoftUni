function books(input) {
  let book = input[0];
  let index = 1;
  let bookIsFound = false;
  let otherBooks = input[index];
  let counter = 0;

  while (otherBooks !== "No More Books") {
    if (otherBooks === book) {
      bookIsFound = true;
      break;
    }
    index++;
    otherBooks = input[index];
    counter++;
  }

  if (bookIsFound === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${counter} books.`);
  } else {
    console.log(`You checked ${counter} books and found it.`);
  }
}
books([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
