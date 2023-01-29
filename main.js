

// sliding through the reviews
const right = document.querySelector('#right');
const left = document.querySelector('#left');

const reviewList = document.querySelector(".review-list");

function slideLeft() {
    // reviewList.style.transition = "transform 1s ease-in-outs"
    reviewList.scrollLeft += (window.innerWidth) * .6;
}

function slideRight() {
    reviewList.scrollLeft -= (window.innerWidth) * .6;
    console.log ("right")
}

// Toogling Nav link Button
const mobile = document.querySelector(".mobile");
const navLink = document.querySelector(".nav-link");
const xButton = document.querySelector('.x-button')

let flag = true;

xButton.addEventListener("click", () => {
    if (flag) {
        flag = !flag
        mobile.style.display = "none";
        navLink.style.display = "flex";
        xButton.style.display = "flex";
    } else {
        flag = !flag;
        mobile.style.display = "flex";
        navLink.style.display = "none";
        xButton.style.display = "none";
    }
})

mobile.addEventListener("click", () => {
    console.log("mobile");
    if (flag) {
        flag = !flag
        mobile.style.display = "none";
        navLink.style.display = "flex";
        xButton.style.display = "flex";
    } else {
        flag = !flag;
        mobile.style.display = "flex";
        navLink.style.display = "none";
        xButton.style.display = "none";
    }
})

// Resize listerner

window.addEventListener('resize', function (event) {
    console.log(event.target.innerWidth)
    let width = event.target.innerWidth;
    if (width >= 920) {
        navLink.style.display = "flex";
        xButton.style.display = "none";
        mobile.style.display = "none";
    } else if (navLink.style.display === "flex") {
        // mobile.style.display = "flex";
        xButton.style.display = "flex";
        navLink.style.display = "flex";
        mobile.style.display = "none";
    } else {
        mobile.style.display = "flex";
    }
}, true);