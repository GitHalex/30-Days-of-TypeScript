// Función para determinar si un año es bisiesto
function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return true;
    }
    return false;
}
// Función para obtener el número de días en un mes dado un año
function obtenerDiasDelMes(mes, anio) {
    // Normalizamos la entrada del usuario para que tenga la primera letra en mayúscula y el resto en minúscula
    mes = mes.charAt(0).toUpperCase() + mes.slice(1).toLowerCase();
    // Mapa de meses a días (sin considerar el año bisiesto todavía)
    var diasPorMes = {
        Enero: 31,
        Febrero: 28,
        Marzo: 31,
        Abril: 30,
        Mayo: 31,
        Junio: 30,
        Julio: 31,
        Agosto: 31,
        Septiembre: 30,
        Octubre: 31,
        Noviembre: 30,
        Diciembre: 31,
    };
    // Ajustar los días de febrero si el año es bisiesto
    if (mes === "Febrero" && esBisiesto(anio)) {
        diasPorMes["Febrero"] = 29;
    }
    // Verificamos si el mes está en nuestro mapa
    if (diasPorMes.hasOwnProperty(mes)) {
        return "".concat(mes, " de ").concat(anio, " tiene ").concat(diasPorMes[mes], " d\u00EDas.");
    }
    else {
        return "Mes no válido. Por favor, introduce un mes válido.";
    }
}
// Ejemplo de uso
var mesInput = prompt("Introduce un mes:");
var anioInput = prompt("Introduce un año:");
if (mesInput !== null && anioInput !== null) {
    var anio = parseInt(anioInput);
    if (!isNaN(anio)) {
        var resultado = obtenerDiasDelMes(mesInput, anio);
        console.log(resultado);
    }
    else {
        console.log("Por favor, introduce un año válido.");
    }
}
else {
    console.log("Entrada cancelada por el usuario.");
}
