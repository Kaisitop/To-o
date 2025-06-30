document.addEventListener("DOMContentLoaded", function() {

  // Credenciales simuladas (como si vinieran de un JSON)
  const credenciales = {
    usuario: "admin",
    password: "admin"
  };

  // Lógica de login
  const form = document.querySelector(".login-box");
  if(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const usuario = form.usuario.value.trim();
      const password = form.password.value.trim();
      if (usuario === credenciales.usuario && password === credenciales.password) {
        // Redirige al usuario a "modulos.html"
        window.location.href = "modulos.html";
      } else {
        alert("Usuario o contraseña incorrectos");
        form.password.value = "";
        form.password.focus();
      }
    });
  }

   // Lógica de logout
  const logoutBtn = document.getElementById("logoutBtn");
  if(logoutBtn) {
    logoutBtn.addEventListener("click", function(e) {
      e.preventDefault();
      // Aquí podrías limpiar localStorage/sessionStorage si usas sesión
      // localStorage.removeItem("sesion"); // ejemplo
      window.location.href = "index.html";
    });
  }

});