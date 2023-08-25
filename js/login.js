
 // login.js

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("isLoggedIn", true);

      window.location.href = "index.html"; 
    }
  });
});
