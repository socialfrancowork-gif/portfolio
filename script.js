// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();

// COUNTER

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const increment = target / 100;

    const updateCounter = () => {

      count += increment;

      if (count < target) {

        if (target >= 1000000) {

          counter.innerText =
            "+" + (count / 1000000).toFixed(1) + "M";

        } else {

          counter.innerText =
            "+" + Math.floor(count);

        }

        requestAnimationFrame(updateCounter);

      } else {

        if (target >= 1000000) {

          counter.innerText = "+1M";

        } else {

          counter.innerText = "+" + target;

        }

      }

    };

    updateCounter();

  });

};

startCounter();

// BACK TO TOP

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    backToTop.classList.add("active");

  } else {

    backToTop.classList.remove("active");

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const icon = themeToggle.querySelector("i");

  if (document.body.classList.contains("light-mode")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  } else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

});
