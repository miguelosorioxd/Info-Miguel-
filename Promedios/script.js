function promediar() {
    const nota1 = +document.getElementById('nota1').value; //primera nota
    const nota2 = +document.getElementById('nota2').value; // segunda nota
    const nota3 = +document.getElementById('nota3').value; //tercera nota
    const mostrar = document.getElementById('salida'); //  para mostrar el resultado
    
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3); // formula del promedio

    if (promedio >= 6 && promedio <= 10) {
        mostrar.textContent = promedio + ' - ¡Pasaste!'; // mensaje si pasaste
    } else if (promedio >= 1 && promedio < 6) {
        mostrar.textContent = promedio + ' - ¡Dejaste!'; // mensaje si dejaste
    } else {
        mostrar.textContent = 'Ingrese sus notas entre 1 a 10'; // mensaje de error
    }
}
