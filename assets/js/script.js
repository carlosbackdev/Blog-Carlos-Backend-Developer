function mostrarcaja1(){
    const caja = document.getElementById("cajaoculta1");
    caja.classList.toggle("oculto");
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

});

