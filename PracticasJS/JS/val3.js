function CalcularDescuento(){
    var compra = parseFloat(document.getElementById('Vcompra').value);
    var descuento = compra * 0.15;
    var Vdescuento = compra - descuento;
    document.getElementById('Vfinal').innerText = "El valor de la compra con el descuento aplicado es: $" + Vdescuento.toFixed(2);

    


}