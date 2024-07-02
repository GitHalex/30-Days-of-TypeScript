"use strict";
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
/* const countriesUpper: string[] = [
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
]; */
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
/* const webTechsArreglo = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let mayorTech: number = 0;
let techonology: string = "";

const resultArray: Array<[string, string]> = [];

for (const tech of webTechsArreglo) {
  if (mayorTech < tech.length) {
    mayorTech = tech.length;
    techonology = tech;
  }
  const tamTech: number = tech.length;
  let convertido: string = tamTech.toString();
  resultArray.push([tech, convertido]);
}

console.log(`El mayor letra del arreglo es ${techonology}`);
console.log(resultArray);

const mernStackArreglo: string[] = ["MongoDB", "Express", "React", "Node"];

const stackMern: string[] = [];

for (const stack of mernStackArreglo) {
  stackMern.push(stack[0]);
}

const mernString: string = stackMern.join("");
console.log(mernString);

const frutas: string[] = ["banana", "orange", "mango", "lemon"];

let tamanio: number = frutas.length - 1;

let i: number = 0;
console.log(i); */
/* while (tamanio >= 0) {
  console.log(frutas[tamanio]);
  tamanio--;
} */
/* const fullStack: string[][] = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let inde: number = 0; inde < fullStack.length; inde++) {
  for (let jin: number = 0; jin < fullStack[inde].length; jin++) {
    console.log(fullStack[inde][jin]);
  }
} */
