/* let edadInput = prompt("Ingrese su edad: ");
if (edadInput !== null) {
  let edadUser: number = parseInt(edadInput);
  edadUser >= 18
    ? console.log(`Tiene la edad suficiente para conducir`)
    : console.log(`Te faltan ${18 - edadUser} años para conducir`);
} else {
  console.log("entrada cancelada por el usuario");
} */
/* let myAge = prompt("Ingrese su edad: ");
let tuEdad: number = 30;
if (myAge !== null) {
  let miEdad: number = parseInt(myAge);
  tuEdad > miEdad
    ? console.log(`Eres ${tuEdad - miEdad} mayor que yo`)
    : miEdad > tuEdad
    ? console.log(`Yo soy ${miEdad - tuEdad} años mayor que tu`)
    : console.log(`tu edad: ${tuEdad} es igual a mi edad ${miEdad}`);
} else {
  console.log("Entrada cancelada por el usuario");
} */
var a = 4;
var b = 4;
if (a > b) {
    console.log("".concat(a, " es mayor que ").concat(b));
}
else if (b > a) {
    console.log("b: ".concat(b, " es mayor que a: ").concat(a));
}
else {
    console.log("".concat(a, " es igual ").concat(b));
}
a > b
    ? console.log("".concat(a, " es mayor que ").concat(b))
    : b > a
        ? console.log("b: ".concat(b, " es mayor que a: ").concat(a))
        : console.log("".concat(a, " es igual ").concat(b));
