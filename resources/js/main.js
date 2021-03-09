/* Image galleries */
const imgToExpand = document.querySelectorAll(".gallery .img-to-expand")
const expandedImg = document.querySelectorAll(".expanded-img")
const caption = document.querySelectorAll(".caption")

imgToExpand.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (index < 8) {
            expandedImg[0].src = this.src
            caption[0].innerText = this.alt
        } else {
            expandedImg[1].src = this.src
            caption[1].innerText = this.alt
        }
    })
})

/* Top Nav Burger Menu */
const header = document.getElementsByTagName("header")[0]
const nav = document.getElementsByClassName("top-nav-links")[0]
const burger = document.getElementsByClassName("top-nav-burger")[0]

burger.addEventListener("click", function () {
    header.classList.toggle("show-menu")
})

nav.addEventListener("click", function () {
    if (header.classList.contains("show-menu")) {
        header.classList.toggle("show-menu")
    }
})
