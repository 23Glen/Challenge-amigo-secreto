//Arreglo para almacenar los nombres
let amigos = [];

// 1. Función para agregar un nombre a la lista 
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    //verifica si el campo está vacío
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    } 
    // Verifica si el nombre ya está en la lista 
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
        return;
    }         
        amigos.push(nombre);// Agrega el nombre al array
        input.value = '';  // Limpia el campo de entrada
        mostrarLista();    // Actualiza la lista en la interfaz 
}

// 2. Función para mostrar lista
function mostrarLista () {
    //Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = '';
    // Recorre el array y agrega cada nombre como un elemento li
    for (let amigo of amigos){ 
        let li = document.createElement('li'); // Crea un nuevo elemento li
        li.textContent = amigo; // Asigna el nombre al elemento
        lista.appendChild(li); // Agrega elementos a la lista
    }
}

// 3. Función para seleccionar un nombre aleatorio por indice
function sortearAmigo () {
    // Verifica si hay nombres en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear, por favor ingrese al menos dos nombres.');
        return;
    }
    // Genera un índice aleatorio
    let indiceSortear = Math.floor(Math.random()*amigos.length);
    let amigoElegido = amigos[indiceSortear];

   // Muestra el nombre sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoElegido}`
}   