"use strict";
console.log("%c30 Days Of JavaScript", "color:green"); // la salida del registro es verde
console.log("%c30 Days%c %cOf%c %cJavaScript%c", "color:green", "", "color:red", "", "color:yellow"); // salida del registro texto verde rojo y amarillo
console.warn("This is a warning");
console.warn("You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!");
console.warn("Warning is different from error");
console.error("This is an error message");
console.error("We all make mistakes");
const namesTabla = ["Asabeneh", "Brook", "David", "John"];
console.table(namesTabla);
const userTabla = {
    name: "Alex",
    title: "Programmer",
    country: "Bolivia",
    city: "Bolivia",
    age: 30,
};
console.table(userTabla);
const usersTabla = [
    {
        name: "Asabeneh",
        title: "Programmer",
        country: "Finland",
        city: "Helsinki",
        age: 250,
    },
    {
        name: "Eyob",
        title: "Teacher",
        country: "Sweden",
        city: "London",
        age: 25,
    },
    {
        name: "Asab",
        title: "Instructor",
        country: "Norway",
        city: "Oslo",
        age: 22,
    },
    {
        name: "Matias",
        title: "Developer",
        country: "Denmark",
        city: "Copenhagen",
        age: 28,
    },
];
console.table(usersTabla);
const countriesTab = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
console.table(countriesTab);
console.time("Regular for loop");
for (let i = 0; i < countriesTab.length; i++) {
    console.log(countriesTab[i][0], countriesTab[i][1]);
}
console.timeEnd("Regular for loop");
console.time("for of loop");
for (const [name, city] of countriesTab) {
    console.log(name, city);
}
console.timeEnd("for of loop");
console.time("forEach loop");
countriesTab.forEach(([name, city]) => {
    console.log(name, city);
});
console.timeEnd("forEach loop");
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");
console.group("Names");
console.log(namesTabla);
console.groupEnd();
console.group("Countries");
console.log(countriesTab);
console.groupEnd();
console.group("Users");
console.log(usersTabla);
console.log(usersTabla);
console.groupEnd();
const func = () => {
    console.count("Function has been called");
};
func();
func();
func();
console.assert(10 > 2 * 10);
console.warn("Esto es una advertencia");
