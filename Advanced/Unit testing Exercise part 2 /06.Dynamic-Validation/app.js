function validate() {
  let input = document.getElementById("email");

  let pattern = new RegExp("^[a-z]+@[a-z]+\\.[a-z]+");

  input.addEventListener("change", () => {
    if (pattern.test(input.value)) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  });
}
