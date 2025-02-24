// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Comienzo del  desarrollo del juego amigo secreto
/************************************************************
 **********Juego Amigo Secreto en Javascript*****************
 ************************************************************
 *****01) Declarar la lista de amigos************************
 ************************************************************
 *****02) Funcion agregar amigos*****************************
 ************************************************************
 *****03) Actualizar La lista********************************
 *****04) Funcion para eliminar Amigos***********************
 *****05) Funcion para realizar el sorteo********************
 */
//Comienzo de Codigo
 document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];
//Funcion Agregar Amigos
    function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido");
            return;
        }
        amigos.push(`${amigos.length + 1}. ${nombre}`);
        actualizarLista();
        input.value = "";
    }
    //Actualiza la lista
    function actualizarLista() {
        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";
//Funcion para eliminar amigos
        amigos.forEach((nombre, index) => {
            const li = document.createElement("li");
            li.textContent = nombre;
            
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "❌";
            botonEliminar.onclick = () => eliminarAmigo(index);

            li.appendChild(botonEliminar);
            listaAmigos.appendChild(li);
        });
    }

    function eliminarAmigo(index) {
        amigos.splice(index, 1);
        actualizarLista();
    }
//Funcion para realizar el sorteo
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Debe haber al menos dos participantes para realizar el sorteo");
            return;
        }
        
        const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        mostrarResultado(amigoSecreto);
    }

    function mostrarResultado(amigoSecreto) {
        const listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = "";

        const li = document.createElement("li");
        li.textContent = `Mi amigo secreto es: ${amigoSecreto}`;
        listaResultado.appendChild(li);
    }

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

