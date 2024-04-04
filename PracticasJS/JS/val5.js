function calcularPorcentaje() {
    var totalAlumnos = parseInt(document.getElementById('totalAlumnos').value);
    var totalHombres = parseInt(document.getElementById('totalHombres').value);
    var totalMujeres = parseInt(document.getElementById('totalMujeres').value);
    
    if (isNaN(totalAlumnos) || isNaN(totalHombres) || isNaN(totalMujeres) ||
        !Number.isInteger(totalAlumnos) || !Number.isInteger(totalHombres) || !Number.isInteger(totalMujeres)) {
        alert("Por favor, ingrese solo números enteros en los campos.");
        return;
    }

    if (totalHombres + totalMujeres !== totalAlumnos) {
        alert("La suma de la cantidad de alumnos hombres y mujeres debe coincidir con el total de alumnos.");
        return;
    }

    var porcentajeHombres = (totalHombres / totalAlumnos) * 100;
    var porcentajeMujeres = (totalMujeres / totalAlumnos) * 100;
    
    document.getElementById('resultado').innerHTML = "Porcentaje de alumnos hombres: " + porcentajeHombres.toFixed(2) + "%<br>" +
                                                      "Porcentaje de alumnas mujeres: " + porcentajeMujeres.toFixed(2) + "%";
}
