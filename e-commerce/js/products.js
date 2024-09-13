import { glideStart } from "./glide.js";

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function addToCart(products) {
  let cartItems = document.querySelector(".header-cart-count");
  const buttons = [...document.getElementsByClassName("addToCart")]; //! array haline getirdikten sonra foreEach yapabiliyoruz.
  buttons.forEach((element) => {
    const inCart = cart.find((item) => item.id === Number(element.dataset.id));
    if (inCart) {
      element.setAttribute("disabled", "disabled");
    } else {
      element.addEventListener("click", function (e) {
        const id = e.target.dataset.id;
        const findProduct = products.find((caca) => caca.id === Number(id));
        cart.push({ ...findProduct, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        element.setAttribute("disabled", "disabled");
        cartItems.innerHTML = JSON.parse(localStorage.getItem("cart")).length;
      });
    }
  });
}

function productLink() {
  const productLink = document.getElementsByClassName("productLink");
  Array.from(productLink).forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      let id = e.target.dataset.id;
      localStorage.setItem("productID", JSON.stringify(id));
      window.location.href = "single-product.html";
    });
  });
}

function productsFunc(products) {
  const productsContainer = document.getElementById("product-list");

  let results = "";

  products.forEach((item) => {
    results += `
    <li class="product-item glide__slide">
              <div class="product-img">
                <a href="#">
                  <img src="${item.img.singleImage}" alt="" class="img1" />
                  <img src="${item.img.thumbs[1]}" alt="" class="img2" />
                </a>
              </div>
              <div class="product-info">
                <a href="#" class="product-title">${item.name}</a>
                <ul class="product-stars">
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-half"></i>
                  </li>
                </ul>
                <div class="product-prices">
                  <strong>$${item.price.newPrice.toFixed(2)}</strong>
                  <span>$${item.price.oldPrice.toFixed(2)}</span>
                </div>
                <span class="product-discount">-${item.discount}%</span>
                <div class="product-links">
                  <button class="bi bi-basket-fill addToCart" data-id=${
                    item.id
                  }></button>
                  <button class="bi bi-heart-fill"></button>
                  <a href="#" class="bi bi-eye-fill productLink" data-id = ${
                    item.id
                  }></a>
                  <a href="#" class="bi bi-share-fill"></a>
                </div>
              </div>
            </li>
    `;
    productsContainer ? (productsContainer.innerHTML = results) : "";
    addToCart(products);
  });
  glideStart();
  productLink();
}

export default productsFunc;
