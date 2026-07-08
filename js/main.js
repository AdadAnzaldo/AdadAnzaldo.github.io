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



// ==========================
// CONFIGURACIÓN DE PARTÍCULAS
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("tsparticles")) {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            particles: {
                color: {
                    value: "#3b82f6", // Tu azul de los botones
                },
                links: {
                    color: "#cbd5e1", // El gris claro de tus textos
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1.5, // Movimiento sutil y elegante
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                        default: "bounce", // Rebotan suavemente en los bordes
                    },
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 60, // Cantidad de partículas
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        });
    }
});

// ==========================
// NAVBAR SCROLL SHRINK
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    const navs = document.querySelectorAll('nav');
    if (navs.length === 0) return;

    const SCROLL_THRESHOLD = 50;

    function onScroll() {
        navs.forEach(nav => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // run on load in case the page is already scrolled
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
});

// ==========================
// TIMELINE SCROLL ANIMATION
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll('.timeline-item-interactive');

    if (timelineItems.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // La animación se activa cuando el 15% de la tarjeta es visible
        };

        const timelineObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Añade la clase que dispara la animación de CSS
                    entry.target.classList.add('visible');
                    // Deja de observar el elemento para que la animación ocurra solo una vez
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }
});
// ==========================
// LANGUAGE TOGGLE SWITCH
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.getElementById("lang-toggle-btn");
    
    if (langBtn) {
        // 1. Revisar si el usuario ya había elegido un idioma antes
        const currentLang = localStorage.getItem("portfolio-lang");
        
        if (currentLang === "es") {
            document.body.classList.add("lang-es");
            langBtn.textContent = "EN"; // Muestra la opción para volver a inglés
        }

        // 2. Escuchar el clic en el botón
        langBtn.addEventListener("click", () => {
            document.body.classList.toggle("lang-es");
            
            if (document.body.classList.contains("lang-es")) {
                langBtn.textContent = "EN";
                localStorage.setItem("portfolio-lang", "es");
            } else {
                langBtn.textContent = "ES";
                localStorage.setItem("portfolio-lang", "en");
            }
        });
    }
});