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
var namesAux = [undefined, "Brook", "David"];
var _a = names[0], firstPersonAux = _a === void 0 ? "Asabeneh" : _a, secondPersonAux = names[1], thirdPersonAux = names[2], _b = names[3], fourthPersonAux = _b === void 0 ? "John" : _b;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num1 = nums[0], num2 = nums[1], num3 = nums[2], rest = nums.slice(3);
console.log(num1, num2, num3);
console.log(rest);
var countriesAux = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
for (var _i = 0, countriesAux_1 = countriesAux; _i < countriesAux_1.length; _i++) {
    var _c = countriesAux_1[_i], country = _c[0], city = _c[1];
    console.log("Country ".concat(country, " => city: ").concat(city));
}
