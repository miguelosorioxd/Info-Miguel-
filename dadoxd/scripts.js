function dado() {
    let numero = document.getElementById('num').value; // número ingresado
    let salida = document.getElementById('output'); // elemento para mostrar resultado
    let random = Math.floor(Math.random() * numero) + 1; // genera un número aleatorio entre 1 y el número ingresado
    salida.textContent = random; // muestra el número aleatorio
}
