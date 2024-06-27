const countriesArreglo: string[] = [
  "Finland",
  "Denmark",
  "Sweden",
  "Norway",
  "Iceland",
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
];

// Definir la función con el tipo de retorno void
function sayHello(): void {
  console.log("Hello");
}
// Usar setInterval y guardar el identificador del intervalo con el tipo number
const intervalId: number = setInterval(sayHello, 1000); // Imprime "Hello" cada segundo
// Si necesitas limpiar el intervalo, usa clearInterval
clearInterval(intervalId);
// Usar setTimeout y guardar el identificador del temporizador con el tipo number
const timeoutId: number = setTimeout(sayHello, 2000); // Imprime "Hello" después de 2 segundos
// Si necesitas limpiar el temporizador antes de que se ejecute, usa clearTimeout

clearTimeout(timeoutId);

// Definimos el tipo de la función callback
type CallbackFunction = (n: number) => number;
// Una función callback, el nombre de la función puede ser cualquier nombre
const callback: CallbackFunction = (n: number): number => {
  return n ** 2;
};

// Función que toma otra función como callback
function cube(callback: CallbackFunction, n: number): number {
  return callback(n) * n;
}

console.log(cube(callback, 3));

type CallbackFunctionString = (cadena: string) => string;

const callbackString: CallbackFunctionString = (cadena: string): string => {
  return cadena.toLowerCase();
};

function lowerCase(
  callbackString: CallbackFunctionString,
  cadena: string
): string {
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

numbers.forEach((elemento: number, indice: number) =>
  console.log(
    `Arreglo: ${numbers}\nPosicion: ${indice + 1}\televado al cuadrado => ${
      elemento * elemento
    }`
  )
);
// Usar map para crear un nuevo array con los números elevados al cuadrado
const numerosCuadrados: number[] = numbers.map(
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

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Salida: 15

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
console.log(totalFruits); // Salida: 12

// countriesArreglo.forEach((pais: string) => console.log(pais));
// namesArreglo.forEach((name: string) => console.log(name));
// numbers.forEach((numero: number) => console.log(numero));

const mayusculasFrutas: string[] = fruits.map((fruta: Fruit) =>
  fruta.name.toUpperCase()
);
console.log(mayusculasFrutas);
const tamPaises: number[] = countriesArreglo.map(
  (countri: string) => countri.length
);
console.log(tamPaises);
const precioDoble: number[] = fruits.map((fruta: Fruit) => fruta.quantity ** 2);
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
