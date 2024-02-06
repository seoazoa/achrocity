window.onload = function () {
  //  <!-- top swiper -->
  var swiper = new Swiper(".sw-top", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-top-pg",
      clickable: true,
    //   dynamicBullets: true,
    },
    navigation: {
      nextEl: ".sw-next",
      prevEl: ".sw-prev",
    },
  });
};
