/* let varriableArreglo: string = "abcdefghijklmnopqrstuvwxuz1234567890";
let tamanio: number = Math.floor(Math.random() * varriableArreglo.length);
let password: string = "";
for (let index = 0; index < tamanio; index++) {
  let indice: number = Math.floor(Math.random() * varriableArreglo.length);
  password += varriableArreglo[indice];
}
console.log(password);

let hexadecimal: string = "#";
for (let i: number = 0; i < 5; i++) {
  let char: number = Math.floor(Math.random() * varriableArreglo.length);
  hexadecimal += varriableArreglo[char];
}

console.log(hexadecimal); */
/* let arregloNumber: number[] = [];
for (let i: number = 0; i < 3; i++) {
  let numeroRgb: number = Math.floor(Math.random() * 255);
  arregloNumber.push(numeroRgb);
}

console.log(`rgb(${arregloNumber.toString()})`); */
var countriesUpper = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Iceland",
    "Japan",
    "Kenya",
];
/* let paisesUpper: string[] = [];
let tamChar: number[] = [];
for (const country of countriesUpper) {
  paisesUpper.push(country.toUpperCase());
  tamChar.push(country.length);
}
console.log(paisesUpper);
console.log(tamChar);

const resultArray: Array<[string, string, string]> = [];

const arregloLand: string[] = [];
const arregloIa: string[] = [];

for (const pais of countriesUpper) {
  const countrySlice: string = pais.slice(0, 3).toUpperCase();
  const paisLength: number = pais.length;
  const tam: string = paisLength.toString();
  resultArray.push([pais, countrySlice, tam]);
  if (pais.indexOf("land") !== -1) {
    arregloLand.push(pais);
  }
  if (pais.indexOf("ia") !== -1) {
    arregloIa.push(pais);
  }
}
console.log(resultArray);

console.log(arregloLand);
console.log(arregloIa); */
/* let mayor: number = 0;
let paisMayor: string = "";
let cincoPais: string[] = [];
for (const pais of countriesUpper) {
  if (mayor < pais.length) {
    mayor = pais.length;
    paisMayor = pais;
  }
  if (pais.length == 5) {
    cincoPais.push(pais);
  }
}

console.log(mayor);
console.log(paisMayor);
console.log(cincoPais); */
var webTechsArreglo = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
var mayorTech = 0;
var techonology = "";
var resultArray = [];
for (var _i = 0, webTechsArreglo_1 = webTechsArreglo; _i < webTechsArreglo_1.length; _i++) {
    var tech = webTechsArreglo_1[_i];
    if (mayorTech < tech.length) {
        mayorTech = tech.length;
        techonology = tech;
    }
    var tamTech = tech.length;
    var convertido = tamTech.toString();
    resultArray.push([tech, convertido]);
}
console.log("El mayor letra del arreglo es ".concat(techonology));
console.log(resultArray);
var mernStackArreglo = ["MongoDB", "Express", "React", "Node"];
var stackMern = [];
for (var _a = 0, mernStackArreglo_1 = mernStackArreglo; _a < mernStackArreglo_1.length; _a++) {
    var stack = mernStackArreglo_1[_a];
    stackMern.push(stack[0]);
}
var mernString = stackMern.join("");
console.log(mernString);
var frutas = ["banana", "orange", "mango", "lemon"];
var tamanio = frutas.length - 1;
var i = 0;
console.log(i);
while (tamanio >= 0) {
    console.log(frutas[tamanio]);
    tamanio--;
}
