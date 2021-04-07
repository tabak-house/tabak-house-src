console.log('src/js/custom.js');


let btnMenu = document.querySelector(".mobheader__btn");
let navmenu = document.querySelector(".menu");
let burger = document.querySelector(".mobheader__span");
const Md = window.matchMedia("(min-width: 992px)");

btnMenu.onclick = function () {
  btnMenu.classList.toggle("active");
  burger.classList.toggle("active");
  navmenu.classList.toggle("menu");
  navmenu.classList.toggle("menu-mob");
};

function showMenu() {
  if (Md.matches) {
    navmenu.classList.remove("menu-mob");
    navmenu.classList.add("menu");
    btnMenu.classList.remove("active");
    burger.classList.remove("active");
  }
}

showMenu();
window.addEventListener("resize", showMenu, false);

$('.myCarousel').carousel({
  interval: 1000
})
