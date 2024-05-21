// Función para determinar si un año es bisiesto
function esBisiesto(anio: number): boolean {
  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    return true;
  }
  return false;
}

// Función para obtener el número de días en un mes dado un año
function obtenerDiasDelMes(mes: string, anio: number): string {
  // Normalizamos la entrada del usuario para que tenga la primera letra en mayúscula y el resto en minúscula
  mes = mes.charAt(0).toUpperCase() + mes.slice(1).toLowerCase();

  // Mapa de meses a días (sin considerar el año bisiesto todavía)
  const diasPorMes: { [key: string]: number } = {
    Enero: 31,
    Febrero: 28, // Se ajustará más adelante si el año es bisiesto
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
    return `${mes} de ${anio} tiene ${diasPorMes[mes]} días.`;
  } else {
    return "Mes no válido. Por favor, introduce un mes válido.";
  }
}

// Ejemplo de uso
let mesInput = prompt("Introduce un mes:");
let anioInput = prompt("Introduce un año:");

if (mesInput !== null && anioInput !== null) {
  let anio = parseInt(anioInput);
  if (!isNaN(anio)) {
    const resultado = obtenerDiasDelMes(mesInput, anio);
    console.log(resultado);
  } else {
    console.log("Por favor, introduce un año válido.");
  }
} else {
  console.log("Entrada cancelada por el usuario.");
}
