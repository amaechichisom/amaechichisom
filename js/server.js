var nodemailer = require('nodemailer');
var express = require('express');
var app= express();


var name = getElementById("name");
var email = getElementById("email");
var subject = getElementById("subject")
var message = getElementById("message");
// Get the modal
var modal = document.getElementById("myModal");
var success = document.getElementById("successemail");
var errormail = document.getElementById("errormail");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// app.post('/AMAECHI_CHISOM', function(req, res){
//     var file = __dirname + '/downloads/Amaechi_Chisom.pdf';
//     res.download(file);
   
// });


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amaechilegend@gmail.com',
    pass: 'legendary'
  }
});

var mailOptions = {
  from: 'amaechilegend@gmail.com',
  to: `${email}`,
  subject: `${subject} from ${name}`,
  text: `${message}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    modal.style.display = "block";
    successemail.style.display = "none";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    console.log(error);
  } else {
    modal.style.display = "block";
    errormail.style.display = "none";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    console.log('Email sent: ' + info.response);
  }
});