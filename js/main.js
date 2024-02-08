window.onload = function () {
  // 팝업창 닫기
  function closePopup() {
    var popup = document.getElementById("pop-up");
    popup.style.display = "none";
  }
  var closeButton = document.getElementById("close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      closePopup();
    });
  }
  // top 버튼 스크롤 기능
  var topBtn = document.getElementById("top-btn");
  var downBtn = document.getElementById("down-btn");
  // 맨 위로 이동하는 버튼 클릭 시
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // 맨 아래로 이동하는 버튼 클릭 시
  downBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
  // 스크롤 시 헤더 고정, 탑 베너 사라짐
  // window.addEventListener("scroll", function(){
  //   var header = document.querySelector(".header");
  //   var topBanner = document.querySelector(".topbanner")
  //   if (window.scrollY > topBanner.offsetHeight) {
  //     header.classList.add("fixed");
  //     topBanner.style.display = "none";
  //   }
  //   else{
  //     header.classList.remove('fixed');
  //     topBanner.style.display = 'block';
  //   }
  // })
  window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var topBanner = document.querySelector(".topbanner");
    
    if (window.scrollY > topBanner.offsetHeight) {
      header.classList.add("fixed");
      topBanner.style.display = "none";
      document.body.style.paddingTop = header.offsetHeight + 100 + "px";
    } else {
      header.classList.remove("fixed");
      topBanner.style.display = "block";
      document.body.style.paddingTop = "0";
    }
  });
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
