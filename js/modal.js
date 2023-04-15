// Ventana modal
var modal1 = document.getElementById("ventanaModal_1");
var modal2 = document.getElementById("ventanaModal_2");
var modal3 = document.getElementById("ventanaModal_3");
var modal4 = document.getElementById("ventanaModal_4");
var modal5 = document.getElementById("ventanaModal_5");
var modal6 = document.getElementById("ventanaModal_6");

// Botón que abre el modal
var boton1 = document.getElementById('abrirModal_1');
var boton2 = document.getElementById('abrirModal_2');
var boton3 = document.getElementById('abrirModal_3');
var boton4 = document.getElementById('abrirModal_4');
var boton5 = document.getElementById('abrirModal_5');
var boton6 = document.getElementById('abrirModal_6');

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
//var span = document.getElementsByClassName("cerrarModal_1")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton1.addEventListener("click",function() {
    modal1.style.display = "block";
});
boton2.addEventListener("click",function() {
    modal2.style.display = "block";
});
boton3.addEventListener("click",function() {
    modal3.style.display = "block";
});
boton4.addEventListener("click",function() {
    modal4.style.display = "block";
});
boton5.addEventListener("click",function() {
    modal5.style.display = "block";
});
boton6.addEventListener("click",function() {
    modal6.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
/*span.addEventListener("click",function() {
    modal.style.display = "none";
});*/

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
if (event.target == modal1) {
    modal1.style.display = "none";
}
});

window.addEventListener("click",function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    });

window.addEventListener("click",function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
});

window.addEventListener("click",function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
});
window.addEventListener("click",function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
});
window.addEventListener("click",function(event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
});