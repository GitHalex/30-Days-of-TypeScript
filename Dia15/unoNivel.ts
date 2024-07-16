class Persona {
  nombre: string;
  private lastName: string;
  age: number;
  country: string;
  city: string;
  private score: number;
  skills: string[];

  constructor(
    nombre: string = "Yandel",
    lastName: string = "Perez",
    age: number = 0,
    country: string = "Unknown",
    city: string = "Unknown"
  ) {
    this.nombre = nombre;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  public getFullName(): string {
    return `${this.nombre} ${this.lastName}`;
  }

  public get getScore(): number {
    return this.score;
  }

  public set setScore(score: number) {
    this.score += score;
  }

  public get getSkills(): string[] {
    return this.skills;
  }

  public set setSkills(skill: string) {
    this.skills.push(skill);
  }

  public getPersonInfo(): string {
    const fullName = this.getFullName();
    const skills =
      this.skills.length > 0
        ? this.skills.slice(0, this.skills.length - 1).join(", ") +
          ` and ${this.skills[this.skills.length - 1]}`
        : "";
    const formattedSkills = skills ? `He knows ${skills}` : "";

    return `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`;
  }

  /* public static showDateTime(): string {
    const now: Date = new Date();
    const year: number = now.getFullYear();
    const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
    const date: string = now.getDate().toString().padStart(2, "0");
    const hours: string = now.getHours().toString().padStart(2, "0");
    const minutes: string = now.getMinutes().toString().padStart(2, "0");

    const dateMonthYear: string = `${date}-${month}-${year}`;
    const time: string = `${hours}:${minutes}`;
    return `${dateMonthYear} ${time}`;
  } */
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
  private gender: string;

  constructor(
    nombre: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    gender: string
  ) {
    super(nombre, lastName, age, country, city);
    this.gender = gender;
  }

  public saySomething(): void {
    console.log("I am a child of the person class");
  }

  public getPersonInfo(): string {
    const fullName = this.getFullName();
    const skills =
      this.skills.length > 0
        ? this.skills.slice(0, this.skills.length - 1).join(", ") +
          ` and ${this.skills[this.skills.length - 1]}`
        : "";
    const formattedSkills = skills ? `He knows ${skills}` : "";
    const pronoun = this.gender === "Male" ? "He" : "She";

    return `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
  }
}

const s1 = new Student(
  "Saul",
  "Bernal",
  10,
  "Chile",
  "Santiago de Chile",
  "Male"
);
console.log(s1);

s1.setScore = 1;
s1.setSkills = "HTML";
s1.setSkills = "CSS";
s1.setSkills = "JavaScript";

s1.saySomething();
console.log(s1.getFullName());
console.log(s1.getPersonInfo());
