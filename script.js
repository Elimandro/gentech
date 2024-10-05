// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById('footer');
    const header = document.querySelector('header');
    let lastScrollTop = 0; // Variable para almacenar la posición de desplazamiento anterior
    
    // Mostrar el footer al hacer scroll hacia abajo
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;

        // Mostrar/Ocultar el header al hacer scroll
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden'); // Ocultar el encabezado si se hace scroll hacia abajo
        } else {
            header.classList.remove('hidden'); // Mostrar el encabezado si se hace scroll hacia arriba
        }
        lastScrollTop = scrollTop; // Actualizar la posición de desplazamiento anterior

        if (scrollTop + window.innerHeight >= document.body.offsetHeight) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });

    const links = document.querySelectorAll('.botones-inicio a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
