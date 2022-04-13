function bonusScoringSystem(input) {
  let countStudents = Number(input[0]); // ?????????????
  let countLectures = Number(input[1]);
  let additionalBonus = Number(input[2]);
  let attendanceEachStudent = Number(input);

  let highestBonus = 0;
  let highestLectures = 0;
  let prevBonus = 0;

  for (let i = 3; i < input.length; i++) {
    attendanceEachStudent = Number(input[i]);

    let currentBonus =
      (attendanceEachStudent / countLectures) * (5 + additionalBonus);

    if (currentBonus > prevBonus && currentBonus > highestBonus) {
      highestBonus = currentBonus;
      highestLectures = attendanceEachStudent;
    }

    prevBonus = currentBonus;
  }
  console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`);
  console.log(
    `The student has attended ${Math.ceil(highestLectures)} lectures.`
  );
}
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);

//{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
