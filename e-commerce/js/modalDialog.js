//! modalDialog start
function modalDialogFunc() {
  const xDOM = document.querySelector(".modalDialog .content .bi-x");
  const modalDialogDOM = document.querySelector(".modalDialog");
  const modalDialogContentDOM = document.querySelector(".modalDialog .content");

  xDOM.addEventListener("click", () => {
    modalDialogDOM.classList.remove("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(modalDialogContentDOM)) {
      modalDialogDOM.classList.remove("show");
    }
  });

  setTimeout(() => {
    modalDialogDOM.classList.add("show");
  }, 3000);
}
modalDialogFunc();
//! modalDialog start
