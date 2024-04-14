/**
 * javaScript es un leguaje de programcion multi pardigma, acepta porgramacion funcional,estructurada,POO, eventos, etc
 * Dentro de JS no existe int, double, float, string, etc
 * Para ek manejo de variables con tipo de datos existe el estandar ES6 el cual nos dice que para el manejde variables tenems
 Var Let CONST
*/
// vamos a hacer una funcion que acepte mas de tres carateres
/**
 funcion debe de volver un estado y el metodo no
 */
function validar(formulario){
    if(formulario.nombre.value.length < 4){
        alert("Por favor escribe mas de 3 caracteres en el nombre");
        formulario.nombre.focus();
        return false;
    }
    var abcOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    var checkSTR = formulario.nombre.value;

    alert(checkSTR);
    
    var allValid =  true;
    //vamos a hacer un bucle el cual priemero obtenga la cadena de caracteres y los separe, un vez cada carecter se debe de comparar
    for(var i = 0; i < checkSTR.lenght; i++){
        var caracters = checkSTR.chartAT(i);
        for(var j = 0; j < abcOK; j++){
            if(caracters == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValid = false
            break;
        }
    }
    if(allValid){
        alert("escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }


var abcOK = "1234567890";
    var checkSTR = formulario.Edad.value;

    alert(checkSTR);
    
    var allValid =  true;
    //vamos a hacer un bucle el cual priemero obtenga la cadena de caracteres y los separe, un vez cada carecter se debe de comparar
    for(var i = 0; i < checkSTR.lenght; i++){
        var caracters = checkSTR.chartAT(i);
        for(var j = 0; j < abcOK; j++){
            if(caracters == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValid = false
            break;
        }
    }
    if(allValid){
        alert("escriba unicamente numeros en el campo de edad");
        formulario.Edad.focus();
        return false;
    }
    /**
     * expresiones regularen osila
     * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
    */
   //validar correo contar con expresion regular es:
   //texto.texto@texto.texto
   var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
   var txt = formulario.correo.value;

   alert("Email" + b.test())
}