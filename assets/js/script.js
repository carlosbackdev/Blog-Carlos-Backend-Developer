function mostrarcaja1() {
    const caja = document.getElementById("cajaoculta1");
    if (caja.classList.contains("oculto")) {
        caja.classList.remove("oculto");
        // Forzar el navegador a realizar un reflujo para asegurar que se aplica el display: block
        void caja.offsetWidth; 
        caja.classList.add("visible");
        caja.style.opacity = '1';
        caja.style.transform = 'translateY(0)';
    } else {
        caja.style.opacity = '0';
        caja.style.transform = 'translateY(-50px)';
        setTimeout(() => {
            caja.classList.remove("visible");
            caja.classList.add("oculto");
        }, 300); // Tiempo de la transición
    }
}

function mostrarcaja2(){
    const caja = document.getElementById("cajaoculta2");
    caja.classList.toggle("oculto");
}
function mostrarcaja3(){
    const caja = document.getElementById("cajaoculta3");
    caja.classList.toggle("oculto");
}
function ocultar(){
    const caja = document.getElementById("cajaoculta");
    caja.classList.toggle("oculto");
}
window.addEventListener("DOMContentLoaded", () => { document.documentElement.classList.add("dark-mode");
});

const toggleButton = document.getElementById("toggle-dark-mode");

toggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  document.querySelectorAll('.medio_fondo').forEach(element => {
    element.classList.toggle('dark-mode');});
document.querySelectorAll('nav').forEach(element => {
        element.classList.toggle('dark-mode');});
document.querySelectorAll('.div-proyectos').forEach(element => {
        element.classList.toggle('dark-mode');});
document.querySelectorAll('.medio_f').forEach(element => {
        element.classList.toggle('dark-mode');});
document.querySelectorAll('.ring').forEach(element => {
        element.classList.toggle('dark-mode');});
document.querySelectorAll('.descarga').forEach(element => {
       element.classList.toggle('dark-mode');});
document.querySelectorAll('.email').forEach(element => {
    element.classList.toggle('dark-mode');});
document.querySelectorAll('#copiarmail').forEach(element => {
    element.classList.toggle('dark-mode');});
document.querySelectorAll('.boton_modo').forEach(element => {
    element.classList.toggle('dark-mode');});
document.querySelectorAll('.boton_modo2').forEach(element => {
    element.classList.toggle('dark-mode');});
document.querySelectorAll('#cajaoculta1').forEach(element => {
    element.classList.toggle('dark-mode');});
document.querySelectorAll('.cuadro_descargas').forEach(element => {
    element.classList.toggle('dark-mode');});
document.querySelectorAll('#textazul').forEach(element => {
    element.classList.toggle('dark-mode');});
    
});

// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el iframe del video y el botón de reproducción
    var iframe = document.getElementById('vimeo-video');
    var playButton = document.getElementById('play-button');

    // Verifica si el iframe se ha cargado correctamente
    if (iframe) {
        // Inicializar el reproductor de Vimeo
        var player = new Vimeo.Player(iframe);

        // Añadir el evento de clic al botón de reproducción
        playButton.addEventListener('click', function() {
            // Reproducir el video
            player.play().then(function() {
                // Ocultar la imagen de portada una vez que el video comienza a reproducirse
                playButton.style.display = 'none';
            }).catch(function(error) {
                console.error('Error al reproducir el video:', error);
            });
        });
    } else {
        console.error('El iframe de Vimeo no se encontró.');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var coverImage = document.getElementById('cover-image');
    if (coverImage) {
        coverImage.addEventListener('click', function() {
            gtag('event', 'cover_image_view', {
                'event_category': 'Interaction',
                'event_label': 'Cover Image',
                'value': 1
            });
        });
    }
});

// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Añadir un evento de scroll a la ventana
    window.addEventListener('scroll', function() {
        var cuadroDescargas = document.querySelector('.cuadro_descargas');
        // Calcular la nueva opacidad basada en la cantidad de scroll
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var opacity = 1 - (scrollTop / 1000); // Ajusta este valor según sea necesario
        cuadroDescargas.style.opacity = Math.max(opacity, 0.3); // Asegurar que la opacidad no sea menor que 0
    });
});




