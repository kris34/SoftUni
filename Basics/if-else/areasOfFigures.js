function areasOfFigures(input) {
  let figure = input[0];

  if (figure === "square") {
    let squareSide = Number(input[1]);
    let area = squareSide * squareSide;
    console.log(area.toFixed(3));
  } else if (figure === "rectangle") {
    let rectangleSideOne = Number(input[1]);
    let rectangleSideTwo = Number(input[2]);
    let area = rectangleSideOne * rectangleSideTwo;
    console.log(area.toFixed(3));
  } else if (figure === "circle") {
    let circleRadius = Number(input[1]);
    let area = circleRadius * circleRadius * Math.PI;
    console.log(area.toFixed(3));
  } else if (figure === "triangle") {
    let triangleSideOne = Number(input[1]);
    let triangleSideTwo = Number(input[2]);
    let area = (triangleSideOne / 2) * triangleSideTwo;
    console.log(area.toFixed(3));
  }
}
areasOfFigures(["circle", "6"]);
