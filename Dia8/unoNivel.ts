interface Address {
  street: string;
  pobox: string;
  city: string;
}
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  skills: string[];
  getFullName: () => string;
  nationality?: string;
  title?: string;
  isMarried?: boolean;
  getPersonInfo?: () => string;
  address?: Address;
}

interface Dog {
  name: string;
  legs: number;
  color: string;
  age: number;
  bark: () => string;
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

const person: Person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  address: {
    street: "123 Main St",
    pobox: "PO Box 123",
    city: "Helsinki",
  },
};

person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("Sass");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills[this.skills.length - 1];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};

console.log(person);
console.log(person.getPersonInfo());

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
