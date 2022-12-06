const header = document.querySelector("header")

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 350) {
        header.style.backgroundColor = "white"
    }
    else if (window.pageYOffset < 350) {
        header.style.backgroundColor = "#F3C01B"
    }
})