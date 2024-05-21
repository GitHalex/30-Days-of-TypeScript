function obtenerDiasDelMes(mes) {
    // Normalizamos la entrada del usuario para que tenga la primera letra en mayúscula y el resto en minúscula
    mes = mes.charAt(0).toUpperCase() + mes.slice(1).toLowerCase();
    // Mapa de meses a días
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
    // Verificamos si el mes está en nuestro mapa
    if (diasPorMes.hasOwnProperty(mes)) {
        return "".concat(mes, " tiene ").concat(diasPorMes[mes], " d\u00EDas.");
    }
    else {
        return "Mes no válido. Por favor, introduce un mes válido.";
    }
}
// Ejemplo de uso
var mesInput = prompt("Introduce un mes:");
if (mesInput !== null) {
    var resultado = obtenerDiasDelMes(mesInput);
    console.log(resultado);
}
else {
    console.log("Entrada cancelada por el usuario.");
}
