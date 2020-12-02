// count down script
// Set the date we're counting down to
let countDownDate = new Date("Aug 06, 2021 15:37:25").getTime();

// Update the count down every 1 second
let countdownfunction = setInterval(function () {
  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now an the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days +
    "Days " +
    hours +
    "Hours " +
    minutes +
    "Minutes " +
    seconds +
    "Seconds ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// sticky nav

window.addEventListener("scroll", navToggel);
const navigationBar = document.querySelector(".main-header");
function navToggel() {
  if (window.scrollY > 170) {
    navigationBar.classList.add("fixedNavbar");
  } else {
    navigationBar.classList.remove("fixedNavbar");
  }
}

// banner slider
// let i = 0;
// let images = [];
// let time = 1000;

// // images

// images[0] = "./assets/img/home_slider_background.jpg";
// images[1] = "./assets/img/home_slider2.jpg";
// images[2] = "./assets/img/home_slider3.jpg";
// images[3] = "./assets/img/home_slider4.jpg";
// images[4] = "./assets/img/home_slider5.jpg";

// // change image
// function changeImg() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     let=i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeImg()", time);
// }
// window.onload = changeImg;

var images = [
  "../assets/img/home_slider_background.jpg",
  "../assets/img/home_slider2.jpg",
  "../assets/img/home_slider3.jpg",
  "../assets/img/home_slider4.jpg",
  "../assets/img/home_slider5.jpg",
];

let i = 0;
function slider() {
  document.getElementById("sliderimg").src = images[i];
  if (i < images.length - 1) {
    let = i++;
  } else {
    i = 0;
  }
}
setInterval(slider, 3000);

// slide arrow

let slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "flex";
}
