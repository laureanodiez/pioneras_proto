document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("camera-stream");
    const button = document.getElementById("camera-button");
  
    // Función para activar la cámara
    const startCamera = async () => {
      try {
        // Solicitar acceso a la cámara
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream; // Enlazar el stream al elemento <video>
      } catch (error) {
        console.error("Error al acceder a la cámara:", error);
        alert("No se pudo acceder a la cámara. Verifica los permisos.");
      }
    };
  
    // Evento para activar la cámara cuando se hace clic
    button.addEventListener("click", startCamera);
  });
  
