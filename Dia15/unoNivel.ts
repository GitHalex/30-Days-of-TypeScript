class Persona {
  nombre: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  score: number;
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

  getFullName(): string {
    const fullName: string = this.nombre + " " + this.lastName;
    return fullName;
  }

  get getScore(): number {
    return this.score;
  }

  set setScore(score: number) {
    this.score += score;
  }

  get getSkills() {
    return this.skills;
  }

  set setSkills(skills: string) {
    this.skills.push(skills);
  }

  get gePersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";
    let info = `${fullName} is ${this.age}. He lives: ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills: string[] = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
}

const alex = new Persona("Alex", "Calcina", 20, "Bolivia", "Chacocamba");
const yandel = new Persona(undefined, undefined, 10, "USA", "Miami"); // This will use the default values for nombre and lastName

console.log(alex);

console.log(alex.getFullName());
console.log(alex.getScore);
console.log(alex.getSkills);

alex.setScore = 1;
alex.setSkills = "HTML";
alex.setSkills = "CSS";
alex.setSkills = "JS";

console.log(alex);
console.log(alex.skills);
console.log(alex.gePersonInfo);
console.log(`otra: ${Persona.favoriteSkill()}`);
