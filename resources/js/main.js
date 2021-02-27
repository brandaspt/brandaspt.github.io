// Get the modal
const modal = document.getElementsByClassName("modal")[0]

// Get 'about' section to delegate
const delegation = document.getElementById("about-me")

// Get the modal content image
const modalImg = document.getElementsByClassName("modal-img")[0]

// Using bubbling to delegate events

delegation.onclick = function (event) {
    if (window.innerWidth >= 790) {
        if (event.target.className == "img-to-modal") {
            modal.style.display = "block"
            modalImg.src = event.target.src
        }
    }
}

// Option to iterate through the HTML collection and create the event on each index
/*
for (i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
        modal.style.display = "block"
        modalImg.src = this.src
    })
}
*/

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none"
}

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
