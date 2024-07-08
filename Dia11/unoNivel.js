var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ["Asabeneh", "Brook", "David", "John"];
var firstPerson = names[0], secondPerson = names[1], thirdPerson = names[2], fourthPerson = names[3];
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
var fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];
var frontEndARR = fullStack[0], backEndARR = fullStack[1];
console.log(frontEndARR);
console.log(backEndARR);
/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number, number] = numbersAux; // 2 es omitido

console.log(numOne, numThree);
 */
/* const numbersAux: number[] = [1, 2, 3];
let [numOne, , numThree]: [number, number] = numbersAux; //2 es omitido

console.log(numOne, numThree); */
var numbersAux = [1, 2, 3];
var numOne, numThree;
numOne = numbersAux[0], numThree = numbersAux[2]; // 2 es omitido
console.log(numOne, numThree);
var numbersARR = [1, 2, 3];
var numOneARR = numbersARR[0], numThreeARR = numbersARR[2]; // 2 es omitido
console.log(numOneARR, numThreeARR);
/* const stringARR: [string, string, string, string] = [
  "Asabeneh",
  "Brook",
  "David",
  "John",
  "Jane",
  "Doe",
  "Smith",
  "Emily",
  "Michael",
  "Sarah",
]; */
/* const [, secondPersona, , fourthPersona] = stringARR;

console.log(secondPersona, fourthPersona); */
var stringARR = [
    "Asabeneh",
    "Brook",
    "David",
    "John",
    "Jane",
    "Doe",
    "Smith",
    "Emily",
    "Michael",
    "Sarah",
];
// Crear variables intermedias para los elementos que necesitamos
var secondPersona = stringARR[1];
var fourthPersona = stringARR[3];
console.log(secondPerson, fourthPerson);
var namesAux = [undefined, "Brook", "David"];
var _a = names[0], firstPersonAux = _a === void 0 ? "Asabeneh" : _a, secondPersonAux = names[1], thirdPersonAux = names[2], _b = names[3], fourthPersonAux = _b === void 0 ? "John" : _b;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num1 = nums[0], num2 = nums[1], num3 = nums[2], rest = nums.slice(3);
console.log(num1, num2, num3);
console.log(rest);
var countriesAux = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
for (var _i = 0, countriesAux_1 = countriesAux; _i < countriesAux_1.length; _i++) {
    var _c = countriesAux_1[_i], country = _c[0], city = _c[1];
    console.log("Country ".concat(country, " => city: ").concat(city));
}
for (var _d = 0, fullStack_1 = fullStack; _d < fullStack_1.length; _d++) {
    var _e = fullStack_1[_d], first = _e[0], second = _e[1], third = _e[2];
    console.log("".concat(first.toUpperCase(), " => ").concat(second, " => ").concat(third));
}
var rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 80,
};
// Proporcionar un valor predeterminado para el perímetro
var w = rectangle.width, h = rectangle.height, a = rectangle.area, _f = rectangle.perimeter, p = _f === void 0 ? 60 : _f;
console.log(w, h, a, p);
var calcularPerimeter = function (rectangle) {
    return 2 * (rectangle.width + rectangle.height);
};
console.log(calcularPerimeter(rectangle));
var person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    job: "Instructor and Developer",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
        "Python",
        "D3.js",
    ],
    languages: ["Amharic", "English", "Suomi(Finnish)"],
};
var getPersonInfo = function (obj) {
    var skills = obj.skills;
    var formattedSkills = skills.slice(0, -1).join(", ");
    var languages = obj.languages;
    var formattedLanguages = languages.slice(0, -1).join(", ");
    var personInfo = "".concat(obj.firstName, " ").concat(obj.lastName, " lives in ").concat(obj.country, ". He is ").concat(obj.age, " years old. He is an ").concat(obj.job, ". He teaches ").concat(formattedSkills, " and ").concat(skills[skills.length - 1], ". He speaks ").concat(formattedLanguages, " and a little bit of ").concat(languages[2], ".");
    return personInfo;
};
var obtenerPerson = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName, age = _a.age, country = _a.country, job = _a.job, skills = _a.skills, languages = _a.languages;
    var formattedSkills = skills.slice(0, -1).join(", ");
    var formattedLanguages = languages.slice(0, -1).join(", ");
    var personInformacion = "".concat(firstName, " ").concat(lastName, " lives in ").concat(country, ". He is ").concat(age, " years old. He is an ").concat(job, ". He teaches ").concat(formattedSkills, " and ").concat(skills[skills.length - 1], ". He speaks ").concat(formattedLanguages, " and a little bit of 2024 ").concat(languages[2], ".");
    return personInformacion;
};
console.log(obtenerPerson(person));
var calcularPerimetro = function (_a) {
    var width = _a.width, height = _a.height;
    return 2 * (width + height);
};
console.log(calcularPerimeter(rectangle));
// Crear el array de tareas con el tipo de la interfaz
var todoList = [
    {
        task: "Prepare JS Test",
        time: "4/1/2020 8:30",
        completed: true,
    },
    {
        task: "Give JS Test",
        time: "4/1/2020 10:00",
        completed: false,
    },
    {
        task: "Assess Test Result",
        time: "4/1/2020 1:00",
        completed: false,
    },
];
// Iterar sobre el array desestructurando los objetos
for (var _g = 0, todoList_1 = todoList; _g < todoList_1.length; _g++) {
    var _h = todoList_1[_g], task = _h.task, time = _h.time, completed = _h.completed;
    console.log(task, time, completed);
}
var paisesArr = [
    "Germany",
    "France",
    "Belgium",
    "Finland",
    "Sweden",
    "Norway",
    "Denmark",
    "Iceland",
];
// Desestructuración del array
var gem = paisesArr[0], fra = paisesArr[1], nordicCountries = paisesArr.slice(3);
console.log(gem); // Germany
console.log(fra); // France
console.log(nordicCountries); // [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland' ]
var evens = [0, 2, 4, 6, 8, 10];
var evenNumbers = __spreadArray([], evens, true);
console.log(evenNumbers);
var odds = [1, 3, 5, 7, 9];
var oddNumbers = __spreadArray([], odds, true);
console.log(oddNumbers);
var wholeNumbers = __spreadArray(__spreadArray([], evens, true), odds, true);
console.log(wholeNumbers);