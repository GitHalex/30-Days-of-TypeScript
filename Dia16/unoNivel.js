var usersText = "{\n  \"users\": [\n    {\n      \"firstName\": \"Asabeneh\",\n      \"lastName\": \"Yetayeh\",\n      \"age\": 250,\n      \"email\": \"asab@asb.com\"\n    },\n    {\n      \"firstName\": \"Alex\",\n      \"lastName\": \"James\",\n      \"age\": 25,\n      \"email\": \"alex@alex.com\"\n    },\n    {\n      \"firstName\": \"Lidiya\",\n      \"lastName\": \"Tekle\",\n      \"age\": 28,\n      \"email\": \"lidiya@lidiya.com\"\n    }\n  ]\n}";
// let usersObj: Users;
/* try {
  usersObj = JSON.parse(usersText) as Users;
  console.log(usersObj);
  console.log(typeof usersObj);
  usersJson;
} catch (error) {
  console.error("Error parsing JSON:", error);
} */
var usersObj = JSON.parse(usersText, function (key, value) {
    var newValue = typeof value == "string" && key != "email" ? value.toUpperCase() : value;
    return newValue;
});
console.log(usersObj);
var usersS = {
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
var txtS = JSON.stringify(usersS, undefined, 4);
console.log(txtS);
var skillsA = ["HTML", "CSS", "JS", "React", "Node", "Python"];
var ageN = 250;
var isMarriedN = true;
var studentA = {
    firstName: "Alex",
    lastName: "Lopez",
    age: 250,
    isMarried: true,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
var habilidadesTxt = JSON.stringify(skillsA);
console.log(habilidadesTxt);
var edad = JSON.stringify(ageN);
console.log(edad);
var casado = JSON.stringify(isMarriedN);
console.log(casado);
var estudiante = JSON.stringify(studentA);
console.log(estudiante);
console.log(typeof estudiante);
var estudiante2 = JSON.stringify(studentA, [
    "firstName",
    "lastName",
    "skills",
]);
console.log(estudiante2);
