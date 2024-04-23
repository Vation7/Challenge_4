const body = document.querySelector("body");

// Función para aplicar el tema guardado al cargar la página
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }
}

// Ejecuta la función para aplicar el tema guardado al cargar la página
window.addEventListener("DOMContentLoaded", applySavedTheme);
