var dog = {
    name: "Marrano",
    legs: 4,
    color: "Amarrillo",
    age: 8,
    bark: function () {
        return "woof woof";
    },
};
console.log(dog);
console.log(typeof dog);
console.log(dog.name);
var person = {
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
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
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
    var skillsWithoutLastSkill = this.skills
        .slice(0, this.skills.length - 1)
        .join(", ");
    var lastSkill = this.skills[this.skills.length - 1];
    var skills = "".concat(skillsWithoutLastSkill, ", and ").concat(lastSkill);
    var fullName = this.getFullName();
    var statement = "".concat(fullName, " is a ").concat(this.title, ".\nHe lives in ").concat(this.country, ".\nHe teaches ").concat(skills, ".");
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
