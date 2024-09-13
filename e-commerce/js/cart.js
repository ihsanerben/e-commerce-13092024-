let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function getCarts() {
  const data = JSON.parse(localStorage.getItem("cart"));
  const cartItems = document.querySelector(".table-body-wrapper");
  let result = ` `;

  data.forEach((element) => {
    result += `
                  <tr class="cart-item">
                      <td></td>
                      <td class="item-img">
                        <img src=${element.img.singleImage} alt="" />
                        <i class="bi bi-x x-minired xDelete" data-id = ${
                          element.id
                        }></i>
                      </td>
                      <td>${element.name}</td>
                      <td>$${element.price.newPrice.toFixed(2)}</td>
                      <td class="product-quantity">${element.quantity}</td>
                      <td class="product-subtotal">$${(
                        element.price.newPrice * element.quantity
                      ).toFixed(2)}</td>
                  </tr>
      `;
  });
  cartItems ? (cartItems.innerHTML = result) : "";
  removeCartItem();
}

getCarts();

function removeCartItem() {
  let cartItems = document.querySelector(".header-cart-count");
  const btnDeleteCartItem = document.querySelectorAll(".xDelete");
  btnDeleteCartItem.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      cart = cart.filter((x) => x.id !== Number(id));
      localStorage.setItem("cart", JSON.stringify(cart));
      cartItems.innerHTML = JSON.parse(localStorage.getItem("cart")).length;
      getCarts();
      total();
    });
  });
}

function total() {
  const cartSubtotal = document.getElementById("cartSubtotal");
  const fastCargo = document.getElementById("fastCargo");
  const cartTotal = document.getElementById("cartTotal");

  let sum = 0;
  cart.forEach((element) => {
    sum += element.price.newPrice * element.quantity;
  });
  cartSubtotal.innerHTML = `$${sum.toFixed(2)}`;

  fastCargo.addEventListener("change", function (e) {
    if (e.target.checked) {
      cartTotal.innerHTML = `$${(sum + 15).toFixed(2)}`;
    } else {
      cartTotal.innerHTML = `$${sum.toFixed(2)}`;
    }
  });

  cartTotal.innerHTML = `$${sum.toFixed(2)}`;
}
total();
