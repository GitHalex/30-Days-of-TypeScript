const names: string[] = ["Asabeneh", "Brook", "David", "John"];
const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack: [string[], string[]] = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const [frontEndARR, backEndARR]: [string[], string[]] = fullStack;

console.log(frontEndARR);
console.log(backEndARR);

/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number, number] = numbersAux; // 2 es omitido

console.log(numOne, numThree);
 */

/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number] = numbersAux; //2 es omitido

console.log(numOne, numThree); */

const numbersAux: number[] = [1, 2, 3];
let numOne: number, numThree: number;

[numOne, , numThree] = numbersAux; // 2 es omitido

console.log(numOne, numThree);

const numbersARR: [number, number, number] = [1, 2, 3];
let [numOneARR, , numThreeARR] = numbersARR; // 2 es omitido

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

const stringARR: string[] = [
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
const secondPersona: string = stringARR[1];
const fourthPersona: string = stringARR[3];

console.log(secondPerson, fourthPerson);
