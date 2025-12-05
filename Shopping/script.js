// Código para el menú hamburguesa
document.querySelector(".menuham").addEventListener("click", function() {
    document.querySelector(".menu").classList.add("activo"); // Mostrar menú
    document.querySelector(".overlay-menu").classList.add("activo"); // Mostrar overlay
});

document.querySelector(".cerrar-menu").addEventListener("click", function() {
    document.querySelector(".menu").classList.remove("activo"); // Ocultar menú
    document.querySelector(".overlay-menu").classList.remove("activo"); // Ocultar overlay
});

// Lógica para los carruseles
let currentIndex = 0;

// Función general para mover el carrusel
function moveCarrusel(direction, containerSelector, itemSelector) {
    const container = document.querySelector(containerSelector);
    const items = document.querySelectorAll(itemSelector);
    const totalItems = items.length;

    // Calculamos el nuevo índice, con rotación circular
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Calculamos el valor de la transformación (movimiento horizontal)
    const newTransformValue = -100 * currentIndex + '%';
    container.style.transform = `translateX(${newTransformValue})`;
}

// Botones carrusel 1
document.querySelector(".carrusel-ant").addEventListener("click", function() {
    moveCarrusel(-1, ".contenedor-carrusel", ".carrusel-item");
});

document.querySelector(".carrusel-sig").addEventListener("click", function() {
    moveCarrusel(1, ".contenedor-carrusel", ".carrusel-item");
});

// Botones carrusel 2
document.querySelector(".ant2").addEventListener("click", function() {
    moveCarrusel(-1, ".contenedor2", ".carr-item2");
});

document.querySelector(".sig2").addEventListener("click", function() {
    moveCarrusel(1, ".contenedor2", ".carr-item2");
});
