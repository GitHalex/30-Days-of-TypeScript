"use strict";
const dog = {
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
