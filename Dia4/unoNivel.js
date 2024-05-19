/* let edadInput = prompt("Ingrese su edad: ");
if (edadInput !== null) {
  let edadUser: number = parseInt(edadInput);
  edadUser >= 18
    ? console.log(`Tiene la edad suficiente para conducir`)
    : console.log(`Te faltan ${18 - edadUser} años para conducir`);
} else {
  console.log("entrada cancelada por el usuario");
} */
var myAge = prompt("Ingrese su edad: ");
var tuEdad = 30;
if (myAge !== null) {
    var miEdad = parseInt(myAge);
    tuEdad > miEdad
        ? console.log("Eres ".concat(tuEdad - miEdad, " mayor que yo"))
        : miEdad > tuEdad
            ? console.log("Yo soy ".concat(miEdad - tuEdad, " a\u00F1os mayor que tu"))
            : console.log("tu edad: ".concat(tuEdad, " es igual a mi edad ").concat(miEdad));
}
else {
    console.log("Entrada cancelada por el usuario");
}
