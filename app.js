//* scroll to up functionality:
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
//* huberger selections:
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//* adding click event listener:
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//* close the hamburger when a link is clicked:
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);