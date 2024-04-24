//vamos a crear un arreglo que contenga todas las instrucciones para el juego


var instruccion = [
    "utiliza las flchas de navegacion para mover las piezas,",
    "Para ordenar las piezas guiate con la imagen objetivo"
];

//vamos a crear una variable para guardar el ultimo movimiento

var movimientos = [];


//vamos a crear una matriz que presente las posiciones del rompecabeza

var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


//lo que se mueve del rompecabeza es una coordenada fila vs columna, necesito una varable para guardar las posicion de la pieza que se mueve

var filaVacia = 2;
var comunaVacia = 2;

//ya que defini que necesito hay que empezar a estructurar las funciones

//la primera que debe de estar es instrucciones, debe de recorrer el arreglo de las instrucciones e imprimir en el html

function mostrarInstrucciones(instruccion){
    for(var i = 0; i<instruccion.lenght; i++){
        //debo de mostrar en la lista
        mostrarInstruccionesLista(instruccion[i], "lista-instrucciones")
    }
}

function mostrarInstruccionesLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    //debo de agregar la etiqueta li
    var li = document.createElement("li");
    // para agregar se usa textcontent
    li.textContent = instruccion;
    ul.appendChild(li);
}

// crear funcin para agregar la ultima funcion del movimiento

function agregarUltimoMovimiento(direccion){
    movimientos.push(direccion);
}


// necesito una funcion para ver si gane

function checharSiGano(){
    for(var i = 0; i < rompe.length; i ++){
        for(var j = 0; j <rompe[i].length; j++){
            //donde estoy
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

// si funciona mostrar en html

function mostrarCartelGanador(){
    if(checharSiGano()){
        alert("A mimir");
    }
    return false;
}

//necesito una funcion para poder intercambiar las pociciones de la pieza vacia por la de alguna otra
// arreglo[1][2] = arreglo [0][0]
// cuando lo intercambio
//areglo[0][0] = arreglo [1][2]


function intercambiarPocicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var Pos1 = rompe[filaPos1][columnaPos1];
    var Pos2 = rompe[filaPos2][columnaPos2];
    //intercambio
    rompe[filaPos1][columnaPos1] = Pos2;
    rompe[filaPos2][columnaPos2] = Pos1;
}

// simpre debo de saber donde esta la pieza vacia

function actulizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    comunaVacia = nuevaColumna;
}

//

function posicionValida(fila, columna){
    return (fila >=0  && fila <= 2 && columna >= 0 && columna <= 2);
}

//parte del movimieto, para ello debemos de entender que cada pieza es un hueco en la matriz y lo unico que cambia son 
//las posiciones de la matriz, significa que cuando se teclen las flechas de navegacio, debo de saber cual se tecleo asi es como se las posiciones
//arriba 38 abajo 40 izquierda 37 derecha 39

function moverDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = comunaVacia;
    }else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = comunaVacia;
    }
    if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = comunaVacia + 1;
    }else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = comunaVacia - 1;
    }
    //mandar a llamar a la posicion valida y si no intercambiar
    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        //tengo que hacer la funcio que haga lo de intercambiar wazazazazazazazaz
        intercambiarPociciones(filaVacia, comunaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actulizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        agregarUltimoMovimiento(direccion);
    }
}

function intercambiarPociciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    intercambiarPocicionesRompe(fila1, columna1, fila2, columna2);
    intercambiarPocicionesDom('pieza' + pieza1, 'pieza' + pieza2);
}//debo de crear la funcion que cambie la imagen

function intercambiarPocicionesDom(idpieza1, idpieza2){

var elementoPieza1 = document.getElementById(idpieza1);
var elementoPieza2 = document.getElementById(idpieza2);

//vamos a crear clon y puedo ocultar
 var padre = elementoPieza1.parentNode;
 //var madre = elementoPieza2.parentNode;


 var cloneElemento1 = elementoPieza1.cloneNode(true);
 var cloneElemento2 = elementoPieza2.cloneNode(true);

 padre.replaceChild(cloneElemento1, elementoPieza2);
 padre.replaceChild(cloneElemento2, elementoPieza1);
}

var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};