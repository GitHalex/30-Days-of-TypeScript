var countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];
var webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
var mixedDataTypes = [
    "Alex",
    2024,
    true,
    { country: "Bolivia", city: "Potosi" },
    { skills: ["Html", "CSS", "JS", "React", "Python"] },
];
console.log("El tama\u00F1o del arreglo mixedDataTypes es ".concat(mixedDataTypes.length));
var itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
];
console.log(itCompanies);
console.log("cantidad de empresas ".concat(itCompanies.length));
var primerElemento = itCompanies[0];
var medio = Math.floor(itCompanies.length / 2); // Redondea hacia abajo para asegurar un índice entero
var segundoElemento; // Declaración fuera del condicional para mantener el alcance
if (itCompanies.length % 2 === 0) {
    // Si la longitud del array es par, toma el elemento a la izquierda del medio
    segundoElemento = itCompanies[medio - 1];
}
else {
    // Si la longitud del array es impar, toma el elemento del medio
    segundoElemento = itCompanies[medio];
}
console.log(primerElemento);
console.log(segundoElemento);
var ultimoElemento = itCompanies[itCompanies.length - 1];
console.log(ultimoElemento);
/* type CountryCity = { country: string; city: string };
type Skills = { skills: string[] };
type MixedArray = (string | number | boolean | CountryCity | Skills)[];

const arr: MixedArray = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];

let js = "JavaScript";
const charsInJavaScript: string[] = js.split("");
console.log(charsInJavaScript);

// Creando un array usando split
let companiesString: string =
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companiesCadena: string[] = companiesString.split(",");
console.log(companiesCadena);

// Acceder a los elementos de un array usando el index
const fruits: string[] = ["banana", "orange", "mango", "lemon"];
let primero: string = fruits[0];
let segundo: string = fruits[1];
let ultimo: number = fruits.length - 1;
console.log(primero);
console.log(segundo);
console.log(fruits[ultimo]);

// Modificar elementos de array
const numbers: number[] = [1, 2, 3, 4, 5, 2];
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers); */
// Métodos para manipular arrays
// constructor de arrays
/* const arrCreado: string[] = Array(8).fill("X");
console.log(arrCreado);
const nameArray: string[] = Array("Alex", "Cristiano");
console.log(nameArray); */
/* // Concatenación de arrays usando concat
const firstList: number[] = [1, 2, 3];
const secondList: number[] = [4, 5, 6];
const thirdList: number[] = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]
console.log(thirdList.length); // [1, 2, 3, 4, 5, 6]
console.log("Obtener el index de una elemento en un array"); // [1, 2, 3, 4, 5, 6]

// indexOf:Para verificar si un elemento existe en un array. Si existe, devuelve el index, de lo contrario devuelve -1.
console.log(numbers.indexOf(6)); //-1
console.log(fruits.indexOf("banana"));

let index: number = fruits.indexOf("banana");
if (index === -1) {
  console.log("Esta fruta no existe");
} else {
  console.log("esta fruta ");
}
index === -1
  ? console.log("Esta fruta no existe en el array.")
  : index === 0
  ? console.log("Esta fruta existe en el primero")
  : console.log("no existe ");

// lastIndexOf: Da la posición del último elemento en el array. Si existe, devuelve el index, de lo contrario, devuelve -1.
console.log(numbers.lastIndexOf(2)); */
// includes:Para verificar si un elemento existe en un array. Si existe, devuelve true, de lo contrario devuelve false.
// console.log(numbers.includes(5)); // true
/* // Array.isArray:Para verificar si el tipo de dato en un array
const numbersArray: number[] = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbersArray)); // true

// toString:Convierte un array a string
console.log(numbers.toString());

const namesEntrada: string[] = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(namesEntrada.toString());
// Unir elementos de un array
console.log(namesEntrada.join(""));

console.log(numbers.slice(0, numbers.length));
console.log(numbers.slice(1, 4));

numbers.splice(0, 1);
console.log(numbers);

numbers.push(6);
console.log(numbers);

numbers.pop(); // -> eliminar un elemento del final
console.log(numbers);

numbers.unshift(0); // -> Añadir un elemento al inicio
console.log(numbers);

numbers.reverse(); // -> reverse array order
console.log(numbers);

const arrayOfArray: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); */
