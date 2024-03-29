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
  // ====================================== 메뉴 창
  let nav = document.querySelector(".mb-menu");
  let btMenu = document.querySelector(".mb-header-menu");
  let navClose = document.querySelector(".nav-close");
  btMenu.addEventListener("click", () => {
    nav.classList.add("mb-menu-active");
  });
  navClose.addEventListener("click", function () {
    nav.classList.remove("mb-menu-active");
  });
  // ======================================== 언어 펼침 기능
  const langWord = document.querySelector(".language-word");
  const language = document.querySelector(".language");
  const languageLi = document.querySelector(".language li");
  const languageLiList = document.querySelectorAll(".language li");
  langWord.addEventListener("click", function () {
  language.classList.toggle("language-box-active");
  });
  languageLiList.forEach(function(languageLi) {
    languageLi.style.transition = "all 0.5s";
  });
  // css의 transition: all 0.5s; 자바스크립트 기능
  setTimeout(function () {
    languageLi.style.transition = "all 0.5s";
  });
  // ====================================================
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
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    var topBanner = document.querySelector(".topbanner");
    if (window.scrollY > topBanner.offsetHeight) {
      header.classList.add("fixed");
      // topBanner.style.display = "none";
      topBanner.style.display = "opacity:0";
    } else {
      header.classList.remove("fixed");
      // topBanner.style.display = "block";
      topBanner.style.display = "opacity:1";
      document.body.style.paddingTop = "0";
    }
  });
  // ======== 하트 클릭 시 숫자 증가, 감소
  // 좋아요 숫자를 증가 또는 감소시키는 함수입니다.
  function toggleLikeCount() {
    var likeCount = parseInt(document.getElementById("likeCount").innerText);
    // 좋아요 상태에 따라 동작을 변경합니다.
    if (likeCount === 52) {
      // 현재 좋아요가 52일 때, 클릭하면 숫자가 1 감소합니다.
      likeCount--;
    } else {
      // 그 외의 경우(51) 클릭하면 숫자가 1 증가합니다.
      likeCount++;
    }
    // 변경된 좋아요 숫자를 화면에 반영합니다.
    document.getElementById("likeCount").innerText = likeCount;
  }
  // 하트를 클릭했을 때의 동작을 정의합니다.
  document
    .getElementById("heartContainer")
    .addEventListener("click", toggleLikeCount);
  // =================== 클릭 시 하트 변경 - STYLING GUIDE
  // 하트 아이콘을 클릭하여 상태를 변경하는 함수입니다.
  function toggleStylingHeartIcon() {
    // 현재 하트 아이콘의 상태를 확인합니다.
    var heartIcon = document.getElementById("heartIcon");
    var heartIconFull = document.getElementById("heartIconFull");
    // xi-heart-o가 보이는 경우(좋아요 상태가 아닌 경우) xi-heart를 보이도록 설정하고, xi-heart-o는 숨깁니다.
    if (heartIcon.style.display !== "none") {
      heartIcon.style.display = "none";
      heartIconFull.style.display = "inline";
    }
    // 그렇지 않으면(좋아요 상태인 경우) xi-heart를 숨기고 xi-heart-o를 보이도록 설정합니다.
    else {
      heartIcon.style.display = "inline";
      heartIconFull.style.display = "none";
    }
  }
  // 하트를 클릭했을 때의 동작을 정의합니다.
  document
    .getElementById("heartContainer")
    .addEventListener("click", function () {
      toggleStylingHeartIcon(); // 하트 아이콘을 토글합니다.
    });
  // ====================  클릭 시 하트 변경 - WEEKLY BEST
  function toggleHeartIcon() {
    // 현재 하트 아이콘의 상태를 확인합니다.
    var weeklyHeart = document.getElementById("weekly-heart1");
    var weeklyHeartFull = document.getElementById("weekly-heart-full1");
    // xi-heart-o가 보이는 경우(좋아요 상태가 아닌 경우) xi-heart를 보이도록 설정하고, xi-heart-o는 숨깁니다.
    if (weeklyHeart.style.display !== "none") {
      weeklyHeart.style.display = "none";
      weeklyHeartFull.style.display = "inline";
    }
    // 그렇지 않으면(좋아요 상태인 경우) xi-heart를 숨기고 xi-heart-o를 보이도록 설정합니다.
    else {
      weeklyHeart.style.display = "inline";
      weeklyHeartFull.style.display = "none";
    }
  }
  // 하트를 클릭했을 때의 동작을 정의합니다.
  document
    .getElementById("weekly-hearts1")
    .addEventListener("click", function () {
      toggleHeartIcon(); // 하트 아이콘을 토글합니다.
    });
  // ============================== 모든 요소에 동일한 코드 적용
  function toggleHeartIcon(heartId) {
    // 현재 하트 아이콘의 상태를 확인합니다.
    var weeklyHeart = document.getElementById(heartId);
    var weeklyHeartFull = document.getElementById(
      heartId.replace("heart", "heart-full")
    );

    // xi-heart-o가 보이는 경우(좋아요 상태가 아닌 경우) xi-heart를 보이도록 설정하고, xi-heart-o는 숨깁니다.
    if (weeklyHeart.style.display !== "none") {
      weeklyHeart.style.display = "none";
      weeklyHeartFull.style.display = "inline";
    }
    // 그렇지 않으면(좋아요 상태인 경우) xi-heart를 숨기고 xi-heart-o를 보이도록 설정합니다.
    else {
      weeklyHeart.style.display = "inline";
      weeklyHeartFull.style.display = "none";
    }
  }
  // 각 요소에 클릭 이벤트를 추가합니다.
  document
    .getElementById("weekly-hearts1")
    .addEventListener("click", function () {
      toggleHeartIcon("weekly-heart1"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("weekly-hearts2")
    .addEventListener("click", function () {
      toggleHeartIcon("weekly-heart2"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("weekly-hearts3")
    .addEventListener("click", function () {
      toggleHeartIcon("weekly-heart3"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("weekly-hearts4")
    .addEventListener("click", function () {
      toggleHeartIcon("weekly-heart4"); // 하트 아이콘을 토글합니다.
    });
  //  =======================================================
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
  //  <!-- 800px top swiper -->
  var swiper800 = new Swiper(".sw-top-800", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-top-pg-800",
      clickable: true,
      //   dynamicBullets: true,
    },
    navigation: {
      nextEl: ".sw-next-800",
      prevEl: ".sw-prev-800",
    },
  });
  //  <!-- 700px top swiper -->
  var swiper700 = new Swiper(".sw-top-700", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-top-pg-700",
      clickable: true,
      //   dynamicBullets: true,
    },
    navigation: {
      nextEl: ".sw-next-700",
      prevEl: ".sw-prev-700",
    },
  });
  //  <!-- 600px top swiper -->
  var swiper600 = new Swiper(".sw-top-600", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-top-pg-600",
      clickable: true,
      //   dynamicBullets: true,
    },
    navigation: {
      nextEl: ".sw-next-600",
      prevEl: ".sw-prev-600",
    },
  });
  //  <!-- 500px top swiper -->
  var swiper500 = new Swiper(".sw-top-500", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-top-pg-500",
      clickable: true,
      //   dynamicBullets: true,
    },
    navigation: {
      nextEl: ".sw-next-500",
      prevEl: ".sw-prev-500",
    },
  });
  //  <!-- center swiper -->
  var swiper = new Swiper(".sw-centerbanner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // =============================== 817px
  var swiper817 = new Swiper(".sw-817-centerbanner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-817-centerbanner-pg",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // =============================== 550px
  var swiper817 = new Swiper(".sw-550-centerbanner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-550-centerbanner-pg",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
