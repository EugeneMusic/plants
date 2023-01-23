const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav_list")
const wrapper = document.querySelector(".wrapper")
const body = document.querySelector(".body")

burger.addEventListener("click", ()=> {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    body.classList.toggle("body_active");
});

const links = document.querySelectorAll(".header_link");

links.forEach(n => {n.addEventListener("click", ()=> {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    body.classList.toggle("body_active");
})});

