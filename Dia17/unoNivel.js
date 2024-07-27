// const skills = ["HTML", "CSS", "JS", "React"];
// //El array de Skills tiene que ser encadenado primero para mantener el formato.
// const skillsJSON = JSON.stringify(skills, undefined, 4);
// localStorage.setItem("skills", skillsJSON);
// console.log(localStorage);
var datos = {
    nombre: "Alex",
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
// Define the interface for the student object
// interface Student {
//   firstName: string;
//   lastName: string;
//   age: number;
//   skills: string[];
//   country: string;
//   enrolledKeys: { [key: string]: string };
// }
// // Create a student object
// const student: Student = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 21,
//   skills: ["JavaScript", "TypeScript", "React"],
//   country: "USA",
//   enrolledKeys: {
//     course1: "JavaScript Basics",
//     course2: "Advanced TypeScript",
//     course3: "React Development",
//   },
// };
// // Serialize the student object to a JSON string
// const studentJSON: string = JSON.stringify(student);
// // Store the JSON string in localStorage
// localStorage.setItem("student", studentJSON);
// // To verify that the data is correctly stored, you can retrieve and log it
// const storedStudentJSON: string | null = localStorage.getItem("student");
// if (storedStudentJSON) {
//   const storedStudent: Student = JSON.parse(storedStudentJSON);
//   console.log(storedStudent);
// }
