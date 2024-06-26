var countriesArreglo = [
    "Finland",
    "Denmark",
    "Sweden",
    "Norway",
    "Iceland",
    "España",
];
var namesArreglo = ["Alex", "Mathias", "Elias", "Brook"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];
// Definir la función con el tipo de retorno void
function sayHello() {
    console.log("Hello");
}
// Usar setInterval y guardar el identificador del intervalo con el tipo number
var intervalId = setInterval(sayHello, 1000); // Imprime "Hello" cada segundo
// Si necesitas limpiar el intervalo, usa clearInterval
clearInterval(intervalId);
// Usar setTimeout y guardar el identificador del temporizador con el tipo number
var timeoutId = setTimeout(sayHello, 2000); // Imprime "Hello" después de 2 segundos
// Si necesitas limpiar el temporizador antes de que se ejecute, usa clearTimeout
clearTimeout(timeoutId);
// Una función callback, el nombre de la función puede ser cualquier nombre
var callback = function (n) {
    return Math.pow(n, 2);
};
// Función que toma otra función como callback
function cube(callback, n) {
    return callback(n) * n;
}
console.log(cube(callback, 3));
var callbackString = function (cadena) {
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
numbers.forEach(function (elemento, indice) {
    return console.log("Arreglo: ".concat(numbers, "\nPosicion: ").concat(indice + 1, "\televado al cuadrado => ").concat(elemento * elemento));
});
// Usar map para crear un nuevo array con los números elevados al cuadrado
var numerosCuadrados = numbers.map(function (elemento) { return elemento * elemento; });
console.log(numerosCuadrados); // [1, 4, 9, 16, 25]
var mayusculasPaises = countriesArreglo.map(function (pais) { return pais.toUpperCase(); });
console.log(mayusculasPaises);
var countriesContaingLand = countriesArreglo.filter(function (pais) { return pais.length === 7; });
console.log(countriesContaingLand);
var scores = [
    { name: "Asabeneh", score: 95 },
    { name: "Lidiya", score: 98 },
    { name: "Mathias", score: 80 },
    { name: "Elias", score: 50 },
    { name: "Martha", score: 85 },
    { name: "John", score: 100 },
];
var scoresGreaterEighty = scores.filter(function (score) { return score.score > 80; });
console.log(scoresGreaterEighty);
var fruits = [
    { name: "apple", quantity: 5 },
    { name: "banana", quantity: 3 },
    { name: "orange", quantity: 4 },
];
var totalFruits = fruits.reduce(function (acc, fruit) { return acc + fruit.quantity; }, 0);
console.log(totalFruits); // Salida: 12
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
var landPaises = countriesArreglo.filter(function (pais) {
    return pais.includes("land");
});
console.log(landPaises);
var seisCaracteres = countriesArreglo.filter(function (pais) { return pais.length === 6; });
console.log(seisCaracteres);
var seisOMasCaracteres = countriesArreglo.filter(function (pais) { return pais.length >= 6; });
console.log(seisOMasCaracteres);
var paisesConE = countriesArreglo.filter(function (pais) {
    return pais.startsWith("E");
});
console.log(paisesConE);
var valoresPrecios = products.filter(function (producto) { return producto.price !== "" && producto.price !== " "; });
console.log(valoresPrecios);
function getStringLists(arr) {
    return arr.filter(function (element) { return typeof element === "string"; });
}
// Ejemplo de uso
var mixedArray = [1, "hello", true, "world", {}, "typescript", 42];
var stringArray = getStringLists(mixedArray);
console.log(stringArray); // ["hello", "world", "typescript"]
var sum = numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
console.log(sum); // Salida: 15
var concatenarCadenas = countriesArreglo.reduce(function (acumulador, actual) { return acumulador + "," + actual; });
console.log(concatenarCadenas);
var algunoTam7 = namesArreglo.some(function (name) { return name.length === 7; });
console.log(algunoTam7);
var todosLand = countriesArreglo.every(function (pais) {
    return pais.includes("land");
});
console.log(todosLand);
var primerElementoTam6 = countriesArreglo.find(function (pais) { return pais.length === 20; });
primerElementoTam6 !== undefined
    ? console.log(primerElementoTam6)
    : console.log("No se encontro un pais con la longitud de 20");
var posicionPaisTam6 = countriesArreglo.findIndex(function (pais) { return pais.length === 6; });
console.log(posicionPaisTam6);
var norwayPos = countriesArreglo.findIndex(function (pais) { return pais == "Norway"; });
console.log(norwayPos);
var rusiaPos = countriesArreglo.findIndex(function (pais) { return pais == "Rusia"; });
console.log(rusiaPos);
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
