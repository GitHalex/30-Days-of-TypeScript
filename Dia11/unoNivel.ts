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

// Proporcionar un valor predeterminado para el perímetro
let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle;

console.log(w, h, a, p);

const calcularPerimeter = (rectangle: Rectangle): number => {
  return 2 * (rectangle.width + rectangle.height);
};
console.log(calcularPerimeter(rectangle));

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  job: string;
  skills: string[];
  languages: string[];
}

const person: Person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = (obj: Person): string => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

const obtenerPerson = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}: Person) => {
  const formattedSkills = skills.slice(0, -1).join(", ");

  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInformacion = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of 2024 ${languages[2]}.`;

  return personInformacion;
};

console.log(obtenerPerson(person));

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
