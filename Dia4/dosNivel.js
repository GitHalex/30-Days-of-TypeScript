var puntajeInput = prompt("Ingrese una nota: ");
if (puntajeInput !== null) {
    var puntaje = parseInt(puntajeInput);
    if (!isNaN(puntaje)) {
        if (puntaje >= 90 && puntaje <= 100) {
            console.log("".concat(puntaje, ": A"));
        }
        else if (puntaje >= 70 && puntaje <= 89) {
            console.log("".concat(puntaje, ": B"));
        }
        else if (puntaje >= 60 && puntaje <= 69) {
            console.log("".concat(puntaje, ": C"));
        }
        else if (puntaje >= 50 && puntaje <= 59) {
            console.log("".concat(puntaje, ": D"));
        }
        else if (puntaje >= 0 && puntaje < 50) {
            console.log("".concat(puntaje, ": F"));
        }
        else {
            console.log("El puntaje ingresado no es válido.");
        }
    }
    else {
        console.log("Por favor, ingrese un número válido.");
    }
}
else {
    console.log("Entrada cancelada por el usuario.");
}
