/* function fullName(): void {
  console.log(`Mi nombre completo es: Alex Lopez`);
}
fullName(); */
function fullName(firstName, lastName) {
    return "Mi nombre es: ".concat(firstName, " y mi apellido es: ").concat(lastName);
}
console.log(fullName("Alex", "Lopez"));
function addNumbers(numero1, numero2) {
    return numero1 + numero2;
}
console.log(addNumbers(2, 4));
function areaOfRectangle(ancho, alto) {
    var area = ancho * alto;
    return "El area es: ".concat(area);
}
console.log(areaOfRectangle(2, 4));
function perimeterOfRectangle(length, width) {
    var perimeter = 2 * (length + width);
    return "el perimetro del rectangulo es:  ".concat(perimeter);
}
console.log(perimeterOfRectangle(2, 2));
