// Mostrar modal de inicio de sesión
function showLogin() {
    document.getElementById("login-modal").style.display = "block";
}

// Mostrar modal de registro
function showRegister() {
    document.getElementById("register-modal").style.display = "block";
}

// Cerrar modal (puedes añadir botones en los modales para cerrar)
function closeModal() {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("register-modal").style.display = "none";
}

// Simular inicio de sesión y redirigir al tutorial
function login() {
    closeModal(); // Cierra el modal de inicio de sesión
    window.location.href = "loading.html"; // Redirige a la pantalla de carga
}

// Función para mostrar el tutorial tras la pantalla de carga
function redirectToTutorial() {
    setTimeout(() => {
        window.location.href = "tutorial.html"; // Cambia a la página del tutorial después de unos segundos
    }, 3000); // Tiempo de carga en milisegundos (3 segundos)
}

// Llamar a redirectToTutorial si estamos en loading.html
if (window.location.pathname.includes("loading.html")) {
    redirectToTutorial();
}
