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
var countriesTab = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
console.table(countriesTab);
console.time("Regular for loop");
for (var i = 0; i < countriesTab.length; i++) {
    console.log(countriesTab[i][0], countriesTab[i][1]);
}
console.timeEnd("Regular for loop");
console.time("for of loop");
for (var _i = 0, countriesTab_1 = countriesTab; _i < countriesTab_1.length; _i++) {
    var _a = countriesTab_1[_i], name_1 = _a[0], city = _a[1];
    console.log(name_1, city);
}
console.timeEnd("for of loop");
console.time("forEach loop");
countriesTab.forEach(function (_a) {
    var name = _a[0], city = _a[1];
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
var func = function () {
    console.count("Function has been called");
};
func();
func();
func();
console.assert(10 > 2 * 10);
console.warn("Esto es una advertencia");
