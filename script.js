function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        quantity: document.getElementById("quantity").value,
        password: document.getElementById("password").value,
        Mr: document.getElementById("Mr.").value,
        Ms: document.getElementById("Ms.").value,
        phD: document.getElementById("phD").value,
        Comment: document.getElementById("comment").value,
        File: document.getElementById("file").value,
    }
    emailjs.send("template_1bymf0w",parms).them(alert("Email Sent!"))
}