export function addToCartFunc() {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const productID = JSON.parse(localStorage.getItem("productID"));
  const products = JSON.parse(localStorage.getItem("products"));
  const addToButton = document.querySelector(".singleProductAddToCartButton");
  const quantity = document.querySelector(".quantity");
  const cartCount = document.querySelector(".header-cart-count");

  const currentProduct = products.find((item) => item.id === Number(productID));
  const currentProductInCart = cart.find((x) => x.id === Number(productID));

  if (currentProductInCart) {
    addToButton.setAttribute("disabled", "disabled");
  } else {
    addToButton.addEventListener("click", function () {
      cart.push({ ...currentProduct, quantity: Number(quantity.value) });
      localStorage.setItem("cart", JSON.stringify(cart));
      addToButton.setAttribute("disabled", "disabled");
      cartCount.innerHTML = cart.length;
    });
  }
}
