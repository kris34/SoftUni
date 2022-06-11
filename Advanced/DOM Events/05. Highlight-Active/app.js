function focused() {
  Array.from(document.querySelectorAll("input")).forEach((i) => {
    i.addEventListener("focus", onFocus);
    i.addEventListener("blur", onBlur);
  });

  function onFocus(e) {
    e.target.parentElement.className = "focused";
  }
  function onBlur(e) {
    e.target.parentElement.className = "Blurred";
  }
}
