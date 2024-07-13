console.log("%c30 Days Of JavaScript", "color:green"); // la salida del registro es verde
console.log("%c30 Days%c %cOf%c %cJavaScript%c", "color:green", "", "color:red", "", "color:yellow"); // salida del registro texto verde rojo y amarillo
console.warn("This is a warning");
console.warn("You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!");
console.warn("Warning is different from error");
console.error("This is an error message");
console.error("We all make mistakes");
var namesTabla = ["Asabeneh", "Brook", "David", "John"];
console.table(namesTabla);
var userTabla = {
    name: "Alex",
    title: "Programmer",
    country: "Bolivia",
    city: "Bolivia",
    age: 30,
};
console.table(userTabla);
var countriesTab = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
console.table(countriesTab);
var usersTabla = [
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
