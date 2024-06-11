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

const rgbColorGenerator = (): string => {
  const getRandomValue = (): number => Math.floor(Math.random() * 256);
  const red = getRandomValue();
  const green = getRandomValue();
  const blue = getRandomValue();
  return `rgb(${red},${green},${blue})`;
};

console.log(rgbColorGenerator());

const generateHexColor = (): string => {
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

console.log(arrayOfHexaColors(5));

const generateRgbColor = (): string => {
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

console.log(arrayOfRgbColors(5));

/**
 * Convierte un color hexadecimal a un color RGB.
 * @param hex - El color en formato hexadecimal.
 * @returns El color en formato RGB.
 */
const convertHexaToRgb = (hex: string): string => {
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
console.log(convertHexaToRgb("#ff5733")); // Output: rgb(255, 87, 51)
