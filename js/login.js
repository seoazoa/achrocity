window.onload = function () {
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
  langWord.addEventListener("click", function () {
    language.classList.toggle("language-box-active");
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
}