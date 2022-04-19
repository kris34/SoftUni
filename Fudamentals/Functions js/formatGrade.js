function solve(grade) {
  let condition = "";
  let formated = grade.toFixed(2);

  if (grade < 3) {
    condition = "Fail";
    formated = "2";
    grade = 2;
  } else if (grade < 3.5) {
    condition = "Poor";
  } else if (grade < 4.5) {
    condition = "Good";
  } else if (grade < 5.5) {
    condition = "Very good";
  } else {
    condition = "Excellent";
  }

  console.log(`${condition} (${formated})`);
}
solve(5);
