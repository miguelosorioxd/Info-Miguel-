function suma() {
    let numero1 = +document.getElementById('numero1').value; // primer número
    let numero2 = +document.getElementById('numero2').value; // segundo número
    let display = document.getElementById('salida'); // elemento para mostrar resultado

    display.textContent = numero1 + numero2; // muestra la suma
}

function resta() {
    let display = document.getElementById('salida'); // elemento para mostrar resultado

    display.textContent = numero1 - numero2; // muestra la resta
}

function multiplicacion() {
    let display = document.getElementById('salida'); // elemento para mostrar resultado

    display.textContent = numero1 * numero2; // muestra la multiplicación
}

function division() {
    let display = document.getElementById('salida'); // elemento para mostrar resultado

    if (numero2 !== 0) {
        display.textContent = numero1 / numero2; // muestra la división
    } else {
        display.textContent = 'Error'; // muestra error si división por cero
    }
}

function potenciacion() {
    let display = document.getElementById('salida'); // elemento para mostrar resultado

    display.textContent = Math.pow(numero1, numero2); // muestra la potenciación
}

function raizcuadrada() {
    let display = document.getElementById('salida'); // elemento para mostrar resultado

    if (numero1 >= 0) {
        display.textContent = Math.sqrt(numero1); // muestra la raíz cuadrada
    } else {
        display.textContent = 'Error'; // muestra error si el número es negativo
    }
}

function borrar() {
    document.getElementById('numero1').value = ''; // borra primer número
    document.getElementById('numero2').value = ''; // borra segundo número
    let display = document.getElementById('salida'); // elemento para mostrar resultado

    display.textContent = ''; // borra el resultado
}
