//introduccion de los arrays//

// 1. Crear un array vacío//
let arrayVacio = [];
console.log(arrayVacio);

//2. Crear un array con elementos//
let arrayElementos = ["a","b","c"];
console.log(arrayElementos);

//3. Crear un array con elementos de diferentes tipos de datos//
let arrayTiposMixtos = ["x",7,"true"];
console.log(arrayTiposMixtos);

//4. Crear un array utilizando el constructor Array()//
let arrayConstructor = new Array("abc");
console.log(arrayConstructor);

//5. Crear un array con una secuencia numérica usando el método Array.from()//
let arraySecuencia = Array.from({leght:5},(_,index)=> String.fromCharCode(97+index));
console.log(arraySecuencia);

//6. Crear un array mediante la repetición de un valor utilizando el método Array.fill()//
let arrayRepetido = new Array(3).fill("r");
console.log(arrayRepetido);

//7. Crear un array a partir de una cadena de texto usando el método String.split()//
let cadena = "los arrays son fabulosos";
let arrayDesdeCadena = cadena.split("");
console.log(arrayDesdeCadena);

//8. Crear un array combinando dos arrays existentes utilizando el operador spread ( ... )//
let array1 =["a","b"];
let array2 =["c","d"];
let arrayCombinado =[...array1,...array2];
console.log(arrayCombinado);

//9. Crear un array con valores únicos utilizando el método Set() y el operador spread ( ... )//
let arrayDuplicados = ["a","b","b","c"];
let arrayUnico = [...new Set(arrayDuplicados)];
console.log(arrayUnico);

//10. Crear un array con una función que genere valores dinámicamente//
let generarArray = (n) => Array.from({lenght:n},(_,index) => String.fromCharCode(97 +index));
console.log(generarArray(5))
//metodos basicos de arrays//

//11. Obtener la longitud de un array//
let longitudArray = arrayVacio.leght;
console.log(longitudArray);

//12. Agregar elementos al final del array usando push()//
arrayElementos.push("d");
console.log(arrayElementos);

//13. Eliminar el último elemento del array usando pop()//
let ultimoElemento = arrayElementos.pop();
console.log(ultimoElemento);

//14. Agregar elementos al principio del array usando unshift()//
arrayElementos.unshift("z");
console.log(arrayElementos)

//15. Eliminar el primer elemento del array usando shift()//
let primerElemento = arrayElementos.shift();
console.log(primerElemento)

//16. Obtener una porción del array usando slice()//
let subArray = arrayElementos.slice(1,3);
console.log(subArray);

//17. Convertir un array en un string usando join()//
let arrayString = arrayElementos.join(",")
console.log(arrayString);

//18. Obtener una subsección del array desde un índice negativo usando slice()//
let subArrayNegativo = arrayElementos.slice(-2);
console.log(subArrayNegativo);

//19. Eliminar una porción del array sin modificar el original usando slice()//
let arrayModificado = [...arrayElementos.slice(0,1),...arrayElementos.slice(2)];
console.log(arrayModificado);

//20. Agregar múltiples elementos al principio del array usando unshift() con spread operator ( ... )//
let newElementos = ["y","x"];
arrayDuplicados.unshift(...newElementos);
console.log(arrayDuplicados);