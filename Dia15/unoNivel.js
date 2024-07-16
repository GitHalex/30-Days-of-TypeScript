var Persona = /** @class */ (function () {
    function Persona(nombre, lastName, age, country, city) {
        if (nombre === void 0) { nombre = "Yandel"; }
        if (lastName === void 0) { lastName = "Perez"; }
        if (age === void 0) { age = 0; }
        if (country === void 0) { country = "Unknown"; }
        if (city === void 0) { city = "Unknown"; }
        this.nombre = nombre;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    Persona.prototype.getFullName = function () {
        var fullName = this.nombre + " " + this.lastName;
        return fullName;
    };
    Object.defineProperty(Persona.prototype, "getScore", {
        get: function () {
            return this.score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setScore", {
        set: function (score) {
            this.score += score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getSkills", {
        get: function () {
            return this.skills;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setSkills", {
        set: function (skills) {
            this.skills.push(skills);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "gePersonInfo", {
        get: function () {
            var fullName = this.getFullName();
            var skills = this.skills.length > 0 &&
                this.skills.slice(0, this.skills.length - 1).join(", ") +
                    " and ".concat(this.skills[this.skills.length - 1]);
            var formattedSkills = skills ? "He knows ".concat(skills) : "";
            var info = "".concat(fullName, " is ").concat(this.age, ". He lives: ").concat(this.city, ", ").concat(this.country, ". ").concat(formattedSkills);
            return info;
        },
        enumerable: false,
        configurable: true
    });
    Persona.favoriteSkill = function () {
        var skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
        var index = Math.floor(Math.random() * skills.length);
        return skills[index];
    };
    return Persona;
}());
var alex = new Persona("Alex", "Calcina", 20, "Bolivia", "Chacocamba");
var yandel = new Persona(undefined, undefined, 10, "USA", "Miami"); // This will use the default values for nombre and lastName
console.log(alex);
console.log(alex.getFullName());
console.log(alex.getScore);
console.log(alex.getSkills);
alex.setScore = 1;
alex.setSkills = "HTML";
alex.setSkills = "CSS";
alex.setSkills = "JS";
console.log(alex);
console.log(alex.skills);
console.log(alex.gePersonInfo);
console.log("otra: ".concat(Persona.favoriteSkill()));
