/* const solveLinEquationForX = (
  a: number,
  b: number,
  c: number,
  y: number
): number => {
  if (a === 0) {
    throw new Error("El coeficiente 'a' no puede ser cero.");
  }
  return (-c - b * y) / a;
};

const a: number = 2;
const b: number = 3;
const c: number = -6;
const y: number = 1;

try {
  const x: number = solveLinEquationForX(a, b, c, y);
  console.log(`Para y = ${y}, x = ${x}`);
} catch (error) {
  console.error(error.message);
} */
/* const solveQuadratic = (a: number, b: number, c: number): string => {
  if (a === 0) {
    console.log(`El coeficiente ${a} no puede ser 0`);
  }
  let X1: number = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let X2: number = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  return `valor de x1: ${X1} y valor de x2: ${X2}`;
};

console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic(1, -1, 0));  */
/* const namesArray = (names: string[]): void => {
  for (const name of names) {
    console.log(name);
  }
};

namesArray(["Alex", "Pijas"]); */
/* const showDateTime = (): string => {
  const now: Date = new Date();
  const day: string = now.getDate().toString().padStart(2, "0");
  const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
  const year: string = now.getFullYear().toString();
  const hours: string = now.getHours().toString().padStart(2, "0");
  const minutes: string = now.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

console.log(showDateTime()); */
var swapValues = function (x, y) {
    var temp = x;
    x = y;
    y = temp;
    return [x, y];
};
var _a = swapValues(3, 5), newX = _a[0], newY = _a[1];
console.log("x: ".concat(newX, ", y: ").concat(newY));
var reverseArray = function (arregloNumbers) {
    var i = 0;
    var arregloReverse = [];
    var tamanio = arregloNumbers.length - 1;
    while (tamanio >= i) {
        arregloReverse.push(arregloNumbers[tamanio]);
        tamanio--;
    }
    return arregloReverse;
};
console.log(reverseArray([1, 2, 3, 4, 5]));
