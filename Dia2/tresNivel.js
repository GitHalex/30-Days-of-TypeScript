var fraseTres = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor";
var contador = /amor/gi;
/* let contadorAmor: string[] = fraseTres.match(contador);
console.log(contadorAmor.length);
 */
var contadorAmor = [];
var matchResult = fraseTres.match(contador);
matchResult !== null ? (contadorAmor = matchResult) : "mathresult esta vacio";
console.log(contadorAmor);
console.log(contadorAmor.length);
var texto = "Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.";
// Utilizamos una expresión regular para extraer todos los números del texto
var numeros = texto.match(/\d+/g);
// Aseguramos que la variable numeros no sea null y la convertimos a un arreglo de números
if (numeros) {
    var ingresos = numeros.map(Number);
    // Asumiendo que los ingresos mensuales se repiten 12 veces en el año
    var salarioMensual = ingresos[0] * 12;
    var bonoAnual = ingresos[1];
    var cursosMensuales = ingresos[2] * 12;
    var ingresoAnualTotal = salarioMensual + bonoAnual + cursosMensuales;
    console.log("El ingreso anual total es: ".concat(ingresoAnualTotal, " euros"));
}
else {
    console.log("No se encontraron números en el texto.");
}
