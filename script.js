const container = document.querySelector(".food-rows");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const container1 = document.querySelector(".food-rows1");
const leftBtn1 = document.querySelector(".left1");
const rightBtn1 = document.querySelector(".right1");
const container2 = document.querySelector(".food-rows2");
const leftBtn2 = document.querySelector(".left2");
const rightBtn2 = document.querySelector(".right2");

rightBtn.addEventListener("click", () => {
    container.scrollBy({
        left: 400,
        behavior: "smooth"
    });
});

leftBtn.addEventListener("click", () => {
    container.scrollBy({
        left: -400,
        behavior: "smooth"
    });
});

rightBtn1.addEventListener("click", () => {
    container1.scrollBy({
        left: 400,
        behavior: "smooth"
    });
});

leftBtn1.addEventListener("click", () => {
    container1.scrollBy({
        left: -400,
        behavior: "smooth"
    });
});

rightBtn2.addEventListener("click", () => {
    container2.scrollBy({
        left: 400,
        behavior: "smooth"
    });
});

leftBtn2.addEventListener("click", () => {
    container2.scrollBy({
        left: -400,
        behavior: "smooth"
    });
});

function showMore(){
    const extras = document.querySelectorAll(".extra");
    extras.forEach(row => row.classList.remove("hidden"));//removes the hidden class
    document.getElementById("button").style.display = "none";//hides the button containing div
}

function showMore1(){
    const extras = document.querySelectorAll(".extra1");
    extras.forEach(row => row.classList.remove("hidden"));//removes the hidden class
    document.getElementById("button1").style.display = "none";//hides the button containing div
}