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
var rgbColorGenerator = function () {
    var getRandomValue = function () { return Math.floor(Math.random() * 256); };
    var red = getRandomValue();
    var green = getRandomValue();
    var blue = getRandomValue();
    return "rgb(".concat(red, ",").concat(green, ",").concat(blue, ")");
};
console.log(rgbColorGenerator());
var generateHexColor = function () {
    var hexChars = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hexChars.length);
        color += hexChars[randomIndex];
    }
    return color;
};
var arrayOfHexaColors = function (numColors) {
    var colors = [];
    for (var i = 0; i < numColors; i++) {
        colors.push(generateHexColor());
    }
    return colors;
};
console.log(arrayOfHexaColors(5));
var generateRgbColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
};
var arrayOfRgbColors = function (numColors) {
    var colors = [];
    for (var i = 0; i < numColors; i++) {
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
var convertHexaToRgb = function (hex) {
    // Verifica si el formato hexadecimal es correcto
    var validHex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (!validHex.test(hex)) {
        throw new Error("El formato hexadecimal no es válido");
    }
    // Elimina el símbolo "#" si está presente
    hex = hex.replace(/^#/, "");
    // Si el hex es de 3 caracteres, convierte a 6 caracteres
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map(function (char) { return char + char; })
            .join("");
    }
    // Extrae valores de los colores rojo, verde y azul
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};
// Ejemplos de uso
console.log(convertHexaToRgb("#a3e12f")); // Output: rgb(163, 225, 47)
console.log(convertHexaToRgb("#03f")); // Output: rgb(0, 51, 255)
console.log(convertHexaToRgb("#ff5733")); // Output: rgb(255, 87, 51)
