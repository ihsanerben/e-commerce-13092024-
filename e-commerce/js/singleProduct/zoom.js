export function zoomFunc() {
  const imgWrapper = document.querySelector(".single-image-wrapper");
  const img = document.querySelector(".single-image-wrapper img");

  imgWrapper.addEventListener("mousemove", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(5)";
  });

  imgWrapper.addEventListener("mouseleave", function () {
    img.style.transform = "scale(1)";
  });
}
