function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message")
    }

    emailjs.send("service_8a3bptw","template_qtcayl6", parms).then(alert("Email Sent!!!"))
}