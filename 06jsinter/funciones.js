/*
javascript maneja variables del siguinte modo:

var -> una variable de aceeo local de la cual cualquiera puede hacer uso

let-> es una variable "protegida" solo se pude hacer uso dentro de la función 

cons -> es una constante, significa que su valor no puede cambiar
*/


/*
//let tiene "prioridad" entre los tipos de variable
var x ="hola";

if(true){

    let x = " habia una vez";
console.log(x);
//es independinte de lo demas
}
*/


//desarrollar una funcion de suma
/*
function suma(n1, n2){

return n1+n2;
}


console.log(`Esta es la suma:  ${suma(4,5)}`)


//funciones flecha nos ayudan  apoder realizar operaciones de forma mas sencilla
//esta seguido por una cadena -> id, clase, nombre, atributo


const sumaFlecha = (n1, n2) => n1+n2;
console.log(`Esta es la suma:  ${sumaFlecha(10,5)}`)
*/


const razasPerros = [
    "Gran Danes",
    "Pasto Aleman",
    "Chuhuahua",
    "betoven",
    "Dalmata",
    "San Bernardo"
];


//queremos recorrerlo e imprimirlo
//for
/*for( let i = 0; i<razasPerros.length; i++){
console.log(razasPerros[i])
}*/

/*for(const raza of razasPerros){
    console.log(raza);
}
for(const indice in razasPerros){
    console.log(razasPerros[indice]);
}*/


//forEach intera sobre los elementos el arreglo y no develve nada
//todos los foreach son funciones flecha por defecto
//razasPerros.forEach((raza)=> console.log(raza))
//funcion callback se manda a llamar a si misma 

//estructura de foreach
//argumento.foreach(raza, indie) arreglOriginal => lo que quiero que haga


//funcion MAP
//itera sobre los elementos del arreglo y regresa un arreglo diferente el cual podemos manejar

//const razasPerrosenM = razasPerros.map((raza)=> console.log(raza.toUpperCase()))
//FIND
//busca un elemeto dentro de un arreglo si lo encuentra lo retorna si no lanza un "undefinid"
//yo quiero buscar la raza "x"


if(razasPerros.find((raza) => raza === "Dalmata")){

    console.log("La raza se encuentra dentro del arreglo");
    console.log(razasPerros);
}else{

    razasPerros.push("Dalmata");
    console.log(razasPerros);

}


//FINDINDEX

//es similar al anterior solo que realiza la busqueda de un elemnto pero devuelve su indice, si no lo encuentra devueve -1, es util en elementos que se necesita modificar un arreglo original, dentro de un acopia
/*
const indicedalmata = razasPerros.findIndex((raza)=> raza === "Dalmata");
if(indicedalmata > -1){
console.log(razasPerros[indicedalmata]);
//que agregue un texto
razasPerros[indicedalmata] += "(Es una raza de perro 🗿)";
}*/