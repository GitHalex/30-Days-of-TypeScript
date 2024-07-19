"use strict";
const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;
console.log(`e=${e} => gravedad:${gravedad} => humanBodyTemp:${humanBodyTemp} => waterBoilingTemp:${waterBoilingTemp}`);
const countriesCinco = [
    "Finland",
    "Estonia",
    "Sweden",
    "Denmark",
    "Norway",
];
const [fin, est, sw, den, nor] = countriesCinco;
console.log(`${fin} => ${est} => ${sw} => ${den} => ${nor}`);
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 80,
};
let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle;
console.log(w, h, a, p);
const calcularPerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
console.log(calcularPerimeter(rectangle));
const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        edad: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        edad: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        edad: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        edad: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        edad: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        edad: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        edad: 20,
    },
];
const mostrarMenosDos = (usuarios) => {
    const listaNames = [];
    for (const usuario of usuarios) {
        if (usuario.skills.length < 2) {
            listaNames.push(usuario.name);
        }
    }
    return listaNames;
};
console.log(`Nombres de personas que tienen menos de dos habilidades: ${mostrarMenosDos(users)}`);
// Proporcionar un valor predeterminado para el perímetro
const names = ["Asabeneh", "Brook", "David", "John"];
const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];
const [frontEndARR, backEndARR] = fullStack;
console.log(frontEndARR);
console.log(backEndARR);
/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number, number] = numbersAux; // 2 es omitido

console.log(numOne, numThree);
 */
/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number] = numbersAux; //2 es omitido

console.log(numOne, numThree); */
const numbersAux = [1, 2, 3];
let numOne, numThree;
[numOne, , numThree] = numbersAux; // 2 es omitido
console.log(numOne, numThree);
const numbersARR = [1, 2, 3];
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
const stringARR = [
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
const secondPersona = stringARR[1];
const fourthPersona = stringARR[3];
console.log(secondPerson, fourthPerson);
const namesAux = [undefined, "Brook", "David"];
let [firstPersonAux = "Asabeneh", secondPersonAux, thirdPersonAux, fourthPersonAux = "John",] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);
const countriesAux = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
for (const [country, city] of countriesAux) {
    console.log(`Country ${country} => city: ${city}`);
}
for (const [first, second, third] of fullStack) {
    console.log(`${first.toUpperCase()} => ${second} => ${third}`);
}
const calcularPerimetro = ({ width, height }) => {
    return 2 * (width + height);
};
console.log(calcularPerimeter(rectangle));
// Crear el array de tareas con el tipo de la interfaz
const todoList = [
    {
        task: "Prepare JS Test",
        time: "4/1/2020 8:30",
        completed: true,
    },
    {
        task: "Give JS Test",
        time: "4/1/2020 10:00",
        completed: false,
    },
    {
        task: "Assess Test Result",
        time: "4/1/2020 1:00",
        completed: false,
    },
];
// Iterar sobre el array desestructurando los objetos
for (const { task, time, completed } of todoList) {
    console.log(task, time, completed);
}
const paisesArr = [
    "Germany",
    "France",
    "Belgium",
    "Finland",
    "Sweden",
    "Norway",
    "Denmark",
    "Iceland",
];
// Desestructuración del array
let [gem, fra, , ...nordicCountries] = paisesArr;
console.log(gem); // Germany
console.log(fra); // France
console.log(nordicCountries); // [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland' ]
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];
console.log(evenNumbers);
const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];
console.log(oddNumbers);
const wholeNumbers = [...evens, ...odds];
console.log(wholeNumbers);
const userObjeto = {
    name: "Alex",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
};
console.log(userObjeto);
// Corregir el nombre de la variable de copuaUser a copiaUser
const copiaUser = Object.assign({}, userObjeto);
console.log(copiaUser);
const modificarObjeto = Object.assign(Object.assign({}, userObjeto), { title: "Intructor" });
console.log(modificarObjeto);
const sumAllNums = (...argumentos) => {
    let sum = 0;
    for (const num of argumentos) {
        sum += num;
    }
    return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5));
