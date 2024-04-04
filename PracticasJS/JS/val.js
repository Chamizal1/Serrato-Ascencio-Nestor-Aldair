function calcularGanancia() {
    var capital = parseFloat(document.getElementById('capital').value);
    var ganancia = capital * 0.02;
    var total = capital + ganancia;
    document.getElementById('resultado').innerText = "Después de un mes, el monto total será: $" + total.toFixed(2);
}
