interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

interface Users {
  users: User[];
}

const usersText: string = `{
  "users": [
    {
      "firstName": "Asabeneh",
      "lastName": "Yetayeh",
      "age": 250,
      "email": "asab@asb.com"
    },
    {
      "firstName": "Alex",
      "lastName": "James",
      "age": 25,
      "email": "alex@alex.com"
    },
    {
      "firstName": "Lidiya",
      "lastName": "Tekle",
      "age": 28,
      "email": "lidiya@lidiya.com"
    }
  ]
}`;

// let usersObj: Users;

/* try {
  usersObj = JSON.parse(usersText) as Users;
  console.log(usersObj);
  console.log(typeof usersObj);
  usersJson;
} catch (error) {
  console.error("Error parsing JSON:", error);
} */

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj);

interface UserS {
  email: string;
  skills: string[];
  age: number;
  isLoggedIn: boolean;
  points: number;
}

interface UsersS {
  [key: string]: UserS;
}

const usersS: UsersS = {
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

const txtS: string = JSON.stringify(usersS, undefined, 4);
console.log(txtS);

const skillsA: string[] = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let ageN: number = 250;
let isMarriedN: boolean = true;

interface StudentA {
  firstName: string;
  lastName: string;
  age: number;
  isMarried: boolean;
  skills: string[];
}

const studentA: StudentA = {
  firstName: "Alex",
  lastName: "Lopez",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const habilidadesTxt: string = JSON.stringify(skillsA);
console.log(habilidadesTxt);

const edad: string = JSON.stringify(ageN);
console.log(edad);

const casado: string = JSON.stringify(isMarriedN);
console.log(casado);

const estudiante: string = JSON.stringify(studentA);
console.log(estudiante);
console.log(typeof estudiante);

const estudiante2: string = JSON.stringify(studentA, [
  "firstName",
  "lastName",
  "skills",
]);
console.log(estudiante2);

interface UserE {
  email: string;
  skills: string[];
  age: number;
  isLoggedIn: boolean;
  points: number;
}

interface UsersE {
  [key: string]: UserE;
}

const txtE: string = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

const usersObjE: UsersE = JSON.parse(txtE);
console.log(usersObjE);
