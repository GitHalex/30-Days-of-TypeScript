"use strict";
class Persona {
    constructor(nombre = "Yandel", lastName = "Perez", age = 0, country = "Unknown", city = "Unknown") {
        this.nombre = nombre;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    getFullName() {
        return `${this.nombre} ${this.lastName}`;
    }
    get getScore() {
        return this.score;
    }
    set setScore(score) {
        this.score += score;
    }
    get getSkills() {
        return this.skills;
    }
    set setSkills(skill) {
        this.skills.push(skill);
    }
    getPersonInfo() {
        const fullName = this.getFullName();
        const skills = this.skills.length > 0
            ? this.skills.slice(0, this.skills.length - 1).join(", ") +
                ` and ${this.skills[this.skills.length - 1]}`
            : "";
        const formattedSkills = skills ? `He knows ${skills}` : "";
        return `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    }
}
const alex = new Persona("Alex", "Calcina", 20, "Bolivia", "Chacocamba");
const yandel = new Persona(undefined, undefined, 10, "USA", "Miami");
console.log(alex);
console.log(alex.getFullName());
console.log(alex.getScore);
console.log(alex.getSkills);
alex.setScore = 1;
alex.setSkills = "HTML";
console.log(alex.getScore);
console.log(alex.getSkills);
// console.log(Persona.showDateTime());
class Student extends Persona {
    constructor(nombre, lastName, age, country, city, gender) {
        super(nombre, lastName, age, country, city);
        this.gender = gender;
    }
    saySomething() {
        console.log("I am a child of the person class");
    }
    getPersonInfo() {
        const fullName = this.getFullName();
        const skills = this.skills.length > 0
            ? this.skills.slice(0, this.skills.length - 1).join(", ") +
                ` and ${this.skills[this.skills.length - 1]}`
            : "";
        const formattedSkills = skills ? `He knows ${skills}` : "";
        const pronoun = this.gender === "Male" ? "He" : "She";
        return `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    }
}
const s1 = new Student("Saul", "Bernal", 10, "Chile", "Santiago de Chile", "Male");
console.log(s1);
s1.setScore = 1;
s1.setSkills = "HTML";
s1.setSkills = "CSS";
s1.setSkills = "JavaScript";
s1.saySomething();
console.log(s1.getFullName());
console.log(s1.getPersonInfo());
