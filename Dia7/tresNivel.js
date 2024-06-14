/* const userIdGenerator = (numberOfIds: number, idLength: number): string[] => {
  let characters: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let ids: string[] = [];

  for (let i: number = 0; i < numberOfIds; i++) {
    let id: string = "";
    for (let j: number = 0; j < idLength; j++) {
      let charRandom: number = Math.floor(Math.random() * characters.length);
      id += characters[charRandom];
    }
    ids.push(id);
  }

  return ids;
};

console.log(userIdGenerator(5, 6));
console.log(userIdGenerator(5, 16));  */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* const rgbColorGenerator = (): string => {
  const getRandomValue = (): number => Math.floor(Math.random() * 256);
  const red = getRandomValue();
  const green = getRandomValue();
  const blue = getRandomValue();
  return `rgb(${red},${green},${blue})`;
};

console.log(rgbColorGenerator()); */
/* const generateHexColor = (): string => {
  const hexChars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }
  return color;
};

const arrayOfHexaColors = (numColors: number): string[] => {
  const colors: string[] = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(generateHexColor());
  }
  return colors;
};

console.log(arrayOfHexaColors(5)); */
/* const generateRgbColor = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const arrayOfRgbColors = (numColors: number): string[] => {
  const colors: string[] = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(generateRgbColor());
  }
  return colors;
};

console.log(arrayOfRgbColors(5)); */
/**
 * Convierte un color hexadecimal a un color RGB.
 * @param hex - El color en formato hexadecimal.
 * @returns El color en formato RGB.
 */
/* const convertHexaToRgb = (hex: string): string => {
  // Verifica si el formato hexadecimal es correcto
  const validHex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (!validHex.test(hex)) {
    throw new Error("El formato hexadecimal no es válido");
  }

  // Elimina el símbolo "#" si está presente
  hex = hex.replace(/^#/, "");

  // Si el hex es de 3 caracteres, convierte a 6 caracteres
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Extrae valores de los colores rojo, verde y azul
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};

// Ejemplos de uso
console.log(convertHexaToRgb("#a3e12f")); // Output: rgb(163, 225, 47)
console.log(convertHexaToRgb("#03f")); // Output: rgb(0, 51, 255)
console.log(convertHexaToRgb("#ff5733")); // Output: rgb(255, 87, 51) */
/**
 * Genera un color hexadecimal aleatorio.
 * @returns Un color hexadecimal en formato string.
 */
/* const generateHexaColor = (): string => {
  let hex = "#";
  const chars = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}; */
/**
 * Genera un color RGB aleatorio.
 * @returns Un color RGB en formato string.
 */
/* const generateRgbColor = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}; */
/**
 * Genera una cantidad específica de colores en formato hexadecimal o RGB.
 * @param type - El tipo de color a generar ('hexa' o 'rgb').
 * @param count - La cantidad de colores a generar.
 * @returns Un array de colores o un solo color si count es 1.
 */
/* const generateColors = (
  type: "hexa" | "rgb",
  count: number
): string | string[] => {
  const colors: string[] = [];

  for (let i = 0; i < count; i++) {
    if (type === "hexa") {
      colors.push(generateHexaColor());
    } else if (type === "rgb") {
      colors.push(generateRgbColor());
    }
  }

  return count === 1 ? colors[0] : colors;
};
 */
// Ejemplos de uso
/* console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)' */
/* const newArray = (arreglo: number[]): number[] => {
  const arregloMezclado: number[] = [];
  for (let i: number = 0; i < arreglo.length; i++) {
    let randomChar: number = Math.floor(Math.random() * arreglo.length);
    arregloMezclado[i] = arreglo[randomChar];
  }
  return arregloMezclado;
};
console.log(newArray([1, 2, 3, 4, 5]));
 */
var factorial = function (entradaNumber) {
    var inicio = 1;
    for (var j = 1; j <= entradaNumber; j++) {
        inicio = inicio * j;
    }
    return inicio;
};
console.log(factorial(3));
console.log(factorial(4));
/**
 * Verifica si el valor dado está vacío.
 * @param value - El valor a verificar.
 * @returns `true` si el valor está vacío, `false` en caso contrario.
 */
/* const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "object" && !Array.isArray(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}; */
// Ejemplos de uso
/* console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty("Hello")); // false
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({ key: "value" })); // false

const sumAllNums = (...args: number[]): number => {
  let sum: number = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

// Ejemplos de uso
console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173 */
/* const average = (arreglosNum: number[]): string => {
  let sumaNum: number = 0;
  for (const numero of arreglosNum) {
    sumaNum = sumaNum + numero;
  }
  let promedio: number = sumaNum / arreglosNum.length;
  return `el arreglo ${arreglosNum} tiene un promedio de ${promedio}`;
};
console.log(average([10, 10, 9, 10])); */
/* const modifyArray = (arregloCadena: string[]): string[] => {
  const arregloModificado: string[] = [];

  if (arregloCadena.length < 5) {
    console.log("Elemento no encontrado");
    return arregloModificado; // Retorna un array vacío si no hay suficientes elementos
  }

  for (let indice: number = 0; indice < arregloCadena.length; indice++) {
    if (indice !== 4) {
      arregloModificado.push(arregloCadena[indice]);
    } else {
      arregloModificado.push(arregloCadena[indice].toUpperCase());
    }
  }

  return arregloModificado;
};

// Ejemplo de uso
const ejemploArreglo = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
console.log(modifyArray(ejemploArreglo)); // ["uno", "dos", "tres", "cuatro", "CINCO", "seis"]

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);

console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"])); */
/* const isPrime = (num: number): boolean => {
  if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
  if (num <= 3) return true; // 2 y 3 son números primos

  if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 y 3

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false; // Verifica divisibilidad
  }

  return true; // Si no encuentra divisores, el número es primo
};

// Ejemplos de uso
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
console.log(isPrime(17)); // true */
/* const areAllElementsUnique = (arr: any[]): boolean => {
  const uniqueElements = new Set(arr);
  return uniqueElements.size === arr.length;
};

// Ejemplos de uso
console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
console.log(areAllElementsUnique([1, 2, 2, 4, 5])); // false
console.log(areAllElementsUnique(["a", "b", "c", "d"])); // true
console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
console.log(areAllElementsUnique([])); // true */
var removeDuplicates = function (arr) {
    var uniqueArray = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
};
var areAllElementsUnique = function (arr) {
    return arr.length === removeDuplicates(arr).length;
};
// Ejemplos de uso
var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
var arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log("Array original:", arrayWithDuplicates);
console.log("¿Todos los elementos son únicos?:", areAllElementsUnique(arrayWithDuplicates));
console.log("Array sin duplicados:", arrayWithoutDuplicates);
var uniqueArray = [1, 2, 3, 4, 5];
console.log("Array original:", uniqueArray);
console.log("¿Todos los elementos son únicos?:", areAllElementsUnique(uniqueArray));
console.log("Array sin duplicados:", removeDuplicates(uniqueArray));
var isValidVariable = function (variable) {
    var validVariablePattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    var reservedWords = [
        "abstract",
        "await",
        "boolean",
        "break",
        "byte",
        "case",
        "catch",
        "char",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "double",
        "else",
        "enum",
        "export",
        "extends",
        "false",
        "final",
        "finally",
        "float",
        "for",
        "function",
        "goto",
        "if",
        "implements",
        "import",
        "in",
        "instanceof",
        "int",
        "interface",
        "let",
        "long",
        "native",
        "new",
        "null",
        "package",
        "private",
        "protected",
        "public",
        "return",
        "short",
        "static",
        "super",
        "switch",
        "synchronized",
        "this",
        "throw",
        "throws",
        "transient",
        "true",
        "try",
        "typeof",
        "var",
        "void",
        "volatile",
        "while",
        "with",
        "yield",
    ];
    // Check if the variable matches the valid pattern and is not a reserved word
    return (validVariablePattern.test(variable) && !reservedWords.includes(variable));
};
// Ejemplos de uso
console.log(isValidVariable("var_name")); // true
console.log(isValidVariable("$varName")); // true
console.log(isValidVariable("_varName")); // true
console.log(isValidVariable("2varName")); // false
console.log(isValidVariable("varName!")); // false
console.log(isValidVariable("let")); // false (reserved word)
console.log(isValidVariable("variable")); // true
var generateUniqueRandomNumbers = function (length, min, max) {
    var uniqueNumbers = new Set();
    while (uniqueNumbers.size < length) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueNumbers.add(randomNumber);
    }
    return Array.from(uniqueNumbers);
};
var uniqueRandomNumbersArray = generateUniqueRandomNumbers(7, 0, 9);
console.log(uniqueRandomNumbersArray); // Ejemplo de salida: [3, 7, 1, 9, 2, 0, 8]
var reverseCountries = function (countries) {
    // Copiar el array original
    var countriesCopy = __spreadArray([], countries, true);
    // Invertir el array copiado
    var reversedCountries = countriesCopy.reverse();
    // Retornar el array invertido
    return reversedCountries;
};
// Ejemplo de uso
var reversedCountriesArray = reverseCountries(countries);
console.log(reversedCountriesArray);
console.log(countries); // Para asegurarnos de que el array original no ha sido modificado
