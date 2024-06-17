var users = {
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
var encontrarPersonaConMasHabilidades = function (users) {
    var maxSkills = 0;
    var personaConMasHabilidades = "";
    var habilidades = [];
    for (var _i = 0, _a = Object.entries(users); _i < _a.length; _i++) {
        var _b = _a[_i], nombre = _b[0], usuario = _b[1];
        if (usuario.skills.length > maxSkills) {
            maxSkills = usuario.skills.length;
            personaConMasHabilidades = nombre;
            habilidades = usuario.skills;
        }
    }
    return "persona con mas habilidades ".concat(personaConMasHabilidades, " y sus habilidades son\n").concat(habilidades, " ");
};
console.log(encontrarPersonaConMasHabilidades(users));
