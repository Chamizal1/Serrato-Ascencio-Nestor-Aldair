function calcularEdad() {
    var fechaNacimientoString = document.getElementById('fecha').value;

    var formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!formatoFecha.test(fechaNacimientoString)) {
        alert("Por favor, ingrese una fecha válida en el formato DD/MM/AAAA.");
        return;
    }
    
    var fechaNacimiento = new Date(fechaNacimientoString);
    
    if (isNaN(fechaNacimiento.getTime())) {
        alert("Por favor, ingrese una fecha de nacimiento válida.");
        return;
    }
    
    var fechaActual = new Date();
    
    var diferenciaTiempo = fechaActual.getTime() - fechaNacimiento.getTime();
    
    var edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));
    
    var fechaNacimientoFormateada = fechaNacimiento.toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('fechaC').innerHTML = "Naciste el " + fechaNacimientoFormateada + ", tienes " + edad + " años.";
}

