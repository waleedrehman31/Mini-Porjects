const sliderContainer = document.getElementById("slider-container");
const slideRight = document.getElementById("right-slide");
const slideLeft = document.getElementById("left-slide");
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activesSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activesSlideIndex = activesSlideIndex + 1;
    if (activesSlideIndex > slidesLength - 1) {
      activesSlideIndex = 0;
    }
  } else if (direction === "down") {
    activesSlideIndex = activesSlideIndex - 1;
    if (activesSlideIndex < 0) {
      activesSlideIndex = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activesSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activesSlideIndex * sliderHeight
  }px)`;
};

console.log(slidesLength);
