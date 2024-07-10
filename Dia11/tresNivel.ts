interface Person {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  job: string;
  skills: string[];
  languages: string[];
}

const person: Person = {
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

const getPersonInfo = (obj: Person): string => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

const obtenerPerson = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}: Person) => {
  const formattedSkills = skills.slice(0, -1).join(", ");

  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInformacion = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of 2024 ${languages[2]}.`;

  return personInformacion;
};

console.log(obtenerPerson(person));

const student: [string, string[], number[]] = [
  "David",
  ["HTM", "CSS", "JS", "React"],
  [98, 85, 90, 95],
];

const [nombreA, habilidades, puntuacion] = student;
console.log(nombreA);
console.log(habilidades);
console.log(puntuacion);
