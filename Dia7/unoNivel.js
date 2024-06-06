/* function fullName(): void {
  console.log(`Mi nombre completo es: Alex Lopez`);
}
fullName(); */
/* function fullName(firstName: string, lastName: string): string {
  return `Mi nombre es: ${firstName} y mi apellido es: ${lastName}`;
}
console.log(fullName("Alex", "Lopez")); */
/* function addNumbers(numero1: number, numero2: number): number {
  return numero1 + numero2;
}
console.log(addNumbers(2, 4)); */
/* function areaOfRectangle(ancho: number, alto: number): string {
  let area: number = ancho * alto;
  return `El area es: ${area}`;
}
console.log(areaOfRectangle(2, 4)); */
/* function perimeterOfRectangle(length: number, width: number): string {
  let perimeter: number = 2 * (length + width);
  return `el perimetro del rectangulo es:  ${perimeter}`;
}
console.log(perimeterOfRectangle(2, 2)); */
/* function volumeOfRectPrism(len: number, wid: number, hei: number): string {
  let volumen: number = len * wid * hei;
  return `El volumen de un prisma rectangular es: ${volumen}: `;
}
console.log(volumeOfRectPrism(2, 2, 2)); */
/* const PI: number = Math.PI;
function areaOfCircle(radio: number): string {
  let areaCirculo: number = PI * radio ** 2;
  return `El area del circulo es: ${Math.floor(areaCirculo)}`;
}
console.log(areaOfCircle(2)); */
/* function densidad(mass: number, volume: number): number {
  let density = mass / volume;
  return density;
}

console.log(`La densidad de una sustancia es: ${densidad(2, 2)}`); */
/* const PI: number = Math.PI;
function circumOfCircle(radio: number): number {
  return PI * radio * 2;
}
console.log(`La circunferencia de un circulo es: ${circumOfCircle(2)}`); */
/* function calculateSpeed(distance: number, time: number): number {
  if (time === 0) {
    throw new Error("El tiempo no puede ser cero.");
  }
  return distance / time;
}

const distanceTravelled: number = 100; // en metros
const timeTaken: number = 10; // en segundos

try {
  const speed: number = calculateSpeed(distanceTravelled, timeTaken);
  console.log(`La velocidad del objeto en movimiento es ${speed} m/s`);
} catch (error) {
  console.error(error.message);
}*/
function convertCelsiusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}
console.log("La convertion de celcis es: ".concat(convertCelsiusToFahrenheit(10)));
function imc(peso, altura) {
    var IMC = Math.floor(peso / (altura * altura));
    var pesoIMC = "";
    if (IMC < 18.5) {
        pesoIMC = "".concat(IMC, " peso bajo");
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        pesoIMC = "".concat(IMC, " peso normal");
    }
    else if (IMC >= 24 && IMC <= 29.9) {
        pesoIMC = "".concat(IMC, " Sobrepeso");
    }
    else {
        pesoIMC = "".concat(IMC, " Obeso");
    }
    return pesoIMC;
}
console.log(imc(84, 1.64));
