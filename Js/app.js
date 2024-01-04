document.addEventListener("DOMContentLoaded", function () {
  const toggleIcon = document.querySelector(".lg\\:hidden.flex");
  const closeIcon = document.querySelector(".uil-multiply");
  const aside = document.querySelector("aside");
  const nav = document.querySelector("nav"); // Select the navigation element

  let isAsideVisible = false;

  toggleIcon.addEventListener("click", function () {
    aside.classList.remove("hidden", "lg:hidden");
    aside.style.width = "100%";
    aside.style.overflow = "auto";
    isAsideVisible = true;
  });

  closeIcon.addEventListener("click", function () {
    aside.style.width = "0";
    aside.style.overflow = "hidden";
    aside.classList.add("hidden", "md:hidden");
    isAsideVisible = false;
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 220) {
      nav.classList.add("fixed", "top-0", "left-0");
    } else {
      nav.classList.remove("fixed", "top-0", "left-0");
    }
  });

  // setTimeout(function () {
  //   var hiddenDiv = document.getElementById("hiddenDiv");
  //   hiddenDiv.style.display = "flex";
  // }, 2000);

  // document.getElementById("close-btn").addEventListener("click", ()=>{
  //   var hiddenDiv = document.getElementById("hiddenDiv");
  //   hiddenDiv.style.display = "none";
  // })
});

const swiperDown = new Swiper(".swiper-upper", {
  direction: "horizontal",
  loop: true,
  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: false,
  // },
  // effect: "cards",
  //     grabCursor: true,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let valuesDisplay = document.querySelectorAll(".auto-count");
let interval = 3000;
valuesDisplay.forEach((valuesDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valuesDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valuesDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

