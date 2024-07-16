var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        return "".concat(this.nombre, " ").concat(this.lastName);
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
        set: function (skill) {
            this.skills.push(skill);
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.getPersonInfo = function () {
        var fullName = this.getFullName();
        var skills = this.skills.length > 0
            ? this.skills.slice(0, this.skills.length - 1).join(", ") +
                " and ".concat(this.skills[this.skills.length - 1])
            : "";
        var formattedSkills = skills ? "He knows ".concat(skills) : "";
        return "".concat(fullName, " is ").concat(this.age, ". He lives in ").concat(this.city, ", ").concat(this.country, ". ").concat(formattedSkills);
    };
    return Persona;
}());
var alex = new Persona("Alex", "Calcina", 20, "Bolivia", "Chacocamba");
var yandel = new Persona(undefined, undefined, 10, "USA", "Miami");
console.log(alex);
console.log(alex.getFullName());
console.log(alex.getScore);
console.log(alex.getSkills);
alex.setScore = 1;
alex.setSkills = "HTML";
console.log(alex.getScore);
console.log(alex.getSkills);
// console.log(Persona.showDateTime());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(nombre, lastName, age, country, city, gender) {
        var _this = _super.call(this, nombre, lastName, age, country, city) || this;
        _this.gender = gender;
        return _this;
    }
    Student.prototype.saySomething = function () {
        console.log("I am a child of the person class");
    };
    Student.prototype.getPersonInfo = function () {
        var fullName = this.getFullName();
        var skills = this.skills.length > 0
            ? this.skills.slice(0, this.skills.length - 1).join(", ") +
                " and ".concat(this.skills[this.skills.length - 1])
            : "";
        var formattedSkills = skills ? "He knows ".concat(skills) : "";
        var pronoun = this.gender === "Male" ? "He" : "She";
        return "".concat(fullName, " is ").concat(this.age, ". ").concat(pronoun, " lives in ").concat(this.city, ", ").concat(this.country, ". ").concat(formattedSkills);
    };
    return Student;
}(Persona));
var s1 = new Student("Saul", "Bernal", 10, "Chile", "Santiago de Chile", "Male");
console.log(s1);
s1.setScore = 1;
s1.setSkills = "HTML";
s1.setSkills = "CSS";
s1.setSkills = "JavaScript";
s1.saySomething();
console.log(s1.getFullName());
console.log(s1.getPersonInfo());
