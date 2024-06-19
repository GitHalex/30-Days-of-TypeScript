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
/* const encontrarPersonaConMasHabilidades = (users: Users): string => {
  let maxSkills: number = 0;
  let personaConMasHabilidades: string = "";
  let habilidades: string[] = [];
  for (const [nombre, usuario] of Object.entries(users)) {
    if (usuario.skills.length > maxSkills) {
      maxSkills = usuario.skills.length;
      personaConMasHabilidades = nombre;
      habilidades = usuario.skills;
    }
  }
  return `persona con mas habilidades ${personaConMasHabilidades} y sus habilidades son\n${habilidades} `;
};

console.log(encontrarPersonaConMasHabilidades(users)); */
/* const usuariosConectados = (users: Users): string => {
  let conectados: string[] = [];
  let masPuntos: number[] = [];
  let cantidadConectados: number = 0;
  let puntos: number = 0;

  for (const [nombre, usuario] of Object.entries(users)) {
    if (usuario.isLoggedIn) {
      conectados.push(nombre);
      cantidadConectados += 1;
    }
    if (usuario.points >= 50) {
      masPuntos.push(nombre);
      puntos += 1;
    }
  }

  return `usuarios conectados ${conectados} \n en total son ${cantidadConectados}\nusuarios que tienen mas de 50 puntos ${masPuntos.join(
    ", "
  )} cantidad ${puntos}`;
};

console.log(usuariosConectados(users)); */
/* const findDevMERN = (users: Users): string[] => {
  let personasMern: string[] = [];
  const mernStack: string[] = ["MongoDB", "Express", "React", "Node"];

  for (const [nombre, usuario] of Object.entries(users)) {
    let habilidades: string[] = usuario.skills;

    if (mernStack.every((tech) => habilidades.includes(tech))) {
      personasMern.push(nombre);
    }
  }
  return personasMern;
};

console.log(findDevMERN(users)); */
// #4 Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
var copia = Object.assign({}, users, {
    hanyinson: {
        email: "cale@gmail.com",
        skills: ["Java", "Python"],
        age: 20,
        isLoggedIn: true,
        points: 0,
    },
});
console.log(copia);
console.log(users);
// #5 Obtener todas las claves o propiedades del objeto usuarios
/* const obtenerClaves = (users) => {
  let claves = [];
  for (const clave of Object.keys(users)) {
    claves.push(clave);
  }
  return claves;
};
console.log(obtenerClaves(users)); */
// #6 Obtener todos los valores del objeto usuarios
/* const obtenerValores = (users) => {
  const valores = [];
  for (const valor of Object.values(users)) {
    valores.push(valor);
  }
  return valores;
};
console.log(obtenerValores(users)); */
