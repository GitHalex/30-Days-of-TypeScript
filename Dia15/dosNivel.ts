class Animal {
  nombre: string;
  edad: number = 0;
  color?: string;
  piernas?: number;
  caminaVuela: string[] = [];

  constructor(
    nombre: string = "Yandel",
    edad: number,
    color: string,
    piernas: number
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.piernas = piernas;
    this.caminaVuela = ["Camina", "Vuela"];
  }

  public getFullName(): string {
    return `Nombre: ${this.nombre} => edad: ${this.edad} => color: ${this.edad} => patas: ${this.piernas}`;
  }

  public getTipoAnimal(): string {
    if (this.piernas == 4)
      return `El animal tiene ${this.piernas} patas por lo tanto: ${this.caminaVuela[0]}`;

    if (this.piernas == 2)
      return `El animal tiene ${this.piernas} patas por lo tanto: ${this.caminaVuela[0]}`;

    return "no existe un animal que no sea 4 o 2 patas";
  }
}

const boby = new Animal("Boby", 4, "Amarillo", 4);
console.log(boby);
console.log(boby.getFullName());
console.log(boby.getTipoAnimal());

/* class Perro extends Animal {
  constructor(parameters) {}
} */

/** 
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
console.log(s1.getPersonInfo()); */
