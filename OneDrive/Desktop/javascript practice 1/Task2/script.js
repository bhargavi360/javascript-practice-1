const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let count = 10;
const countdownElement = document.getElementById("countdown");
slides[currentIndex].style.display = "block";
countdownElement.textContent = count;

const interval = setInterval(() => {
  slides[currentIndex].style.display = "none";

  count--;
  currentIndex++;

  if (count > 0) {
    slides[currentIndex].style.display = "block";
    countdownElement.textContent = count;
  } 
}, 1000);