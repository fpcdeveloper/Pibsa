// Ventana modal
var modal1 = document.getElementById("ventanaModal_1");
var modal2 = document.getElementById("ventanaModal_2");
var modal3 = document.getElementById("ventanaModal_3");
var modal4 = document.getElementById("ventanaModal_4");
var modal5 = document.getElementById("ventanaModal_5");
var modal6 = document.getElementById("ventanaModal_6");
var modal7 = document.getElementById("ventanaModal_7");

// Botón que abre el modal
var boton1 = document.getElementById('abrirModal_1');
var boton2 = document.getElementById('abrirModal_2');
var boton3 = document.getElementById('abrirModal_3');
var boton4 = document.getElementById('abrirModal_4');
var boton5 = document.getElementById('abrirModal_5');
var boton6 = document.getElementById('abrirModal_6');
var boton7 = document.getElementById('abrirModal_7');


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
boton7.addEventListener("click",function() {
    modal7.style.display = "block";
});

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span1 = document.getElementsByClassName("close")[0];
span1.addEventListener("click",function() {
    modal1.style.display = "none";
});

var span2 = document.getElementsByClassName("close")[1];
span2.addEventListener("click",function() {
    modal2.style.display = "none";
});

var span3 = document.getElementsByClassName("close")[2];
span3.addEventListener("click",function() {
    modal3.style.display = "none";
});

var span4 = document.getElementsByClassName("close")[3];
span4.addEventListener("click",function() {
    modal4.style.display = "none";
});

var span6 = document.getElementsByClassName("close")[4];
span6.addEventListener("click",function() {
    modal6.style.display = "none";
});

var span5 = document.getElementsByClassName("close")[5];
span5.addEventListener("click",function() {
    modal5.style.display = "none";
});

var span7 = document.getElementsByClassName("close")[6];
span7.addEventListener("click",function() {
    modal7.style.display = "none";
});



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
window.addEventListener("click",function(event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
});