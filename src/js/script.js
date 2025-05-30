//Hide|Show Header ======
const nav = document.querySelector("nav");

var isUp = true;
var isOver;
nav.addEventListener("mouseenter", () => {
    isOver = true;
    nav.style.opacity = "1";
})

nav.addEventListener("mouseleave", () => {
    isOver = false;
    if (!isUp){        
        nav.style.opacity = "0";
    }
})
window.onscroll = function() {
    currentScrollPos = window.pageYOffset;
    if (50 > currentScrollPos) {
      nav.style.opacity = "1";
      isUp = true;
    } else if (50 <= currentScrollPos && !isOver) {
      nav.style.opacity = "0";
      isUp = false;
    }
}

//Carrousel
const carouselbuttons = document.querySelectorAll("[data-carousel-button]");

carouselbuttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "prev" ? -1 : 1
        console.log(offset);        
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    })
});