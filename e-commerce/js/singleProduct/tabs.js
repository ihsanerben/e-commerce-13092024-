export function tabsFunc() {
  const tabs = document.querySelectorAll(".tab-button");
  const tabsInfo = document.querySelectorAll(".tabsInfo");
  const singleTabs = document.querySelector(".single-tabs");

  tabsInfo[0].classList.add("active");

  singleTabs.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      e.preventDefault();
      tabs.forEach((element) => {
        element.classList.remove("active");
      });
      e.target.classList.add("active");

      tabsInfo.forEach((element) => {
        element.classList.remove("active");
        if (element.id === id) {
          element.classList.add("active");
        }
      });
    }
  });
}
