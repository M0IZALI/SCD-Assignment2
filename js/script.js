let contactForm = document.getElementsByClassName("contact-form")[0]
let msg = document.getElementById("msg")
contactForm.addEventListener("submit", function(e) {
    e.preventDefault()
    // alert("Message sent successfully! We'll get back to you soon.")
    msg.style.display = "block"
    setTimeout(() => {
        msg.style.display = "none"
    }, 2000)

})
