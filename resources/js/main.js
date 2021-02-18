// Get the modal
const modal = document.getElementsByClassName("modal")[0]

// Get 'about' section to delegate
const delegation = document.getElementById("about")

// Get the modal content image
const modalImg = document.getElementsByClassName("modal-img")[0]

// Using bubbling to delegate events
delegation.onclick = function (event) {
    if (event.target.className == "img-to-modal") {
        modal.style.display = "block"
        modalImg.src = event.target.src
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
