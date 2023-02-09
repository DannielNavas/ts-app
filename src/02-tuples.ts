const price: (number | string)[] = [10, 20, 30, '40'];

// Tuples
// TODO: las tuplas son un tipo de dato que nos permite definir un arreglo con un número fijo de elementos

let user: [string, number, boolean];
user = ['Danny', 33, true];
// TODO: destructuring de una tupla
const [username1, age] = user;
console.log(username1, age);
