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
let arregloNumber: number[] = [];
for (let i: number = 0; i < 3; i++) {
  let numeroRgb: number = Math.floor(Math.random() * 255);
  arregloNumber.push(numeroRgb);
}

console.log(`rgb(${arregloNumber.toString()})`);

const countriesUpper: string[] = [
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

let paisesUpper: string[] = [];
let tamChar: number[] = [];
for (const country of countriesUpper) {
  paisesUpper.push(country.toUpperCase());
  tamChar.push(country.length);
}
console.log(paisesUpper);
console.log(tamChar);

const resultArray: Array<[string, string, string]> = [];

for (const pais of countriesUpper) {
  const countrySlice: string = pais.slice(0, 3).toUpperCase();
  const paisLength: number = pais.length;
  const tam: string = paisLength.toString();
  resultArray.push([pais, countrySlice, tam]);
}
console.log(resultArray);

/* const resultArray = [];
for (const country of countries) {
  const countryCode = country.slice(0, 3).toLocaleUpperCase();
  //   console.log(countryCode);
  const countryLength = country.length;
  //   console.log(countryLength);
  resultArray.push([country, countryCode, countryLength]);
}
console.log(resultArray); */
