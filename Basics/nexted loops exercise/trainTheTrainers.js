function trainTheTrainers(input) {
  let countJury = Number(input[0]);
  let index = 1;
  let presentationName = input[index++];

  let studentAvgGrade = 0;
  let avgGrade = 0;
  let sumGrades = 0;
  let counter = 0;
  let allGrade = 0;

  while (presentationName !== "Finish") {
    let grades = Number(presentationName);
    sumGrades = 0;

    for (let gradeCounter = 1; gradeCounter <= countJury; gradeCounter++) {
      sumGrades += Number(input[index]);
      index++;
      counter++;
      if (gradeCounter == countJury) {
        studentAvgGrade = sumGrades / countJury;
        allGrade += sumGrades;
        break;
      }
    }
    if (presentationName !== "Finish") {
      console.log(`${presentationName} - ${studentAvgGrade.toFixed(2)}.`);
    }
    presentationName = input[index++];

    if (presentationName == "Finish") {
      avgGrade = allGrade / counter;
      console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
    }
  }
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
