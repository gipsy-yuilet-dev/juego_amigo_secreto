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

 document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido");
            return;
        }
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }

    function actualizarLista() {
        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

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

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Debe haber al menos dos participantes para realizar el sorteo");
            return;
        }
        
        let mezclados = [...amigos];
        let resultado = [];

        do {
            mezclados = [...amigos].sort(() => Math.random() - 0.5);
        } while (amigos.some((nombre, i) => nombre === mezclados[i]));

        amigos.forEach((nombre, i) => {
            resultado.push(`${nombre} → ${mezclados[i]}`);
        });
        mostrarResultado(resultado);
    }

    function mostrarResultado(resultado) {
        const listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = "";

        resultado.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            listaResultado.appendChild(li);
        });
    }

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});