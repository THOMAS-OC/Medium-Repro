const header = document.querySelector("header")
const headerBtn = document.querySelector(".link__nav__btn")

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 370) {
        header.style.backgroundColor = "white"
        headerBtn.style.backgroundColor = "rgb(26, 137, 23)"
    }
    else if (window.pageYOffset < 370) {
        header.style.backgroundColor = "#F3C01B"
        headerBtn.style.backgroundColor = "black"
    }
})