/* let baseInput = prompt("Ingrese base: ");
let alturaInput = prompt("Ingrese altura: ");
if (baseInput !== null && alturaInput !== null) {
  let base: number = parseInt(baseInput);
  let altura: number = parseInt(alturaInput);
  const areaTriangulo: number = (base * altura) / 2;
  alert(`El area del triangulo es: ${areaTriangulo}`);
} else {
  console.error("El usuario cancelo el ingreso de la base o la altura");
} */
var aInput = prompt("Ingrese lado a:");
var bInput = prompt("Ingrese lado a:");
var cInput = prompt("Ingrese lado a:");
if (aInput !== null && bInput !== null && cInput !== null) {
    var a = parseInt(aInput);
    var b = parseInt(bInput);
    var c = parseInt(cInput);
    var perimetro = a + b + c;
    console.log("El perimetro del triangulo es: ".concat(perimetro));
}
