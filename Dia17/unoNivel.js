// const skills = ["HTML", "CSS", "JS", "React"];
// //El array de Skills tiene que ser encadenado primero para mantener el formato.
// const skillsJSON = JSON.stringify(skills, undefined, 4);
// localStorage.setItem("skills", skillsJSON);
// console.log(localStorage);
var datos = {
    name: "Alex",
    apellido: "Calcina",
    edad: 30,
    pais: "Bolivia",
    ciudad: "Uyuni",
};
var userJson = JSON.stringify(datos);
localStorage.setItem("user", userJson);
console.log(localStorage);
var skills = [
    { tech: "HTML", level: 10 },
    { tech: "CSS", level: 9 },
    { tech: "JS", level: 8 },
    { tech: "React", level: 9 },
    { tech: "Redux", level: 10 },
    { tech: "Node", level: 8 },
    { tech: "MongoDB", level: 8 },
];
var skillJSON = JSON.stringify(skills);
localStorage.setItem("skills", skillJSON);
console.log(localStorage);
