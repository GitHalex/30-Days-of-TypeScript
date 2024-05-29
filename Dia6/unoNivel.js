var paises = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];
var tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
var mernStack = ["MongoDB", "Express", "React", "Node"];
/* for (let index = 0; index < 11; index++) {
  console.log(index);
} */
/* let i: number = 0;
while (i <= 10) {
  console.log(i);

  i = i + 1;
} */
/* let i: number = 0;
do {
  console.log(i);
  i++;
} while (i <= 10); */
/* for (let index = 10; index > -1; index--) {
  console.log(index);
} */
/* let i: number = 10;
while (i > -1) {
  console.log(i);

  i--;
} */
/* let i: number = 10;
do {
  console.log(i);
  i--;
} while (i > -1); */
/* let entradaInput = prompt("Ingrese un numero: ");
if (entradaInput !== null) {
  let entradaNumber: number = parseInt(entradaInput);
  for (let i: number = 0; i <= entradaNumber; i++) {
    console.log(i);
  }
} else {
  console.log("Presionaste el prompt de cancelar");
} */
/* let cadenaAst: string = "";
for (let i: number = 1; i < 8; i++) {
  cadenaAst = "#" + cadenaAst;
  console.log(cadenaAst);
} */
/* for (let i: number = 0; i < 11; i++) {
  console.log(`${i} X ${i} = ${i * i}`);
}*/
console.log("i\ti^2\ti`3");
for (var i = 0; i < 11; i++) {
    console.log("".concat(i, "\t").concat(Math.pow(i, 2), "\t").concat(Math.pow(i, 3)));
}
