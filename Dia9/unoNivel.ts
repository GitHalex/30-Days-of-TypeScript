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
// clearTimeout(timeoutId);

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

const sumArray = (arr: number[]): number => {
  let suma: number = 0;

  arr.forEach(function (element: number) {
    suma += element;
  });

  return suma;
};

console.log(sumArray(numbers));

countriesArreglo.forEach((element: string, i: number): void => {
  console.log(`${i} -> ${element.toUpperCase()}`);
});

const mayusculasPaises: string[] = countriesArreglo.map(
  (pais: string): string => pais.toUpperCase()
);
console.log(mayusculasPaises);

// Definir el tipo del array de entrada
const numbersArr: number[] = [1, 2, 3, 4, 5];

// Usar la función map con una función flecha tipada
const numbersSquare: number[] = numbersArr.map(
  (num: number): number => num * num
);

console.log(numbersSquare);
