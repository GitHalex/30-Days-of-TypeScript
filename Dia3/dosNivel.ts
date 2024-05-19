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

/* // Definir la función para calcular y
function calcularY(x: number): number {
  return x * x + 6 * x + 9;
}

// Probar diferentes valores de x
const valoresX: number[] = [-10, -5, -3, 0, 3, 5, 10];

console.log("Calculando y para diferentes valores de x:");
valoresX.forEach((x) => {
  const y = calcularY(x);
  console.log(`Para x = ${x}, y = ${y}`);
});

// Encontrar el valor de x para el cual y = 0
// Sabemos que la solución exacta es x = -3, pero vamos a encontrarlo programáticamente también

function encontrarXParaY0(): number {
  for (let x = -100; x <= 100; x++) {
    // Buscamos en un rango de -100 a 100
    if (calcularY(x) === 0) {
      return x;
    }
  }
  return NaN; // Si no encontramos un valor en el rango
}

const xParaY0 = encontrarXParaY0();
console.log(`El valor de x para el cual y es 0 es: ${xParaY0}`); */

/* 
let horaInput = prompt("Ingrese Horas: ");
let tarifaInput = prompt("Introduce la tarifa por hora: ");
if (horaInput !== null && tarifaInput !== null) {
  const hora: number = parseInt(horaInput);
  const tarifa: number = parseInt(tarifaInput);
  let ganancia: number = hora * tarifa;
  console.log(`Su ganancia semanal es ${ganancia}`);
} */

/* let nameInput = prompt("Ingrese su nombre: ");
if (nameInput !== null) {
  const name: number = nameInput.length;
  if (name >= 7) {
    console.log(`${nameInput} tiene mas de 7 caracteres`);
  } else {
    console.log("Su nombre tiene menos de 7 caracteres");
  }
} */

/* let firstNa: string = "Asabeneh";
let lastNa: string = "Yetayeh";

if (firstNa.length > lastNa.length) {
  console.log(
    `tu primer nombre: ${firstNa} es mas grande que tu apellido: ${lastNa}`
  );
} else if (lastNa.length > firstNa.length) {
  console.log(
    `Tu apellido: ${lastNa} es mas grande que tu primer nombre: ${lastNa}`
  );
} else {
  console.log(`${firstNa} su tamaño es igual ${lastNa}`);
} */

/* let myAge: number = 250;
let yourAge: number = 25;

const diferencia: number = myAge - yourAge;
console.log(`Soy ${diferencia} años mayor que tu`); */

/* let userInput = prompt("Ingrese el año que nacio: ");
if (userInput !== null) {
  const userYear: number = parseInt(userInput);
  let now: Date = new Date();
  let year: number = now.getFullYear();
  let resultadoYear = year - userYear;
  if (resultadoYear >= 18) {
    console.log(
      `Tienes ${resultadoYear} años.Tienes la edad suficiente para conducir.`
    );
  } else {
    console.log(
      `Tienes ${resultadoYear} años.Podras conducir despues de ${
        18 - resultadoYear
      } años`
    );
  }
} */

/* let yearLife = prompt("Ingrese el numero de años de vida: ");
if (yearLife !== null) {
  let year: number = parseInt(yearLife);
  if (!isNaN(year) && year >= 0) {
    // Corrección: 365 días en un año
    let vidaSegundos: number = year * 365 * 24 * 60 * 60;
    console.log(`Viviste aproximadamente ${vidaSegundos} segundos`);
  } else {
    console.log("Por favor, ingrese un número válido de años.");
  }
} else {
  console.log("Entrada cancelada por el usuario");
} */

/* // Función para agregar un cero inicial si el número es menor de 10
function pad(num: number): string {
  return num < 10 ? "0" + num : num.toString();
}

// Función para formatear la fecha
function formatDate(date: Date, format: string): string {
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Los meses comienzan en 0
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  switch (format) {
    case "YYYY-MM-DD HH:mm":
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    case "DD-MM-YYYY HH:mm":
      return `${day}-${month}-${year} ${hours}:${minutes}`;
    case "DD/MM/YYYY HH:mm":
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    default:
      throw new Error("Formato no soportado");
  }
}

// Crear una nueva fecha
const nowDate = new Date();

// Formatear la fecha en diferentes formatos
const format1 = formatDate(nowDate, "YYYY-MM-DD HH:mm");
const format2 = formatDate(nowDate, "DD-MM-YYYY HH:mm");
const format3 = formatDate(nowDate, "DD/MM/YYYY HH:mm");

// Imprimir los formatos
console.log(format1); // Formato: YYYY-MM-DD HH:mm
console.log(format2); // Formato: DD-MM-YYYY HH:mm
console.log(format3); // Formato: DD/MM/YYYY HH:mm */
