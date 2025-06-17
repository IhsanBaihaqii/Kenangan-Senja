// setup
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");
const shoopingBtn = document.querySelector("#shooping-btn");
const shoopingCart = document.querySelector(".shopping");

//toggle class active hamburger
hamburger.onclick = () => {
  navbar.classList.toggle("active");
};

// toggle class active search
searchBtn.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault(); //Mematikan aksi link pada href
};

// toggle class active shooping
shoopingBtn.onclick = (e) => {
  shoopingCart.classList.toggle("active");
  e.preventDefault(); //Mematikan aksi link pada href
};

// klik diluar elemen
document.addEventListener("click", function (e) {
  //navbar
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  //search button
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  //Shooping
  if (!shoopingBtn.contains(e.target) && !shoopingCart.contains(e.target)) {
    shoopingCart.classList.remove("active");
  }
});
