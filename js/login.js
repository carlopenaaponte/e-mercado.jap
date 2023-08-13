document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, completa todos los campos.");
      } else {
        // Aquí puedes agregar cualquier lógica adicional de validación si es necesario
        // Por ejemplo, verificar credenciales con un servidor o realizar otras validaciones
  
        // Redirigir al índice principal
        window.location.href = "index.html"; // Cambia "index.html" por la URL de tu página principal
      }
    });
  });
  