// flat => aplana las matrices por profundidad
const array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]];
console.log(array.flat(2));

// flatMap() => Mapea y aplana, devuelve un array con los valores aplanados y da la opción de ejecutar 
//un callback por cada uno de los elementos.
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((v) => [v, v * 2]));