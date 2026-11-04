// Constantes para el visor de imágenes
const modal = document.getElementById("modal-foto");
const imgAmpliada = document.getElementById("img-ampliada");
const botonCerrar = document.querySelector(".cerrar");
const fotosGaleria = document.querySelectorAll(".foto-evento");

// Abrir imagen al hacer clic
fotosGaleria.forEach(foto => {
    foto.addEventListener("click", function() {
        modal.style.display = "block";
        imgAmpliada.src = this.src;
    });
});

// Cerrar con el botón X
botonCerrar.onclick = function() {
    modal.style.display = "none";
}

// Cerrar haciendo clic en el fondo oscuro
modal.onclick = function(evento) {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
}

// Cerrar presionando la tecla Escape
document.addEventListener('keydown', function(evento) {
    if (evento.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});