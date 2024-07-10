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
