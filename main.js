let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let searchicon = document.querySelector("#search-icon");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
}
/*
searchicon.onclick = () => {
  searchicon.classList.toggle("fa-times");
  searchbar.classList.toggle("active");
}
*/
var swiper = new Swiper(".home-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

});





function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
    searchicon.classList.toggle("fa-times");
  }
  else {
    x.style.display = "block";
    searchicon.classList.toggle("fa-times");
  }
}