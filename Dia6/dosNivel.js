var varriableArreglo = "abcdefghijklmnopqrstuvwxuz1234567890";
var tamanio = Math.floor(Math.random() * varriableArreglo.length);
var password = "";
for (var index = 0; index < tamanio; index++) {
    var indice = Math.floor(Math.random() * varriableArreglo.length);
    password += varriableArreglo[indice];
}
console.log(password);
var hexadecimal = "#";
for (var i = 0; i < 5; i++) {
    var char = Math.floor(Math.random() * varriableArreglo.length);
    hexadecimal += varriableArreglo[char];
}
console.log(hexadecimal);
