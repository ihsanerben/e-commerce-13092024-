export function thumbsActiveFunction() {
  const thumbs = document.querySelectorAll(".singleProductUl li img");
  const singleImage = document.querySelector(".single-image-wrapper img");
  thumbs[0].classList.add("active");
  thumbs.forEach((element) => {
    element.addEventListener("click", function () {
      singleImage.src = element.src;
      thumbs.forEach((activeIMG) => {
        activeIMG.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}
