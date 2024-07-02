"use strict";
/* const countriesArreglo: string[] = [
  "Finland",
  "Denmark",
  "Sweden",
  "Norway",
  "Iceland",
  "España",
];

const namesArreglo: string[] = ["Alex", "Mathias", "Elias", "Brook"];

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Product {
  product: string;
  price: number | string;
}

const products: Product[] = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
]; */
// Definir la función con el tipo de retorno void
function sayHello() {
    console.log("Hello");
}
// Usar setInterval y guardar el identificador del intervalo con el tipo number
const intervalId = setInterval(sayHello, 1000); // Imprime "Hello" cada segundo
// Si necesitas limpiar el intervalo, usa clearInterval
clearInterval(intervalId);
// Usar setTimeout y guardar el identificador del temporizador con el tipo number
const timeoutId = setTimeout(sayHello, 2000); // Imprime "Hello" después de 2 segundos
// Si necesitas limpiar el temporizador antes de que se ejecute, usa clearTimeout
clearTimeout(timeoutId);
// Una función callback, el nombre de la función puede ser cualquier nombre
const callback = (n) => {
    return n ** 2;
};
// Función que toma otra función como callback
function cube(callback, n) {
    return callback(n) * n;
}
console.log(cube(callback, 3));
const callbackString = (cadena) => {
    return cadena.toLowerCase();
};
function lowerCase(callbackString, cadena) {
    return callbackString(cadena) + " Esta en minuscula";
}
console.log(lowerCase(callbackString, "AlEx"));
/* const sumArray = (arr: number[]): number => {
  let suma: number = 0;

  arr.forEach(function (element: number) {
    suma += element;
  });

  return suma;
};

console.log(sumArray(numbers)); */
/* countriesArreglo.forEach((element: string, i: number): void => {
  console.log(`${i} -> ${element.toUpperCase()}`);
}); */
numbers.forEach((elemento, indice) => console.log(`Arreglo: ${numbers}\nPosicion: ${indice + 1}\televado al cuadrado => ${elemento * elemento}`));
// Usar map para crear un nuevo array con los números elevados al cuadrado
/* const numerosCuadrados: number[] = numbers.map(
  (elemento: number): number => elemento * elemento
);
console.log(numerosCuadrados); // [1, 4, 9, 16, 25]

const mayusculasPaises: string[] = countriesArreglo.map(
  (pais: string): string => pais.toUpperCase()
);
console.log(mayusculasPaises);

const countriesContaingLand: string[] = countriesArreglo.filter(
  (pais: string) => pais.length === 7
);
console.log(countriesContaingLand);
interface Score {
  name: string;
  score: number;
}
const scores: Score[] = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];
const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

interface Fruit {
  name: string;
  quantity: number;
}
const fruits: Fruit[] = [
  { name: "apple", quantity: 5 },
  { name: "banana", quantity: 3 },
  { name: "orange", quantity: 4 },
];
const totalFruits = fruits.reduce((acc, fruit) => acc + fruit.quantity, 0);
console.log(totalFruits); // Salida: 12 */
// countriesArreglo.forEach((pais: string) => console.log(pais));
// namesArreglo.forEach((name: string) => console.log(name));
// numbers.forEach((numero: number) => console.log(numero));
/* const mayusculasFrutas: string[] = fruits.map((fruta: Fruit) =>
  fruta.name.toUpperCase()
);
console.log(mayusculasFrutas);
const tamPaises: number[] = countriesArreglo.map(
  (countri: string) => countri.length
);
console.log(tamPaises);
const precioDoble: number[] = fruits.map((fruta: Fruit) => fruta.quantity ** 2);
console.log(precioDoble);
const namesMayusculas: string[] = namesArreglo.map((name: string) =>
  name.toUpperCase()
);
console.log(namesMayusculas);
const preciosArreglo: any = products.map((precio: Product) => precio.price);
console.log(preciosArreglo); */
/* const landPaises: string[] = countriesArreglo.filter((pais: string) =>
  pais.includes("land")
);
console.log(landPaises);
const seisCaracteres: string[] = countriesArreglo.filter(
  (pais: string) => pais.length === 6
);
console.log(seisCaracteres);
const seisOMasCaracteres: string[] = countriesArreglo.filter(
  (pais: string) => pais.length >= 6
);
console.log(seisOMasCaracteres);
const paisesConE: string[] = countriesArreglo.filter((pais: string) =>
  pais.startsWith("E")
);
console.log(paisesConE);
const valoresPrecios: any = products.filter(
  (producto: any) => producto.price !== "" && producto.price !== " "
);
console.log(valoresPrecios);

function getStringLists(arr: any[]): string[] {
  return arr.filter((element: string) => typeof element === "string");
}
// Ejemplo de uso
const mixedArray: any[] = [1, "hello", true, "world", {}, "typescript", 42];
const stringArray: string[] = getStringLists(mixedArray);
console.log(stringArray); // ["hello", "world", "typescript"]

const sum: number = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Salida: 15
const concatenarCadenas: string = countriesArreglo.reduce(
  (acumulador: string, actual: string) => acumulador + "," + actual
);
console.log(concatenarCadenas);

const algunoTam7: boolean = namesArreglo.some(
  (name: string) => name.length === 7
);
console.log(algunoTam7);

const todosLand: boolean = countriesArreglo.every((pais: string) =>
  pais.includes("land")
);
console.log(todosLand);

const primerElementoTam6: string | undefined = countriesArreglo.find(
  (pais: string) => pais.length === 20
);
primerElementoTam6 !== undefined
  ? console.log(primerElementoTam6)
  : console.log("No se encontro un pais con la longitud de 20");

const posicionPaisTam6: number = countriesArreglo.findIndex(
  (pais: string) => pais.length === 6
);
console.log(posicionPaisTam6);
const norwayPos: number = countriesArreglo.findIndex(
  (pais: string) => pais == "Norway"
);
console.log(norwayPos);
const rusiaPos: number = countriesArreglo.findIndex(
  (pais: string) => pais == "Rusia"
);
console.log(rusiaPos); */
/* const areAllStr: boolean = countriesArreglo.every(
  (pais) => typeof pais === "string"
);
console.log(
  `la lista: ${countriesArreglo} son todos de tipo cadena => ${areAllStr}`
);

const producto: Product | undefined = products.find(
  (product) => product.product.length > 4
);

if (producto) {
  console.log(producto);
} else {
  console.log(
    "No se encontró ningún producto con un nombre de más de 4 caracteres."
  );
}

const result: number = numbers.findIndex((name) => name >= 7);
console.log(result);

const someAllStr: boolean = countriesArreglo.some(
  (pais) => typeof pais === "string"
);
console.log(
  `la lista: ${countriesArreglo} son algunos de tipo cadena => ${someAllStr}`
);

const numbersFloat: number[] = [9.81, 3.14, 100, 37];

console.log(numbers.sort()); // Ordenación incorrecta: [100, 3.14, 37, 9.81]

numbers.sort((a: number, b: number): number => a - b);
console.log(numbers); // Ordenación correcta: [3.14, 9.81, 37, 100]

numbers.sort((a: number, b: number): number => b - a);
console.log(numbers); // Ordenación correcta: [100, 37, 9.81, 3.14]

interface User {
  name: string;
  age: number;
} */
/* const users: User[] = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];

users.sort((a: User, b: User): number => a.age - b.age);

console.log(users); */
