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
var arregloNumber = [];
for (var i = 0; i < 3; i++) {
    var numeroRgb = Math.floor(Math.random() * 255);
    arregloNumber.push(numeroRgb);
}
console.log("rgb(".concat(arregloNumber.toString(), ")"));
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
    "Japan",
    "Kenya",
];
var paisesUpper = [];
for (var _i = 0, countriesUpper_1 = countriesUpper; _i < countriesUpper_1.length; _i++) {
    var country = countriesUpper_1[_i];
    paisesUpper.push(country.toUpperCase());
}
console.log(paisesUpper);
