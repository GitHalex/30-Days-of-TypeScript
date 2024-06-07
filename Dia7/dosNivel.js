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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
/* const swapValues = (x: number, y: number): [number, number] => {
  const temp: number = x;
  x = y;
  y = temp;
  return [x, y];
};

const [newX, newY] = swapValues(3, 5);
console.log(`x: ${newX}, y: ${newY}`); */
/* const reverseArray = (arregloNumbers: number[]): number[] => {
  let i: number = 0;
  const arregloReverse: number[] = [];
  let tamanio: number = arregloNumbers.length - 1;
  while (tamanio >= i) {
    arregloReverse.push(arregloNumbers[tamanio]);
    tamanio--;
  }

  return arregloReverse;
};

console.log(reverseArray([1, 2, 3, 4, 5])); */
/* const capitalizaArray = (arregloName: string[]): string[] => {
  const capitalizedarray: string[] = [];
  for (const name of arregloName) {
    capitalizedarray.push(name.toUpperCase());
  }
  return capitalizedarray;
};

console.log(capitalizaArray(["Alex", "Ariel", "Max"])); */
/* const addItem = (cadena: string): string[] => {
  const arregloCadena: string[] = [];
  arregloCadena.push(cadena);
  return arregloCadena;
};

console.log(addItem("alex"));
console.log(addItem("píjas")); */
var removeItem = function (arr, index) {
    if (index < 0 || index >= arr.length) {
        throw new Error("Index out of bounds");
    }
    return __spreadArray(__spreadArray([], arr.slice(0, index), true), arr.slice(index + 1), true);
};
// Ejemplo de uso
var items = ["apple", "banana", "cherry", "date"];
var newItems = removeItem(items, 2);
console.log(newItems);
