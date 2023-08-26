document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


// Mantener la sessión visible
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const mostrarLogin = document.getElementById("mostarLogin");
  
    if (isLoggedIn) {
      const username = localStorage.getItem("username");
      mostrarLogin.innerHTML = `<span class="nav-link">¡Bienvenido, ${username}!</span>`;
    } else {
      mostrarLogin.innerHTML = '<a class="nav-link" href="login.html">Iniciar sesión</a>';
    }
  });
  
