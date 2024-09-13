export function colorsFunc() {
  const colors = document.querySelectorAll(".color-wrapper");
  colors.forEach((element) => {
    element.addEventListener("click", function () {
      colors.forEach((item) => {
        item.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}
