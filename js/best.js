window.onload = function () {
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
  // ====================  클릭 시 하트 변경 - BEST 상세페이지
  function togglebestHeartIcon() {
    // 현재 하트 아이콘의 상태를 확인합니다.
    var bestHeart = document.getElementById("best-heart1");
    var bestHeartFull = document.getElementById("best-heart-full1");
    // xi-heart-o가 보이는 경우(좋아요 상태가 아닌 경우) xi-heart를 보이도록 설정하고, xi-heart-o는 숨깁니다.
    if (bestHeart.style.display !== "none") {
      bestHeart.style.display = "none";
      bestHeartFull.style.display = "inline";
    }
    // 그렇지 않으면(좋아요 상태인 경우) xi-heart를 숨기고 xi-heart-o를 보이도록 설정합니다.
    else {
      bestHeart.style.display = "inline";
      bestHeartFull.style.display = "none";
    }
  }
  // 하트를 클릭했을 때의 동작을 정의합니다.
  document
    .getElementById("best-hearts1")
    .addEventListener("click", function () {
      togglebestHeartIcon(); // 하트 아이콘을 토글합니다.
    });
  // ============================== 모든 요소에 동일한 코드 적용
  function togglebestHeartIcon(bestHeartId) {
    // 현재 하트 아이콘의 상태를 확인합니다.
    var bestHeart = document.getElementById(bestHeartId);
    var bestHeartFull = document.getElementById(
      bestHeartId.replace("heart", "heart-full")
    );

    // xi-heart-o가 보이는 경우(좋아요 상태가 아닌 경우) xi-heart를 보이도록 설정하고, xi-heart-o는 숨깁니다.
    if (bestHeart.style.display !== "none") {
      bestHeart.style.display = "none";
      bestHeartFull.style.display = "inline";
    }
    // 그렇지 않으면(좋아요 상태인 경우) xi-heart를 숨기고 xi-heart-o를 보이도록 설정합니다.
    else {
      bestHeart.style.display = "inline";
      bestHeartFull.style.display = "none";
    }
  }
  // 각 요소에 클릭 이벤트를 추가합니다.
  document
    .getElementById("best-hearts1")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart1"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts2")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart2"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts3")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart3"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts4")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart4"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts4")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart4"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts4")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart4"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts5")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart5"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts6")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart6"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts7")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart7"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts8")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart8"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts9")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart9"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts10")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart10"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts11")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart11"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts12")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart12"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts13")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart13"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts14")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart14"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts15")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart15"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts16")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart16"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts17")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart17"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts18")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart18"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts19")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart19"); // 하트 아이콘을 토글합니다.
    });
  document
    .getElementById("best-hearts20")
    .addEventListener("click", function () {
      togglebestHeartIcon("best-heart20"); // 하트 아이콘을 토글합니다.
    });
  // ===================================
  // 각 색상 요소를 클릭할 때마다 토글되도록 설정
const colors = document.querySelectorAll('.colors p');
colors.forEach(color => {
  let isClicked = false; // 초기 클릭 상태를 false로 설정
  color.addEventListener('click', () => {
    // 클릭 상태에 따라 효과를 추가하거나 제거합니다.
    if (isClicked) {
      color.style.outline = ''; // 클릭된 경우 효과를 제거합니다.
    } else {
      color.style.outline = '2px solid #5d5d5d'; // 클릭되지 않은 경우 효과를 추가합니다.
    }
    isClicked = !isClicked; // 클릭 상태를 토글합니다.
  });
});

};
