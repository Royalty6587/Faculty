"use strict";
let form,
  message,
  firstname,
  email,
  phonenumber,
  address,
  course,
  program,
  skills,
  more;

window.addEventListener("load", () => {
  form = document.querySelector(".signup-form"); // Changed "form" to ".signup-form"
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    firstname = document.querySelector("#first").value;
    address = document.querySelector("#address").value;
    skills = document.querySelector("#Skills").value; // Changed "#skill" to "#Skills"
    email = document.querySelector("#email").value;
    course = document.querySelector("#course").value;
    more = document.querySelector("#more").value;
    program = document.querySelector("#program").value;
    phonenumber = document.querySelector("#phone").value;
   
    message = `https://wa.me/2348068597140?text=Hello%2C%20I%20just%20registered%20for%20${course}.%0AHere%20are%20my%20details%3A%0AName%3A%20${firstname}.%0AAddress%3A%20${address}.%0AEmail%3A%20${email}.%0ASkills%3A%20${skills}.`;

    window.open(message);
  });
});
