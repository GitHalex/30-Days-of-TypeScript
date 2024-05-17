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

let radioInput = prompt("Ingrese la radio de un circulo: ");
let pi: number = Math.PI;
console.log(pi);
if (radioInput != null) {
  let radio: number = parseInt(radioInput);
  const area: number = pi * radio ** 2;
  const circunferencia: number = 2 * pi * radio;
  console.log(`Circulo AREA: ${area}`);
  console.log(`Circunferencia AREA: ${circunferencia}`);
}
