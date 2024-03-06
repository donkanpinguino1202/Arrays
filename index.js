let arrayVacio = [];
let arrayElementos = ["a","b","c"];
let arrayTiposMixtos = ["x",7,"true"];
let arrayConstructor = new array("abc");
let arraySecuencia = array.from({leght:5},(_,index)=> String.fromCharCode(97+index));
let arrayRepetido = new array(3).fill("r");
let cadena = "los arrays son fabulosos"
let arrayDesdeCadena = cadena.split("")