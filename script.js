// toggle class active hamburger
const navbar = document.querySelector(".navbar");
//di klik
document.querySelector("#hamburger").onclick = () => {
  navbar.classList.toggle("active");
};

// toggle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");
searchBtn.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault(); //Mematikan aksi link pada href
};

// klik diluar elemen
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  //navbar
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  //search button
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
