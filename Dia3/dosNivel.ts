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

/* let radioInput = prompt("Ingrese la radio de un circulo: ");
let pi: number = Math.PI;
console.log(pi);
if (radioInput != null) {
  let radio: number = parseInt(radioInput);
  const area: number = pi * radio ** 2;
  const circunferencia: number = 2 * pi * radio;
  console.log(`Circulo AREA: ${area}`);
  console.log(`Circunferencia AREA: ${circunferencia}`);
} */

/* // Definir la pendiente (m) y la intersección en Y (b) a partir de la ecuación y = mx + b
const m: number = 2;
const b: number = -2;

// Función para calcular la intersección en X
function calcularInterseccionX(m: number, b: number): number {
  // La intersección en X se calcula estableciendo y = 0 y resolviendo para x
  // 0 = mx + b  =>  x = -b / m
  return -b / m;
}

// Función para calcular la intersección en Y (que ya conocemos)
function calcularInterseccionY(b: number): number {
  // La intersección en Y es el valor de b
  return b;
}

// Calcular la intersección en X
const interseccionX: number = calcularInterseccionX(m, b);

// Calcular la intersección en Y
const interseccionY: number = calcularInterseccionY(b);

// Mostrar los resultados
console.log("Pendiente (m):", m);
console.log("Intersección en X:", interseccionX);
console.log("Intersección en Y:", interseccionY); */

/* // Definimos los puntos
const x1: number = 2;
const y1: number = 2;
const x2: number = 6;
const y2: number = 10;

// Función para calcular la pendiente
function calcularPendiente(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  // Utilizamos la fórmula de la pendiente: m = (y2 - y1) / (x2 - x1)
  return (y2 - y1) / (x2 - x1);
}

// Calculamos la pendiente
const pendiente: number = calcularPendiente(x1, y1, x2, y2);

// Mostramos el resultado
console.log(
  `La pendiente entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es:`,
  pendiente
); */
