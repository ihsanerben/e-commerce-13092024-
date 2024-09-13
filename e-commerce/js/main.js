import header from "./header.js";
import products from "./products.js";
import searchFunc from "./search.js";

//! add proudcts to localstorage start
(async function loudData() {
  //! kendiliğinden çağırılan metot
  const link = await fetch("../js/data.json");
  const data = await link.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];

  products(data);
  searchFunc(data);
})();
//! add proudcts to localstorage end

//! cart items start
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! cart items end
