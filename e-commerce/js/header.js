function sidebarFunc() {
  //! home side bar start
  const btnOpenSideBar = document.querySelector("#btn-menu");
  const sidebar = document.querySelector("#sidebar");
  const btnXSidebar = document.querySelector("#sidebar-x");

  btnOpenSideBar
    ? btnOpenSideBar.addEventListener("click", function () {
        sidebar ? (sidebar.style.left = 0) : "";
        sidebar ? (sidebar.style.zIndex = 5) : "";
      })
    : "";

  btnXSidebar
    ? btnXSidebar.addEventListener("click", function () {
        sidebar ? (sidebar.style.left = "-100%") : "";
      })
    : "";
  //! home side bar end

  //! click sidebar outside start
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSideBar)
    ) {
      sidebar ? (sidebar.style.left = "-100%") : "";
    }
  });
  //! click sidebar outside end
}

function modalSearchFunc() {
  //! search modal start
  const btnModalSearch = document.querySelector("#btn-modalSearch");
  const modalSearch = document.querySelector("#modalSearch");
  const modalSearchWrapper = document.querySelector("#modal-wrapper");
  const btnXModalSearch = document.querySelector("#btn-xModalSearch");

  const headerDOM = document.querySelector("header");

  function modalSearchStartFunc() {
    btnModalSearch
      ? btnModalSearch.addEventListener("click", function () {
          modalSearch ? (modalSearch.style.visibility = "visible") : "";
          modalSearch ? (modalSearch.style.opacity = 1) : "";
          headerDOM.style.visibility = "hidden";
        })
      : "";
  }
  //! search modal end

  //! click modalsearch outside start
  function modalSearchEndFunc() {
    document.addEventListener("click", function (event) {
      if (
        !event.composedPath().includes(modalSearchWrapper) &&
        !event.composedPath().includes(btnModalSearch)
      ) {
        modalSearch ? (modalSearch.style.visibility = "hidden") : "";
        modalSearch ? (modalSearch.style.opacity = 0) : "";
        headerDOM.style.visibility = "visible";
      }
    });

    btnXModalSearch
      ? btnXModalSearch.addEventListener("click", function () {
          modalSearch ? (modalSearch.style.visibility = "hidden") : "";
          modalSearch ? (modalSearch.style.opacity = 0) : "";
          headerDOM.style.visibility = "visible";
        })
      : "";
  }
  //! click modalsearch outside end
  modalSearchStartFunc();
  modalSearchEndFunc();
}

function headerGeneralFunction() {
  sidebarFunc();
  modalSearchFunc();
}

export default headerGeneralFunction();
