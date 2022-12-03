let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let searchicon = document.querySelector("#search-icon");
let searchbar = document.querySelector("search-bar")
var y = 0

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


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
    
    if ((y % 1 ) == 0) {
      searchicon.classList.toggle("fa-times");
      ++y
    } 
    if ((y % 1 ) != 0) {
      searchbar.classList.toggle("active");
      ++y
    }
  } 
  else {
    x.style.display = "block";
    if ((y % 1 ) == 0) {
      searchicon.classList.toggle("fa-times");
      ++y
    } 
    if ((y % 1 ) != 0) {
      searchbar.classList.toggle("active");
      ++y
    }
  }
}