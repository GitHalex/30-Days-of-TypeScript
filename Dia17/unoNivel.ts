// const skills = ["HTML", "CSS", "JS", "React"];
// //El array de Skills tiene que ser encadenado primero para mantener el formato.
// const skillsJSON = JSON.stringify(skills, undefined, 4);
// localStorage.setItem("skills", skillsJSON);
// console.log(localStorage);

interface Datos {
  name: string;
  apellido: string;
  edad: number;
  pais: string;
  ciudad: string;
}

const datos: Datos = {
  name: "Alex",
  apellido: "Calcina",
  edad: 30,
  pais: "Bolivia",
  ciudad: "Uyuni",
};

const userJson: string = JSON.stringify(datos);
localStorage.setItem("user", userJson);
console.log(localStorage);

interface Skill {
  tech: string;
  level: number;
}

let skills: Skill[] = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON: string = JSON.stringify(skills);
localStorage.setItem("skills", skillJSON);

console.log(localStorage);
