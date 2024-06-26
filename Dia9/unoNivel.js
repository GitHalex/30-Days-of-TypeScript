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
// Una función callback, el nombre de la función puede ser cualquier nombre
var callback = function (n) {
    return Math.pow(n, 2);
};
// Función que toma otra función como callback
function cube(callback, n) {
    return callback(n) * n;
}
console.log(cube(callback, 3));
var sumArray = function (arr) {
    var suma = 0;
    arr.forEach(function (element) {
        suma += element;
    });
    return suma;
};
console.log(sumArray(numbers));
countriesArreglo.forEach(function (element, i) {
    console.log("".concat(i, " -> ").concat(element.toUpperCase()));
});
var mayusculasPaises = countriesArreglo.map(function (pais) { return pais.toUpperCase(); });
console.log(mayusculasPaises);
// Definir el tipo del array de entrada
var numbersArr = [1, 2, 3, 4, 5];
// Usar la función map con una función flecha tipada
var numbersSquare = numbersArr.map(function (num) { return num * num; });
console.log(numbersSquare);
