let edadInput = prompt("Ingrese su edad: ");
if (edadInput !== null) {
  let edadUser: number = parseInt(edadInput);
  edadUser >= 18
    ? console.log(`Tiene la edad suficiente para conducir`)
    : console.log(`Te faltan ${18 - edadUser} años para conducir`);
} else {
  console.log("entrada cancelada por el usuario");
}
