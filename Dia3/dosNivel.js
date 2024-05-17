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
/* let aInput = prompt("Ingrese lado a:");
let bInput = prompt("Ingrese lado a:");
let cInput = prompt("Ingrese lado a:");

if (aInput !== null && bInput !== null && cInput !== null) {
  let a: number = parseInt(aInput);
  let b: number = parseInt(bInput);
  let c: number = parseInt(cInput);

  const perimetro: number = a + b + c;
  console.log(`El perimetro del triangulo es: ${perimetro}`);
} */
/* let altoInput = prompt("Ingrese la Altura: ");
let anchoInput = prompt("Ingrese la Anchura: ");

if (altoInput !== null && anchoInput !== null) {
  let alto: number = parseInt(altoInput);
  let ancho: number = parseInt(anchoInput);
  const area: number = alto * ancho;
  const perimetro: number = 2 * (alto + ancho);
  console.log(`AREA: ${area}\nPERIMETRO: ${perimetro}`);
} else {
  console.error("El usuario cancelo el ingreso de la base o la altura");
} */
var radioInput = prompt("Ingrese la radio de un circulo: ");
var pi = Math.PI;
console.log(pi);
if (radioInput != null) {
    var radio = parseInt(radioInput);
    var area = pi * Math.pow(radio, 2);
    var circunferencia = 2 * pi * radio;
    console.log("Circulo AREA: ".concat(area));
    console.log("Circunferencia AREA: ".concat(circunferencia));
}
