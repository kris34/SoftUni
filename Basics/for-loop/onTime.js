function onTime(input) {
  let examH = Number(input[0]);
  let examM = Number(input[1]);
  let arriveH = Number(input[2]);
  let arriveM = Number(input[3]);

  let examTimeMin = examH * 60 + examM;
  let arriveTimeMin = arriveH * 60 + arriveM;

  if (examTimeMin < arriveTimeMin) {
    console.log("Late");
    let diff = Math.abs(examTimeMin - arriveTimeMin);
    let h = Math.floor(diff / 60);
    let m = diff % 60;
    if (h >= 1) {
      if (m < 10) {
        console.log(`${h}:0${m} hours after the start`);
      } else {
        console.log(`${h}:${m} hours after the start`);
      }
    } else {
      console.log(`${m} minutes after the start`);
    }
  } else if (
    arriveTimeMin === examTimeMin ||
    examTimeMin - arriveTimeMin <= 30
  ) {
    console.log("On time");
    let diff = Math.abs(arriveTimeMin - examTimeMin);
    if (diff !== 0) {
      let m = diff % 60;
      console.log(`${m} minutes before the start`);
    }
  } else {
    console.log("Early");
    let diff = Math.abs(arriveTimeMin - examTimeMin);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (h >= 1) {
      if (m < 10) {
        console.log(`${h}:0${m} hours before the start`);
      } else {
        console.log(`${h}:${m} hours before the start`);
      }
    } else {
      console.log(`${m} minutes before the start`);
    }
  }
}

onTime(["9", "30", "9", "50"]);
