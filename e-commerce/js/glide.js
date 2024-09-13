const productsContainer = document.getElementById("product-list");

export function glideStart() {
  const config = {
    bound: true, //! carosel yerine bitince başa dönmesi için böyle yazdık
    perView: 4,
    gap: 20,
    autoplay: 3000,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productsContainer ? new Glide(".glide-ozellikleri", config).mount() : "";
}

export function singleProductGlideFunc() {
  const config2 = {
    perView: 5,
    breakpoints: {
      992: {
        perView: 4,
      },
    },
  };

  const singleProductBottomGlide = document.querySelector(
    ".singleProductBottomGlide"
  );

  singleProductBottomGlide
    ? new Glide(".singleProductBottomGlide", config2).mount()
    : "";
}
