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
var isEmpty = function (value) {
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
};
// Ejemplos de uso
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty("Hello")); // false
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({ key: "value" })); // false
var sumAllNums = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var element = args_1[_a];
        sum += element;
    }
    return sum;
};
// Ejemplos de uso
console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
