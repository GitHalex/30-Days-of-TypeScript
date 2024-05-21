function obtenerDiasDelMes(mes: string): string {
  // Normalizamos la entrada del usuario para que tenga la primera letra en mayúscula y el resto en minúscula
  mes = mes.charAt(0).toUpperCase() + mes.slice(1).toLowerCase();

  // Mapa de meses a días
  const diasPorMes: { [key: string]: number } = {
    Enero: 31,
    Febrero: 28, // Asumiendo años no bisiestos
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
    return `${mes} tiene ${diasPorMes[mes]} días.`;
  } else {
    return "Mes no válido. Por favor, introduce un mes válido.";
  }
}

// Ejemplo de uso
let mesInput = prompt("Introduce un mes:");
if (mesInput !== null) {
  const resultado = obtenerDiasDelMes(mesInput);
  console.log(resultado);
} else {
  console.log("Entrada cancelada por el usuario.");
}
