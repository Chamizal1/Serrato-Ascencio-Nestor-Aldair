function calcularCalificacionFinal() {
    var promedio = parseFloat(document.getElementById('promedio').value);
    var examen = parseFloat(document.getElementById('examen').value);
    var trabajo = parseFloat(document.getElementById('trabajo').value);

    if (promedio < 0 || promedio > 10 || examen < 0 || examen > 10 || trabajo < 0 || trabajo > 10) {
        alert("Por favor, ingrese valores válidos entre 0 y 10.");
        return; 
    }

    var Final = (promedio * 0.55) + (examen * 0.30) + (trabajo * 0.15);

    document.getElementById('final').innerText = "La calificación final es: " + Final.toFixed(2);
}
