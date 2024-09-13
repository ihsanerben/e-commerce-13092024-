export function sizesFunc() {
  const sizes = document.querySelectorAll(".values-list span");
  sizes.forEach((element) => {
    element.addEventListener("click", function () {
      sizes.forEach((item) => {
        item.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}
