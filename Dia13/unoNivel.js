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
