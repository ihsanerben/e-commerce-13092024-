import { thumbsActiveFunction } from "./singleProduct/thumbsActive.js";
import { singleProductGlideFunc } from "./glide.js";
import { zoomFunc } from "./singleProduct/zoom.js";
import { colorsFunc } from "./singleProduct/colors.js";
import { sizesFunc } from "./singleProduct/sizes.js";
import { addToCartFunc } from "./singleProduct/addToCart.js";
import { tabsFunc } from "./singleProduct/tabs.js";
import { commentFunc } from "./singleProduct/comments.js";

let productID = localStorage.getItem("productID")
  ? JSON.parse(localStorage.getItem("productID"))
  : "1";

let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

function findProduct() {
  const title = document.querySelector(".singleProductTitle");
  const imgWrapper = document.querySelector(".single-image-wrapper");
  const oldPrice = document.querySelector(".singleProductOldPrice");
  const newPrice = document.querySelector(".singleProductNewPrice");
  const singleProductUl = document.querySelector(".singleProductUl");
  products.forEach((element) => {
    if (element.id == productID) {
      title.innerHTML = element.name;
      imgWrapper.innerHTML = `<img src=${element.img.singleImage} alt="" />`;
      oldPrice.innerHTML = `$${element.price.oldPrice.toFixed(2)}`;
      newPrice.innerHTML = `$${element.price.newPrice.toFixed(2)}`;
    }
  });
}

findProduct();

function singleProductBottomGlide() {
  const singleProductUl = document.querySelector(".singleProductUl");
  let result = ``;
  products.forEach((element) => {
    if (element.id == productID) {
      element.img.thumbs.forEach((miniIMG) => {
        result += `
        <li class="glide__slide">
            <img class="thumbsimg" src=${miniIMG} alt="" />
        </li>
        `;
      });
    }
  });
  singleProductUl.innerHTML = result;
  singleProductGlideFunc();
}

singleProductBottomGlide();
thumbsActiveFunction();
zoomFunc();
colorsFunc();
sizesFunc();
addToCartFunc();
tabsFunc();
commentFunc();
