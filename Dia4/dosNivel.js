"use strict";
/* let puntajeInput = prompt("Ingrese una nota: ");
if (puntajeInput !== null) {
  let puntaje: number = parseInt(puntajeInput);
  if (!isNaN(puntaje)) {
    if (puntaje >= 90 && puntaje <= 100) {
      console.log(`${puntaje}: A`);
    } else if (puntaje >= 70 && puntaje <= 89) {
      console.log(`${puntaje}: B`);
    } else if (puntaje >= 60 && puntaje <= 69) {
      console.log(`${puntaje}: C`);
    } else if (puntaje >= 50 && puntaje <= 59) {
      console.log(`${puntaje}: D`);
    } else if (puntaje >= 0 && puntaje < 50) {
      console.log(`${puntaje}: F`);
    } else {
      console.log("El puntaje ingresado no es válido.");
    }
  } else {
    console.log("Por favor, ingrese un número válido.");
  }
} else {
  console.log("Entrada cancelada por el usuario.");
} */
/* let mesInput = prompt("Ingrese un mes: ");

if (mesInput !== null) {
  let mes: string = mesInput;

  if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
    console.log(`La temporada es Otoño`);
  } else if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
    console.log(`La temporada es Invierno`);
  } else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
    console.log("La temporada es Primavera");
  } else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
    console.log("La temporada es Verano");
  } else {
    console.log(`${mes} no es un mes HDP`);
  }
} else {
  console.log("Entrada cancelada por el usuario.");
} */
let diaInput = prompt("¿Qué dia es hoy? ");
if (diaInput !== null) {
    let dia = diaInput.toLowerCase();
    if (dia === "lunes" ||
        dia === "martes" ||
        dia === "miercoles" ||
        dia === "jueves" ||
        dia === "viernes") {
        console.log(`El ${dia} es un dia laborable`);
    }
    else if (dia === "sabado" || dia === "domingo") {
        console.log(`El ${dia} es fin de semana`);
    }
    else {
        console.log(`El ${dia} no es valido`);
    }
}
else {
    console.log("Entrada cancelada por el usuario");
}
