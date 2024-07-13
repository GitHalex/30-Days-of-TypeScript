var str = "I love JavaScript love";
var patternBoolean = /love/;
var result = patternBoolean.test(str);
console.log(result);
var patternArray = /love/g;
var resultadoArr = str.match(patternArray);
if (resultadoArr) {
    console.log(resultadoArr);
}
else {
    console.log("No match found");
}
var txt = "Python es el lenguaje más bello que ha creado el ser humano.\
Recomiendo python para un primer lenguaje de programación";
var matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);
var matchReplacedGlobal = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplacedGlobal);
var txtEspecial = "%So%y p%r%%of%%es%or%a% y m%e %% enc%an%ta en%se%ña%r.\
N%o h%a%y n%a%d%a mas g%r%at%if%icante q%ue e%d%uc%a%r y c%a%p%ac%i%ta%r %a l%a g%e%n%t%e.\
L%a e%n%%señ%anza m%e %p%ar%ec%e ma%s% i%n%te%r%esa%nt%e que %cu%alq%uie%r %otro t%ra%ba%jo.\
E%s%t%o te mo%ti%v%a a s%er p%ro%fe%sor.";
var especial = txtEspecial.replace(/%/g, "");
console.log(especial);
var patternA_a = /[Aa]pple|[Bb]anana/g;
var txtString = "Apple and banana are fruits. An old cliche says an apple a day keeps the doctor away has been replaced by a banana a day keeps the doctor far far away.";
var apples = txtString.match(patternA_a);
if (apples) {
    console.log(apples);
}
else {
    console.log("No matches found");
}
var patternDig = /\d+/g; // \d es un carácter especial que significa dígitos si agregamos + saca digitos esteros
var txtDig = "This regular expression example was made in January 12, 2020.";
var matches = txtDig.match(patternDig);
if (matches) {
    console.log(matches); // ["1", "2", "2", "0", "2", "0"] // ['12','2020']
}
else {
    console.log("No matches found");
}
var txtPunto = "Apple and banana are fruits";
var patternPunto = /[a].+/g; // ["an", "an", "an", "a ", "ar"] ['and banana are fruits']
var resultadoPutno = txtPunto.match(patternPunto);
if (resultadoPutno) {
    console.log(resultadoPutno);
}
else {
    console.log("No hay");
}
var patternAsterisco = /[a].*/g; //. cualquier carácter, + cualquier carácter una o más veces
var resultadoAsterisco = txtPunto.match(patternAsterisco);
if (resultadoAsterisco) {
    console.log(resultadoAsterisco);
}
else {
    console.log("No hay");
}
var textoSueldo = "Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes";
// Expresión regular para encontrar todas las cantidades de dinero en el texto
var regex = /\b(\d+)\s*euros\b/g;
// Función para calcular los ingresos anuales totales
var calcularIngresosAnuales = function (texto) {
    var totalAnual = 0;
    var match;
    // Recorremos todas las coincidencias encontradas por la expresión regular
    while ((match = regex.exec(texto)) !== null) {
        var cantidad = parseInt(match[1], 10);
        // Determinamos si el ingreso es mensual o anual
        if (texto.includes("sueldo al mes") &&
            match.index < texto.indexOf("sueldo al mes")) {
            totalAnual += cantidad * 12; // Ingreso mensual multiplicado por 12
        }
        else if (texto.includes("cursos online al mes") &&
            match.index < texto.indexOf("cursos online al mes")) {
            totalAnual += cantidad * 12; // Ingreso mensual multiplicado por 12
        }
        else {
            totalAnual += cantidad; // Ingreso anual
        }
    }
    return totalAnual;
};
var ingresosAnuales = calcularIngresosAnuales(textoSueldo);
console.log("Ingresos anuales totales: ".concat(ingresosAnuales, " euros"));
var textoA = "La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva.";
// Expresión regular para encontrar todas las posiciones de las partículas
var regexA = /-?\d+/g;
// Función para calcular la distancia entre las posiciones más lejanas
var calcularDistanciaMasLejana = function (texto) {
    var posiciones = [];
    var match;
    // Recorremos todas las coincidencias encontradas por la expresión regular
    while ((match = regexA.exec(texto)) !== null) {
        posiciones.push(parseInt(match[0], 10));
    }
    // Encontramos las posiciones más extremas
    var minPosicion = Math.min.apply(Math, posiciones);
    var maxPosicion = Math.max.apply(Math, posiciones);
    // Calculamos la distancia entre las posiciones más lejanas
    return maxPosicion - minPosicion;
};
var distanciaMasLejana = calcularDistanciaMasLejana(textoA);
console.log("La distancia entre las dos partes m\u00E1s lejanas es: ".concat(distanciaMasLejana));
