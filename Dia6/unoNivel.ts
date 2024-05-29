const paises: string[] = [
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

const tecnologias: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack: string[] = ["MongoDB", "Express", "React", "Node"];

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

/* console.log("i\ti^2\ti`3");
for (let i: number = 0; i < 11; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
} */

/* for (let i: number = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

/* for (let i: number = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
} */

// Helper function to check if a number is prime
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  // Eliminate numbers divisible by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// Loop from 0 to 100 and print prime numbers
for (let i: number = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
