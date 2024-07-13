const str: string = "I love JavaScript love";
const patternBoolean: RegExp = /love/;
const result: boolean = patternBoolean.test(str);
console.log(result);

const patternArray: RegExp = /love/g;
const resultadoArr: string[] | null = str.match(patternArray);
if (resultadoArr) {
  console.log(resultadoArr);
} else {
  console.log("No match found");
}

const txt: string =
  "Python es el lenguaje más bello que ha creado el ser humano.\
Recomiendo python para un primer lenguaje de programación";

let matchReplaced: string = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

let matchReplacedGlobal: string = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplacedGlobal);

const txtEspecial: string =
  "%So%y p%r%%of%%es%or%a% y m%e %% enc%an%ta en%se%ña%r.\
N%o h%a%y n%a%d%a mas g%r%at%if%icante q%ue e%d%uc%a%r y c%a%p%ac%i%ta%r %a l%a g%e%n%t%e.\
L%a e%n%%señ%anza m%e %p%ar%ec%e ma%s% i%n%te%r%esa%nt%e que %cu%alq%uie%r %otro t%ra%ba%jo.\
E%s%t%o te mo%ti%v%a a s%er p%ro%fe%sor.";

let especial: string = txtEspecial.replace(/%/g, "");
console.log(especial);

const patternA_a: RegExp = /[Aa]pple|[Bb]anana/g;
const txtString: string =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the doctor away has been replaced by a banana a day keeps the doctor far far away.";
const apples: string[] | null = txtString.match(patternA_a);

if (apples) {
  console.log(apples);
} else {
  console.log("No matches found");
}

const patternDig: RegExp = /\d+/g; // \d es un carácter especial que significa dígitos si agregamos + saca digitos esteros
const txtDig: string =
  "This regular expression example was made in January 12, 2020.";
const matches: string[] | null = txtDig.match(patternDig);

if (matches) {
  console.log(matches); // ["1", "2", "2", "0", "2", "0"] // ['12','2020']
} else {
  console.log("No matches found");
}

const txtPunto: string = "Apple and banana are fruits";
const patternPunto: RegExp = /[a].+/g; // ["an", "an", "an", "a ", "ar"] ['and banana are fruits']

const resultadoPutno: string[] | null = txtPunto.match(patternPunto);
if (resultadoPutno) {
  console.log(resultadoPutno);
} else {
  console.log("No hay");
}

const patternAsterisco: RegExp = /[a].*/g; //. cualquier carácter, + cualquier carácter una o más veces
const resultadoAsterisco: string[] | null = txtPunto.match(patternAsterisco);
if (resultadoAsterisco) {
  console.log(resultadoAsterisco);
} else {
  console.log("No hay");
}

const textoSueldo =
  "Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes";

// Expresión regular para encontrar todas las cantidades de dinero en el texto
const regex = /\b(\d+)\s*euros\b/g;

// Función para calcular los ingresos anuales totales
const calcularIngresosAnuales = (texto: string): number => {
  let totalAnual = 0;
  let match: RegExpExecArray | null;

  // Recorremos todas las coincidencias encontradas por la expresión regular
  while ((match = regex.exec(texto)) !== null) {
    const cantidad = parseInt(match[1], 10);

    // Determinamos si el ingreso es mensual o anual
    if (
      texto.includes("sueldo al mes") &&
      match.index < texto.indexOf("sueldo al mes")
    ) {
      totalAnual += cantidad * 12; // Ingreso mensual multiplicado por 12
    } else if (
      texto.includes("cursos online al mes") &&
      match.index < texto.indexOf("cursos online al mes")
    ) {
      totalAnual += cantidad * 12; // Ingreso mensual multiplicado por 12
    } else {
      totalAnual += cantidad; // Ingreso anual
    }
  }

  return totalAnual;
};

const ingresosAnuales = calcularIngresosAnuales(textoSueldo);
console.log(`Ingresos anuales totales: ${ingresosAnuales} euros`);

const textoA =
  "La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva.";

// Expresión regular para encontrar todas las posiciones de las partículas
const regexA = /-?\d+/g;

// Función para calcular la distancia entre las posiciones más lejanas
const calcularDistanciaMasLejana = (texto: string): number => {
  const posiciones: number[] = [];
  let match: RegExpExecArray | null;

  // Recorremos todas las coincidencias encontradas por la expresión regular
  while ((match = regexA.exec(texto)) !== null) {
    posiciones.push(parseInt(match[0], 10));
  }

  // Encontramos las posiciones más extremas
  const minPosicion = Math.min(...posiciones);
  const maxPosicion = Math.max(...posiciones);

  // Calculamos la distancia entre las posiciones más lejanas
  return maxPosicion - minPosicion;
};

const distanciaMasLejana = calcularDistanciaMasLejana(textoA);
console.log(
  `La distancia entre las dos partes más lejanas es: ${distanciaMasLejana}`
);
