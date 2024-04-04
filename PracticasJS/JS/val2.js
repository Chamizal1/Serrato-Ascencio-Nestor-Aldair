function Sneto(){
    var Sueldo = parseFloat(document.getElementById('Sueldo').value);
    var comision = parseFloat(document.getElementById('V1').value);
    var comision2 = parseFloat(document.getElementById('V2').value);
    var comision3 = parseFloat(document.getElementById('V3').value);
    var ganancia = comision * 0.1;
    var ganancia2 = comision2 * 0.1;
    var ganancia3 = comision3 * 0.1;
    var neto = Sueldo + ganancia + ganancia2 + ganancia3;
    document.getElementById('Sneto').innerText = "El sueldo neto agregando la comision de las ventas es: $" + neto.toFixed(2);


}