//  show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// menu show if clicked
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//menu close if clicked
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu mobile when it is click on a nav link
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((e) => e.addEventListener("click", linkAction));

//change background of the background header
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// calculate JS
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (event) => {
  event.preventDefault();
  //  check if the field have any value
  if (calculateCm.value === "" || calculateKg.value === "") {
    //add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");
    //show message
    calculateMessage.textContent = "Fill in the height and weight";
    //remove message after three sec
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // calculate the BMI formula
    const cm = calculate.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));
    //show the health status
    if (bmi < 18.5) {
      // show the message with color
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = "your BMI is ${bmi} and you are skinny ";
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = "your BMI is ${bmi} and you are healthy";
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent =
        "your BMI is ${bmi} and you are over-weight";
    }
    //clear all
    calculateCm.value = "";
    calculateKg.vlaue = "";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};
calculateForm.addEventListener("submit", calculateBmi);

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = curent.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.add("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
