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
