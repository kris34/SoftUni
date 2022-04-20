function getYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      console.log("no");
    } else {
      console.log("yes");
    }
  } else if (year % 4 === 0 && year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
getYear(1900);
