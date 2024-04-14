function problema1(){

    const cadenaOriginal = document.getElementById('pl-input').value;

    const palabras = cadenaOriginal.split(" ");
    
    const palabrasInvertidas = palabras.reverse();
    

    const resultado = palabrasInvertidas.join(" ");

    document.getElementById('p1-output').textContent = resultado;
}





function calcularProductoEscalar() {
    
    const x1 = parseFloat(document.getElementById('p2-x1').value);
    const x2 = parseFloat(document.getElementById('p2-x2').value);
    const x3 = parseFloat(document.getElementById('p2-x3').value);
    const x4 = parseFloat(document.getElementById('p2-x4').value);
    const x5 = parseFloat(document.getElementById('p2-x5').value);

    
    const y1 = parseFloat(document.getElementById('p2-y1').value);
    const y2 = parseFloat(document.getElementById('p2-y2').value);
    const y3 = parseFloat(document.getElementById('p2-y3').value);
    const y4 = parseFloat(document.getElementById('p2-y4').value);
    const y5 = parseFloat(document.getElementById('p2-y5').value);

   
    const productoEscalar = x1 * y1 + x2 * y2 + x3 * y3 + x4 * y4 + x5 * y5;


    document.getElementById('p2-output').textContent = `El producto escalar es: ${productoEscalar}`;

    document.getElementById(p2_bot).addEventListener("click", productoEscalar);
}







function problema3() {
    
    function validarFormato(cadena) {
       
        const regex = /^([A-Z]+)(,[A-Z]+)*$/;
        return regex.test(cadena);
    }

   
    function contarCaracteresUnicos(palabra) {
      
        const caracteresUnicosSet = new Set(palabra);

        
        return caracteresUnicosSet.size;
    }

   
    const cadena = document.getElementById('p3-input').value;

   
    if (!validarFormato(cadena)) {
        document.getElementById('p3-output').textContent = "Por favor, ingresa palabras en mayúsculas separadas por comas.";
        return;
    }

    const palabras = cadena.split(",");

    let palabraMasUnica = "";
    let cantidadMasUnica = 0;

    palabras.forEach(palabra => {
        const cantidadCaracteresUnicos = contarCaracteresUnicos(palabra);
        if (cantidadCaracteresUnicos > cantidadMasUnica) {
            palabraMasUnica = palabra;
            cantidadMasUnica = cantidadCaracteresUnicos;
        }
    });

  
    const resultado = `${palabraMasUnica} = ${cantidadMasUnica} (${[...new Set(palabraMasUnica)].join(",")})`;

    
    document.getElementById('p3-output').textContent = resultado;
}


document.getElementById('p3_pala').addEventListener('click', problema3);
