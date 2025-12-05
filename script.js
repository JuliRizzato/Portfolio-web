// Código para el menú hamburguesa
document.querySelector(".menuham").addEventListener("click", function() {
    document.querySelector(".menu").classList.add("activo"); // Mostrar menú
    document.querySelector(".overlay-menu").classList.add("activo"); // Mostrar overlay
});

document.querySelector(".cerrar-menu").addEventListener("click", function() {
    document.querySelector(".menu").classList.remove("activo"); // Ocultar menú
    document.querySelector(".overlay-menu").classList.remove("activo"); // Ocultar overlay
});
