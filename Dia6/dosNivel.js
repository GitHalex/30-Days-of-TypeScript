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
var paisesUpper = [];
var tamChar = [];
for (var _i = 0, countriesUpper_1 = countriesUpper; _i < countriesUpper_1.length; _i++) {
    var country = countriesUpper_1[_i];
    paisesUpper.push(country.toUpperCase());
    tamChar.push(country.length);
}
console.log(paisesUpper);
console.log(tamChar);
var resultArray = [];
var arregloLand = [];
var arregloIa = [];
for (var _a = 0, countriesUpper_2 = countriesUpper; _a < countriesUpper_2.length; _a++) {
    var pais = countriesUpper_2[_a];
    var countrySlice = pais.slice(0, 3).toUpperCase();
    var paisLength = pais.length;
    var tam = paisLength.toString();
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
console.log(arregloIa);
