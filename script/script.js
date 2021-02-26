const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {
    rootMargin: "-400px 0px 0px 0px "
}; 
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        console.log(entry.target);

        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// menu 
const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar__links")
const navbarBox = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
    navbarBox.classList.toggle("change-line");
});
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change-nav");
});