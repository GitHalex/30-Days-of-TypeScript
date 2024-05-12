let desafio: string = "30 dias de JavaScript";

console.log(desafio);
console.log(desafio.length);
console.log(desafio.toUpperCase());
console.log(desafio.toLowerCase());
console.log(desafio.substring(0, 3));
console.log(desafio.substring(3));
// console.log(desafio.includes("Script"));
console.log(desafio.split(""));
console.log(desafio.split(" "));

let companies: string =
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(companies.split(","));

let newDesafio: string = desafio.replace("JavaScript", "Python");
console.log(newDesafio);

let indexFifteen: string = desafio.charAt(15);
console.log(indexFifteen);

let indexDeJ: number = desafio.charCodeAt(12);
console.log(indexDeJ);

console.log(desafio.indexOf("a"));

console.log(desafio.lastIndexOf("a"));

let frase: string =
  "No puedes terminar una oracion con porque porque porque en un conjuncion";

let primera: number = frase.indexOf("porque");
console.log(primera);

let ultima: number = frase.lastIndexOf("porque");
console.log(ultima);

let buscar: number = frase.search("porque");
console.log(buscar);

let desafio2: string =
  "                              30 dias de JavaScript                          ";

console.log(desafio2);
console.log(desafio2.trim());

/* console.log(desafio.startsWith("30"));
console.log(desafio.endsWith("JavaScript")); */

let pattern: RegExp = /a/gi;
console.log(desafio.match(pattern));

let oneFrase: string = "30 dias de ",
  twoFrase: string = "JAVASCRIPT";

console.log(oneFrase.concat(twoFrase));
// console.log(desafio.repeat(2));
