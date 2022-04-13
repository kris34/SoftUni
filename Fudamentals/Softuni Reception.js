function softuniReception(arr) {
  let employee1 = Number(arr[0]);
  let employee2 = Number(arr[1]);
  let employee3 = Number(arr[2]);
  let students = Number(arr[3]);

  let totalStudents1Hour = employee1 + employee2 + employee3;
  let hourCount = 0;

  while (students > 0) {
    hourCount++;
    if (hourCount % 4 === 0) {
      continue;
    }
    students -= totalStudents1Hour;
    if (students <= 0) {
      console.log(`Time needed: ${hourCount}h.`);
      break;
    }
  }
}
softuniReception(["1", "1", "1", "18"]);
