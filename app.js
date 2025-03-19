// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// aca declaramos el arreglo donde se almacenara los amigos ingresados
const listaAmigos = [];

// Elementos del DOM
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// definimos la funcion para agregar los amigos a al arreglo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    
    // Validaciones
    if (nombre === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista");
        return;
    }
    
    // de esta manera agregamos al arreglo el nombre
    listaAmigos.push(nombre);
    
   
    const li = document.createElement("li");
    li.textContent = nombre;
    ulListaAmigos.appendChild(li);
    
    // Limpiamos la caja donde ingresamos los nombres
    inputAmigo.value = "";
    inputAmigo.focus();
}

// definimos la funcion para elegir de manera aleatoria al amigo secreto validadando que haya una cantidad minima de participantes
function sortearAmigo() {
  
    if (listaAmigos.length < 2) {
        alert("Se necesitan al menos 2 participantes para realizar el sorteo");
        return;
    }
    

    ulResultado.innerHTML = "";
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Mostramos el resultado abajo de donde se muestra la lista
    const li = document.createElement("li");
    li.textContent = `¡Tu amigo secreto es: ${amigoSorteado}!`;
    ulResultado.appendChild(li);
}

inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
