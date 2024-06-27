var countriesArreglo = [
    "Finland",
    "Denmark",
    "Sweden",
    "Norway",
    "Iceland",
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
var sum = numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
console.log(sum); // Salida: 15
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
var mayusculasFrutas = fruits.map(function (fruta) {
    return fruta.name.toUpperCase();
});
console.log(mayusculasFrutas);
var tamPaises = countriesArreglo.map(function (countri) { return countri.length; });
console.log(tamPaises);
var precioDoble = fruits.map(function (fruta) { return Math.pow(fruta.quantity, 2); });
console.log(precioDoble);
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
