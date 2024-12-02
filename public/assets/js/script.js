// toogle menu button
const hamBurger = document.querySelector(".toggle-btn")

// the toggle function removes or adds a class to an element
hamBurger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand")
})

// modal
const modalTrigger = document.querySelector(".trigger")

modalTrigger.addEventListener("click", function () {
    // To open the modal
    const modal = new bootstrap.Modal(document.getElementById("ticketModal"))
    modal.show()

    // To close the modal
    modal.hide()
})
