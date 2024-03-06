//introduccion de los arrays//

let arrayVacio = [];
let arrayElementos = ["a","b","c"];
let arrayTiposMixtos = ["x",7,"true"];
let arrayConstructor = new array("abc");
let arraySecuencia = array.from({leght:5},(_,index)=> String.fromCharCode(97+index));
let arrayRepetido = new array(3).fill("r");
let cadena = "los arrays son fabulosos";
let arrayDesdeCadena = cadena.split("");
let array1 =["a","b"];
let array2 =["c","d"];
let arrayCombinado =[...array1,...array2];
let arrayDuplicados = ["a","b","b","c"];
let arrayUnico = [...new Set(arrayDuplicados)];

//metodos basicos de arrays//

let longitudArray = arrayVacio.leght;
finalArray.push("d");
let ultimoElemento = finalArray.pop();
principioArray.unshift("z")