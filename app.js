//Se declara variable que almacena lista de amigos 
let amigos = [];

//capturar el valor del campo de entrada
function agregarAmigo() {
    //capturamos el valor del input
    let nombre =document.getElementById("amigo").value.trim();
    //validamos que el campo no este vacio
    if (nombre !== "") {
        //agregamos el nombre a la lista de amigos
        amigos.push(nombre);
        //mostramos la lista de amigos en consola
        console.log(amigos);
        //limpiamos el campo de entrada de texto        
        document.getElementById("amigo").value = "";
        //actualizamos la lista en el HTML
        actualizarLista();
    } else {
        alert("Por favor, ingresar un nombre válido");
    }
}

function actualizarLista(){
    //obtener lista de HTML
    let lista = document.getElementById("listaAmigos");
    //limpiar la lista antes de actualizar
    lista.innerHTML = "";
    //recorrer la lista de amigos y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        //crear elemento <li>
        let li = document.createElement("li");
        //asignar el nomnbre
        li.textContent = amigos [i];
        //agregar a la lista
        lista.appendChild(li);
    }
}

    //funcion para elegir amigo al azar 
function sortearAmigo() {
    // validar que el arreglo tenga amigos
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
        //salimos de la funcion 
        return;
    }
    //generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random () * amigos.length);
    //obtener el amigo seleccionado
    let amigoSeleccionado = amigos[indiceAleatorio];
    //mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto es: " + amigoSeleccionado;
}