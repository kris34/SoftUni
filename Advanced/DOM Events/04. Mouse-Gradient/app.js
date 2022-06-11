function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", onMouseMove);
  let result = document.getElementById("result")

  function onMouseMove(e) {
    result.textContent =
      Math.floor((e.offsetX / gradient.clientWidth) * 100) + "%";
  }
}
