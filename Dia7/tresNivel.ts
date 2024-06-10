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
