function solve(input) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (input >= 1 && input <= 7) {
    console.log(days[input - 1]);
  } else {
    console.log("Invalid day!");
  }
}
solve(7);
