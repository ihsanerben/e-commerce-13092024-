function searchFunc(products) {
  const searchList = document.querySelector(".modal-search .results");

  let result = "";
  products.forEach((element) => {
    result += `
        <div class="result-item" data-id=${element.id}>
            <img src=${element.img.singleImage} class="search-thumb">
            <div class="search-info">
              <h4>${element.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${element.price.newPrice.toFixed(
                2
              )}</span>
            </div>
        </div>
        `;
  });
  searchList.innerHTML = result;

  productRoute(products);
  searchInputDOM(products);
}

function productRoute(products) {
  const targetItems = document.querySelectorAll(
    ".modal-search .results .result-item"
  );
  targetItems.forEach((element) => {
    element.addEventListener("click", function () {
      const id = element.dataset.id;
      localStorage.setItem("productID", JSON.stringify(id));
      window.location.href = "single-product.html";
    });
  });
}

function searchInputDOM(products) {
  const searchList = document.querySelector(".modal-search .results");
  const input = document.querySelector(".modal-search .search-form input");
  let inputText = "";
  let filtered;
  input.addEventListener("input", () => {
    inputText = input.value;
    inputText = inputText.toLowerCase();
    inputText = inputText.trim();
    filtered = products.filter((x) =>
      x.name.toLowerCase().trim().includes(inputText)
    );
    let result = "";
    filtered.forEach((element) => {
      if (filtered.length < 2) {
        searchList.style.gridTemplateColumns = "1fr";
        result += `
          <div class="result-item" data-id=${element.id}>
              <img src=${element.img.singleImage} class="search-thumb">
              <div class="search-info">
                <h4>${element.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-price">$${element.price.newPrice.toFixed(
                  2
                )}</span>
              </div>
          </div>
          `;
      } else {
        searchList.style.gridTemplateColumns = "1fr 1fr";
        result += `
        <div class="result-item" data-id=${element.id}>
            <img src=${element.img.singleImage} class="search-thumb">
            <div class="search-info">
              <h4>${element.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${element.price.newPrice.toFixed(
                2
              )}</span>
            </div>
        </div>
        `;
      }
    });
    searchList.innerHTML = result;
    productRoute(products);
  });
}

export default searchFunc;
