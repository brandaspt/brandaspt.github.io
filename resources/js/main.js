/* Image galleries */
const imgToExpand = document.querySelectorAll(".gallery .img-to-expand")
const expandedImg = document.querySelectorAll(".expanded-img")
const caption = document.querySelectorAll(".caption")

imgToExpand.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (index < 3) {
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
const closeBtn = document.getElementsByClassName("close-button")[0]

function toggleNav() {
    if (window.innerWidth <= 789) {
        header.classList.toggle("show-menu")
    }
}

burger.addEventListener("click", function () {
    header.classList.toggle("show-menu")
})

nav.addEventListener("click", function () {
    if (window.innerWidth <= 789) {
        header.classList.toggle("show-menu")
    }
})

window.addEventListener("resize", function () {
    if (this.innerWidth > 789 && header.classList.contains("show-menu")) {
        header.classList.toggle("show-menu")
    }
})
