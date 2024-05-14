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
