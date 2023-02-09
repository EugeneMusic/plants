const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav_list")
const wrapper = document.querySelector(".wrapper")
const body = document.querySelector(".body")

burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    body.classList.toggle("body_active");
});

const links = document.querySelectorAll(".header_link");

links.forEach(n => {
    n.addEventListener("click", () => {
        burger.classList.toggle("burger_active");
        nav.classList.toggle("nav_active");
        body.classList.toggle("body_active");
    })
});

const serviceBtnArr = document.querySelectorAll('.service_btn');
const cards = document.querySelectorAll('.card');
const garden = document.querySelectorAll('.garden-card');
const planting = document.querySelectorAll('.planting-card');
const lawn = document.querySelectorAll('.lawn-card');
let serviceCounter0 = 0;
let serviceCounter1 = 0;
let serviceCounter2 = 0;
let serviceCounterAll = serviceCounter0 + serviceCounter1 + serviceCounter2;
serviceBtnArr.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("service_btn__active")
        if (index === 0 && serviceCounter0 === 0) {
            if (serviceCounter1 === 0 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter1 === 1 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter1 === 0 && serviceCounter2 === 1) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter1 === 1 && serviceCounter2 === 1) {
                btn.classList.remove("service_btn__active")
                serviceCounter0--
            }
            return serviceCounter0++
        }
        if (index === 0 && serviceCounter0 === 1) {
            if (serviceCounter1 === 0 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter1 === 1 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter1 === 0 && serviceCounter2 === 1) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter1 === 1 && serviceCounter2 === 1) {
                btn.classList.remove("service_btn__active")
                serviceCounter0++
            }
            return serviceCounter0--
        }
        if (index === 1 && serviceCounter1 === 0) {
            if (serviceCounter0 === 0 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter0 === 0 && serviceCounter2 === 1) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter2 === 1) {
                btn.classList.remove("service_btn__active")
                serviceCounter1--
            }
            return serviceCounter1++
        }
        if (index === 1 && serviceCounter1 === 1) {
            if (serviceCounter0 === 0 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter2 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter0 === 0 && serviceCounter2 === 1) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter2 === 1) {
                btn.classList.remove("service_btn__active")
                serviceCounter1++
            }
            return serviceCounter1--
        }
        if (index === 2 && serviceCounter2 === 0) {
            if (serviceCounter0 === 0 && serviceCounter1 === 0) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter1 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter0 === 0 && serviceCounter1 === 1) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter1 === 1) {
                btn.classList.remove("service_btn__active")
                serviceCounter2--
            }
            return serviceCounter2++
        }
        if (index === 2 && serviceCounter2 === 1) {
            if (serviceCounter0 === 0 && serviceCounter1 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.remove("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter1 === 0) {
                garden.forEach(item => item.classList.remove("card__deactive"))
                lawn.forEach(item => item.classList.add("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter0 === 0 && serviceCounter1 === 1) {
                garden.forEach(item => item.classList.add("card__deactive"))
                lawn.forEach(item => item.classList.remove("card__deactive"))
                planting.forEach(item => item.classList.add("card__deactive"))
            }
            if (serviceCounter0 === 1 && serviceCounter1 === 1) {
                btn.classList.remove("service_btn__active")
                serviceCounter2++
            }
            return serviceCounter2--
        }
    })
})

alert("Привет!Сегодня 09.02 утром я снова стал отцом!=)Пожалуйста, посмотри мою работу как можно позже, совсем не успеваю! Заранее больое спасибо!")

