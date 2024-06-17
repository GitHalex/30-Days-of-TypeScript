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

const encontrarPersonaConMasHabilidades = (users: Users): string => {
  let maxSkills: number = 0;
  let personaConMasHabilidades: string = "";
  let habilidades: string[] = [];
  for (const [nombre, usuario] of Object.entries(users)) {
    if (usuario.skills.length > maxSkills) {
      maxSkills = usuario.skills.length;
      personaConMasHabilidades = nombre;
      habilidades = usuario.skills;
    }
  }
  return `persona con mas habilidades ${personaConMasHabilidades} y sus habilidades son\n${habilidades} `;
};

console.log(encontrarPersonaConMasHabilidades(users));
