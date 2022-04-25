function graduation(input) {
  let name = input[0];
  let grades = 1;
  let totalGrade = 0;
  let excluded = 0;
  let index = 0;
  let grade = Number(input[index++]);

  while (grades <= 12) {
    grade = Number(input[index++]);
    if (grade < 4.0) {
      excluded++;
      if (excluded > 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
        break;
      }
      continue;
    }
    totalGrade += grade;
    grades++;
  }
  if (excluded <= 1) {
    let average = totalGrade / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}
`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
