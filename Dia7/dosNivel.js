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
var solveQuadratic = function (a, b, c) {
    if (a === 0) {
        console.log("El coeficiente ".concat(a, " no puede ser 0"));
    }
    var X1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var X2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return "valor de x1: ".concat(X1, " y valor de x2: ").concat(X2);
};
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}
