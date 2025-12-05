const menuham = document.querySelector('.menuham');
const menu = document.querySelector('.menu');
const cerrarMenu = document.querySelector('.cerrar-menu');


    // Evento para abrir el menú
    menuham.addEventListener('click', () => {
        menu.style.display = 'block';
    });

    // Cerrar el menú con el botón de cierre
    cerrarMenu.addEventListener('click', () => {
    menu.style.display = 'none'; // Ocultar el menú
    });
