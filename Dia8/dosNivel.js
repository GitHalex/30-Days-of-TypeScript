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
var usuariosConectados = function (users) {
    var conectados = [];
    var masPuntos = [];
    var cantidadConectados = 0;
    var puntos = 0;
    for (var _i = 0, _a = Object.entries(users); _i < _a.length; _i++) {
        var _b = _a[_i], nombre = _b[0], usuario = _b[1];
        if (usuario.isLoggedIn) {
            conectados.push(nombre);
            cantidadConectados += 1;
        }
        if (usuario.points >= 50) {
            masPuntos.push(nombre);
            puntos += 1;
        }
    }
    return "usuarios conectados ".concat(conectados, " \n en total son ").concat(cantidadConectados, "\nusuarios que tienen mas de 50 puntos ").concat(masPuntos.join(", "), " cantidad ").concat(puntos);
};
console.log(usuariosConectados(users));
/* const usuariosConectados = (users) => {
  let conectados = [];
  let maspuntos = [];
  let cantidadConectados = 0;
  let puntos = 0;
  for (const [nombre, usuario] of Object.entries(users)) {
    if (usuario.isLoggedIn) {
      conectados.push(nombre);
      cantidadConectados++;
    }
    if (usuario.points >= 50) {
      maspuntos.push(nombre);
      puntos++;
    }
  }
  return `usuarios conectados ${conectados.join(
    ", "
  )} : en total son :${cantidadConectados}\n usuarios que tienen mas de 50 puntos ${maspuntos.join(
    ", "
  )} cantidad ${puntos}`;
};

console.log(usuariosConectados(users)); */
//Esta mierda no funciona
/* const findDevMERN = (users) => {
  let personasMern = [];
  for (const [nombre, usuario] of Object.entries(users)) {
    let habilidades = usuario.skills;
    const letras = ["M", "E", "R", "N"];
    if (letras.every((letra) => habilidades.includes(letra))) {
      personasMern.push(nombre);
    }
  }
  return personasMern;
};

console.log(findDevMERN(users)); */
// #4 Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
/* const copia = Object.assign({ hanyinson: { email: "cale@gmail.com" } }, users);
console.log(copia);
console.log(users); */
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
