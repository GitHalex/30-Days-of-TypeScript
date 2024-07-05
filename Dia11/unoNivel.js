var names = ["Asabeneh", "Brook", "David", "John"];
var firstPerson = names[0], secondPerson = names[1], thirdPerson = names[2], fourthPerson = names[3];
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
var fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];
var frontEndARR = fullStack[0], backEndARR = fullStack[1];
console.log(frontEndARR);
console.log(backEndARR);
/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number, number] = numbersAux; // 2 es omitido

console.log(numOne, numThree);
 */
/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number] = numbersAux; //2 es omitido

console.log(numOne, numThree); */
var numbersAux = [1, 2, 3];
var numOne, numThree;
numOne = numbersAux[0], numThree = numbersAux[2]; // 2 es omitido
console.log(numOne, numThree);
var numbersARR = [1, 2, 3];
var numOneARR = numbersARR[0], numThreeARR = numbersARR[2]; // 2 es omitido
console.log(numOneARR, numThreeARR);
/* const stringARR: [string, string, string, string] = [
  "Asabeneh",
  "Brook",
  "David",
  "John",
  "Jane",
  "Doe",
  "Smith",
  "Emily",
  "Michael",
  "Sarah",
]; */
/* const [, secondPersona, , fourthPersona] = stringARR;

console.log(secondPersona, fourthPersona); */
var stringARR = [
    "Asabeneh",
    "Brook",
    "David",
    "John",
    "Jane",
    "Doe",
    "Smith",
    "Emily",
    "Michael",
    "Sarah",
];
// Crear variables intermedias para los elementos que necesitamos
var secondPersona = stringARR[1];
var fourthPersona = stringARR[3];
console.log(secondPerson, fourthPerson);
