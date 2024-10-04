
let intervalo; // variable que guarda el intervalo

function contador() {
    let tiempodado = +document.getElementById('segundos').value; // tiempo ingresado por el usuario
    let tiempoRestante = tiempodado; // guardamos el tiempo restante

    // inicia la cuenta regresiva
    intervalo = setInterval(() => {
        document.getElementById('salida').textContent = tiempoRestante; // muestra el tiempo restante
        tiempoRestante--; // decrementa el tiempo

        if (tiempoRestante < 0) { 
            clearInterval(intervalo); // detiene la cuenta regresiva
            finalizar(); // ejecuta la función para finalizar
        }
    }, 1000); 
}

function finalizar() {
    document.getElementById('salida').textContent = 'ON'; 
    let alarma = document.getElementById('alarma'); 
    alarma.play(); // reproduce el sonido de alarma
}

function reiniciar() {
    clearInterval(intervalo); // detiene el intervalo
    location.reload(); // recarga la página
}
