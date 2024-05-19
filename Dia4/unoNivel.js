var edadInput = prompt("Ingrese su edad: ");
if (edadInput !== null) {
    var edadUser = parseInt(edadInput);
    edadUser >= 18
        ? console.log("Tiene la edad suficiente para conducir")
        : console.log("Te faltan ".concat(18 - edadUser, " a\u00F1os para conducir"));
}
else {
    console.log("entrada cancelada por el usuario");
}
