// ====== Bloque 1: Funcionalidades del Modal ====== //
// Función para mostrar el modal de inicio de sesión
function showLoginModal() {
    document.getElementById("login-modal").classList.remove("hidden");
    document.getElementById("register-modal").classList.add("hidden");
}

// Función para ocultar todos los modales
function closeModal() {
    document.querySelectorAll(".modal").forEach(modal => modal.classList.add("hidden"));
}

// Cierra el modal al hacer clic fuera de su contenido
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", function (e) {
        // Cierra el modal solo si el clic no fue dentro de ".modal-content"
        if (!e.target.closest(".modal-content")) {
            closeModal();
        }
    });
});

// Función para mostrar el formulario de registro
function showRegisterModal() {
    closeModal();
    document.getElementById("register-modal").classList.remove("hidden");
}





// ====== Bloque 2: Validaciones y Redirecciones ====== //
// Valida que los campos no estén vacíos
function validateFields(fields) {
    return Array.from(fields).every(field => field.value.trim() !== '');
}

// Lógica de inicio de sesión
function login() {
    const fields = document.querySelectorAll("#login-modal input");
    if (validateFields(fields)) {
        window.location.href = "tutorial.html";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Lógica de registro
function register() {
    const fields = document.querySelectorAll("#register-modal input");
    if (validateFields(fields)) {
        window.location.href = "tutorial.html";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Continuar sin iniciar sesión
function continueWithoutLogin() {
    window.location.href = "tutorial.html";
}





// ====== Bloque 3: Funcionalidades del Menú ====== //
// Muestra/oculta el menú desplegable
function showDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");

    if (dropdownContent.classList.contains("show")) {
        document.addEventListener("click", closeDropdownOnClickOutside);
    } else {
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
}

// Cierra el menú al hacer clic fuera de él
function closeDropdownOnClickOutside(event) {
    const dropdownContent = document.querySelector(".dropdown-content");
    const menuButton = document.querySelector(".menu-icon");

    if (!dropdownContent.contains(event.target) && event.target !== menuButton) {
        dropdownContent.classList.remove("show");
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
}





// ====== Bloque 4: Ajustes Dinámicos ====== //
// Cambia la opacidad del banner al hacer scroll
window.addEventListener("scroll", function() {
    const banner = document.querySelector(".banner");
    if (window.scrollY > 50) { 
        banner.classList.add("scrolled");
    } else {
        banner.classList.remove("scrolled");
    }
});

// Ajusta el espacio debajo del banner dinámicamente
window.addEventListener("load", adjustContentPadding);
window.addEventListener("resize", adjustContentPadding);

function adjustContentPadding() {
    const banner = document.querySelector(".banner");
    const mainContent = document.querySelector(".main-content");
    mainContent.style.paddingTop = `${banner.offsetHeight}px`;
}




// ====== Animación al hacer scroll con Parallax ====== //
function handleScrollAnimations() {
    const hiddenElements = document.querySelectorAll('.hidden-container');

    hiddenElements.forEach(element => {
        // Verifica si ya activó la transición
        if (element.dataset.transitioned === 'true') {
            return;
        }

        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            // Activa la transición y marca como "mostrado"
            element.classList.add('visible-container');
            element.dataset.transitioned = 'true';
            element.style.transition = 'opacity 1s ease-in-out';

            // Solo aplica backgroundAttachment 'fixed' en pantallas grandes
            if (window.innerWidth > 768) {
                element.style.backgroundAttachment = 'fixed';
            } else {
                element.style.backgroundAttachment = 'scroll'; // Ajuste para pantallas pequeñas
            }
        }
    });
}

window.addEventListener('resize', function() {
    const hiddenElements = document.querySelectorAll('.hidden-container');
    hiddenElements.forEach(element => {
        if (window.innerWidth <= 768) {
            element.style.backgroundAttachment = 'scroll';
        } else {
            element.style.backgroundAttachment = 'fixed';
        }
    });
});


// Escucha el evento de scroll y ejecuta la función
window.addEventListener('scroll', handleScrollAnimations);

// Ejecuta la función al cargar la página para manejar elementos visibles iniciales
document.addEventListener('DOMContentLoaded', handleScrollAnimations);
