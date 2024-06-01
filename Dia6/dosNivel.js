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
var mayor = 0;
var paisMayor = "";
var cincoPais = [];
for (var _i = 0, countriesUpper_1 = countriesUpper; _i < countriesUpper_1.length; _i++) {
    var pais = countriesUpper_1[_i];
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
console.log(cincoPais);
