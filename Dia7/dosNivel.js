"use strict";
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
/* const removeItem = (arr: any[], index: number): any[] => {
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

// Ejemplo de uso
const items = ["apple", "banana", "cherry", "date"];
const newItems = removeItem(items, 2);
console.log(newItems); */
/* const sumOfNumbers = (n: number): number => {
  let suma: number = 0;
  for (let index = 1; index <= n; index++) {
    suma += index;
  }
  return suma;
};
console.log(sumOfNumbers(4)); */
/* const sumOfOdds = (numeroIngresado: number): number => {
  let sumaOdds: number = 0;
  for (let i: number = 1; i <= numeroIngresado; i++) {
    if (i % 2 != 0) {
      sumaOdds = sumaOdds + i;
    }
  }
  return sumaOdds;
};
console.log(sumOfOdds(5)); */
/* const sumOfEven = (numeroIngresado: number): number => {
  let sumaEven: number = 0;
  for (let i: number = 1; i <= numeroIngresado; i++) {
    if (i % 2 == 0) {
      sumaEven = sumaEven + i;
    }
  }
  return sumaEven;
};
console.log(sumOfEven(5)); */
/* const evensAndOdds = (inputNumber: number): string => {
  let sumaOdds: number = 0;
  let sumaEven: number = 0;
  for (let i: number = 0; i <= inputNumber; i++) {
    if (i % 2 == 0) {
      sumaEven += 1;
    } else {
      sumaOdds += 1;
    }
  }
  return `El numero de impares son ${sumaOdds}.\nEl numero de pares es ${sumaEven}`;
};

console.log(evensAndOdds(100)); */
// Declaración
/* function sumAll(...args: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(10, 20, 13, 40, 10)); // 93
console.log(sumAll(15, 20, 30, 25, 10, 33, 40)); */ // 173
// declaración
/* const sumAllNums = (...args: number[]): number => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173 */
const randomUserIp = (claseC) => {
    let primerOcteto = Math.floor(Math.random() * 256);
    let segundoOcteto = Math.floor(Math.random() * 256);
    let tercerOcteto = Math.floor(Math.random() * 256);
    return `User IP: ${claseC}:${primerOcteto}:${segundoOcteto}:${tercerOcteto}`;
};
console.log(randomUserIp(192));
/* const randomMacAddress = (): string => {
  const getRandomHex = (): string => {
    const hex: string = Math.floor(Math.random() * 256).toString(16);
    return hex.padStart(2, "0");
  };

  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    macAddress += getRandomHex();
    if (i < 5) {
      macAddress += ":";
    }
  }

  return macAddress;
};

// Ejemplo de uso
console.log(randomMacAddress()); */ // Ejemplo de salida: "e4:62:b1:4f:28:3d"
/* const randomHexaNumberGenerator = (): string => {
  let char: string = "#";
  const characteres: string = "0123456789ABCDEF";
  for (let i: number = 0; i < 6; i++) {
    let charRandom: number = Math.floor(Math.random() * characteres.length);
    char = char + characteres[charRandom];
  }

  return char;
};
console.log(randomHexaNumberGenerator()); */
/* const userIdGenerator = (): string => {
  let characteres: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789";
  let id: string = "";
  for (let index: number = 0; index < 7; index++) {
    let charRandom: number = Math.floor(Math.random() * characteres.length);
    id += characteres[charRandom];
  }
  return id;
};

console.log(userIdGenerator()); */
