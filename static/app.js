// Alvaro Gonzalez Rando
//
// Completar JS aqui

var tabla = document.querySelector("#contenidoTabla")
var modal = document.querySelector("#modal");
var add = document.querySelector(".verde");
var back = document.querySelector(".gris");

add.onclick = function() {

    tabla.style.display = "none";
    modal.style.display = "flex";

}

back.onclick = function() {

    modal.style.display = "none";
    tabla.style.display = "flex";

}