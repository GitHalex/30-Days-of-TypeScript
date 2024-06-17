interface Dog {
  name: string;
  legs: number;
  color: string;
  age: number;
  bark: () => string;
  breed?: boolean;
  getDogInfo?: () => string;
}
const dog: Dog = {
  name: "Marrano",
  legs: 4,
  color: "Amarrillo",
  age: 8,
  bark() {
    return "woof woof";
  },
};
console.log(dog);
console.log(typeof dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
dog.breed = false;
dog.getDogInfo = function () {
  return `Mi nombre es: ${this.name}\nMi color es: ${this.color}`;
};
console.log(dog.getDogInfo());

// METODOS De Objetos

/* const copyPerson = Object.assign({}, person);
console.log(copyPerson); */
/* 
const keys = Object.keys(copyPerson);
console.log(keys);
 */
/* if (copyPerson.address) {
  const addressKeys = Object.keys(copyPerson.address);
  console.log(addressKeys); // ['street', 'pobox', 'city']
} */
// Obtención de los valores del objeto copyPerson
/* const values = Object.values(copyPerson);
console.log(values); */

// Obtención de las entradas del objeto copyPerson
/* const entries = Object.entries(copyPerson);
console.log(entries); */

// Comprobación de la existencia de propiedades
/* console.log(copyPerson.hasOwnProperty("firstName")); // true
console.log(copyPerson.hasOwnProperty("score")); // false */

interface User {
  email: string;
  skills: string[];
  age: number;
  isLoggedIn: boolean;
  points: number;
}

interface Users {
  [key: string]: User;
}

const users: Users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

console.log(users);
