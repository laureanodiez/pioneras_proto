// Mostrar modal de inicio de sesión
function showLogin() {
    document.getElementById("login-modal").style.display = "block";
}

// Mostrar modal de registro
function showRegister() {
    document.getElementById("register-modal").style.display = "block";
}

// Cerrar todos los modales
function closeModal() {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("register-modal").style.display = "none";
}

// Simular inicio de sesión y redirigir al tutorial
function login() {
    closeModal(); // Cierra el modal actual
    window.location.href = "loading.html"; // Redirige a la pantalla de carga
}

// Función para continuar sin registrarse e ir al tutorial
function continueWithoutLogin() {
    window.location.href = "loading.html";
}

// Redirigir desde la pantalla de carga al tutorial después de unos segundos
function redirectToTutorial() {
    setTimeout(() => {
        window.location.href = "tutorial.html"; // Redirige al tutorial
    }, 3000); // Duración de la pantalla de carga (3 segundos)
}

// Llamar a redirectToTutorial si estamos en loading.html
if (window.location.pathname.includes("loading.html")) {
    redirectToTutorial();
}
