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
/* function isPrime(num: number): boolean {
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
}*/

/* let suma: number = 0;

for (let i: number = 1; i <= 100; i++) {
  suma += i;
}

console.log(`La suma de todos los numeros de 0 a 100 es ${suma}`); */

/* let sumaPares: number = 0;
let sumaImpares: number = 0;

for (let i: number = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sumaPares += i;
  } else {
    sumaImpares += i;
  }
}

console.log(
  `La suma de todos los pares de 0 a 100 es ${sumaPares}\nY la suma de todos los impares de 0 a 100 es ${sumaImpares}`
);

let arregloParImpar: number[] = [];
arregloParImpar.push(sumaPares);
arregloParImpar.push(sumaImpares);
console.log(arregloParImpar); */

// Function to generate a random number between a given range
/* function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate an array of unique random numbers
function generateUniqueRandomNumbers(
  size: number,
  min: number,
  max: number
): number[] {
  const uniqueNumbers: Set<number> = new Set();

  while (uniqueNumbers.size < size) {
    const randomNumber: number = getRandomNumber(min, max);
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
}

// Generate an array of 5 unique random numbers between 1 and 100
const uniqueRandomNumbers: number[] = generateUniqueRandomNumbers(5, 1, 100);

// Print the result
console.log(uniqueRandomNumbers); */

let varriableArreglo: string = "abcdefghijklmnopqrstuvwxuz1234567890";
let password: string = "";
for (let index = 0; index < 6; index++) {
  let indice: number = Math.floor(Math.random() * varriableArreglo.length);
  password += varriableArreglo[indice];
}

console.log(password);
