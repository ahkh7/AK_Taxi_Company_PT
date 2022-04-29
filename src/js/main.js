/////////////////////////////////////////////////////////////////////////////////////////////////////
// !  |  |  |  |  |  |  |  |  |  |  |  |  |  Home Page  !  |  |  |  |  |  |  |  |  |  |  |  |  |  |
/////////////////////////////////////////////////////////////////////////////////////////////////////
// -
// -
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================  Menu Btn =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -
let menu_btn = document.querySelector("#menu_btn");
let nav_btns = document.querySelector("#nav_btns");
// ___________________________________________
menu_btn.addEventListener("click", () => {
  if (nav_btns.classList.contains("hidden")) {
    nav_btns.classList.remove("hidden");
  } else {
    nav_btns.classList.add("hidden");
  }
});
// -
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================  Top Button =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -
let top_btn = document.querySelector(".ak_back_to_top_1");
// ___________________________________________
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    top_btn.style.display = "block";
  } else {
    top_btn.style.display = "none";
  }
});
// -
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================  Navbar =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -
let navbar = document.querySelector(".navbar");
// ___________________________________________
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    navbar.style.cssText = "background-color : #1C819E; box-shadow: 0rem 0.001rem 0.7rem  rgb(27, 27, 27);";
  } else {
    navbar.style.cssText = "background-color:transparent";
  }
});
// -
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================  Active Class =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -
const sections = document.querySelectorAll(".section");

// ___________________________________________
window.addEventListener("scroll", function () {
  for (const section of sections) {
    // check wich section is in the viewPort
    bounding = section.getBoundingClientRect();
    if (bounding.top <= 150 && bounding.bottom >= 150) {
      // add active class to the active section
      section.classList.add("your-active-class");
      // add active class to the active Li
      document.querySelector(`.nav_li a[href='#${section.getAttribute("id")}']`).classList.add("ak_nav_active");
    } else {
      // remove active class from un-active sections
      section.classList.remove("your-active-class");
      // remove active class from un-active LIs
      document.querySelector(`.nav_li a[href='#${section.getAttribute("id")}']`).classList.remove("ak_nav_active");
    }
  }
});
