document.addEventListener("DOMContentLoaded", function() {
    
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".close-modal");

    // Seleccionar todas las imágenes preparadas para el click
    const images = document.querySelectorAll('.project-hero-image img, .tech-overview-image img, .architecture-image img, .testing-image img, .gallery-item img');

    // Verificación de seguridad: solo ejecutar si el modal existe en esta página
    if (modal && images.length > 0) {
        
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "flex"; 
                modalImg.src = this.src;      
                captionText.innerHTML = this.alt; 
            });
        });

        // Cerrar el modal al hacer clic en la "X"
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });

        // Cerrar el modal al hacer clic en cualquier zona fuera de la imagen
        modal.addEventListener('click', function(event) {
            if (event.target !== modalImg) {
                modal.style.display = "none";
            }
        });
    }
});