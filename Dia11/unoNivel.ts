const constants: number[] = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;
console.log(
  `e=${e} => gravedad:${gravedad} => humanBodyTemp:${humanBodyTemp} => waterBoilingTemp:${waterBoilingTemp}`
);

const countriesCinco: string[] = [
  "Finland",
  "Estonia",
  "Sweden",
  "Denmark",
  "Norway",
];

const [fin, est, sw, den, nor] = countriesCinco;
console.log(`${fin} => ${est} => ${sw} => ${den} => ${nor}`);

interface Rectangle {
  width: number;
  height: number;
  area: number;
  perimeter?: number; // Hacer que el perímetro sea opcional
}
const rectangle: Rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 80,
};
let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle;
console.log(w, h, a, p);

const calcularPerimeter = (rectangle: Rectangle): number => {
  return 2 * (rectangle.width + rectangle.height);
};
console.log(calcularPerimeter(rectangle));

interface UserOtro {
  name: string;
  scores: number;
  skills: string[];
  edad: number;
}
const users: UserOtro[] = [
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

const mostrarMenosDos = (usuarios: UserOtro[]): string[] => {
  const listaNames: string[] = [];
  for (const usuario of usuarios) {
    if (usuario.skills.length < 2) {
      listaNames.push(usuario.name);
    }
  }
  return listaNames;
};
console.log(
  `Nombres de personas que tienen menos de dos habilidades: ${mostrarMenosDos(
    users
  )}`
);

// Proporcionar un valor predeterminado para el perímetro
const names: string[] = ["Asabeneh", "Brook", "David", "John"];
const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack: [string[], string[]] = [
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

const numbersAux: number[] = [1, 2, 3];
let numOne: number, numThree: number;

[numOne, , numThree] = numbersAux; // 2 es omitido

console.log(numOne, numThree);

const numbersARR: number[] = [1, 2, 3];
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

const namesAux: (string | undefined)[] = [undefined, "Brook", "David"];
let [
  firstPersonAux = "Asabeneh",
  secondPersonAux,
  thirdPersonAux,
  fourthPersonAux = "John",
]: (string | undefined)[] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

const countriesAux: [string[], string[], string[]] = [
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

const calcularPerimetro = ({ width, height }: Rectangle) => {
  return 2 * (width + height);
};
console.log(calcularPerimeter(rectangle));

// Definir la interfaz para los objetos de la lista de tareas
interface Todo {
  task: string;
  time: string;
  completed: boolean;
}

// Crear el array de tareas con el tipo de la interfaz
const todoList: Todo[] = [
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

const paisesArr: string[] = [
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

const evens: number[] = [0, 2, 4, 6, 8, 10];
const evenNumbers: number[] = [...evens];
console.log(evenNumbers);

const odds: number[] = [1, 3, 5, 7, 9];
const oddNumbers: number[] = [...odds];
console.log(oddNumbers);

const wholeNumbers: number[] = [...evens, ...odds];
console.log(wholeNumbers);

interface UserInterface {
  name: string;
  title: string;
  country: string;
  city: string;
}

const userObjeto: UserInterface = {
  name: "Alex",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};
console.log(userObjeto);

// Corregir el nombre de la variable de copuaUser a copiaUser
const copiaUser: UserInterface = { ...userObjeto };
console.log(copiaUser);

const modificarObjeto: UserInterface = { ...userObjeto, title: "Intructor" };
console.log(modificarObjeto);

const sumAllNums = (...argumentos: number[]): number => {
  let sum = 0;
  for (const num of argumentos) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4, 5));
