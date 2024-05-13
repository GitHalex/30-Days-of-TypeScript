console.log(
  "The quote 'there is no ecxercise better for the heart than reaching down and and lifting people up. ' by Jhon holmes teaches us to help another. "
);

console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
let variable: string = "Python";

// console.log(variable.includes("on"));
const frasedos: string = "Espero que este curso no esté lleno de jerga";
console.log(frasedos.indexOf("jerga") !== -1);

let number100: number = Math.floor(Math.random() * 100);
console.log(number100);

let number50And100: number = Math.floor(Math.random() * 101);
if (number50And100 >= 50) console.log(number50And100);

let aleatorio: number = Math.floor(Math.random() * 256);
console.log(aleatorio);

let cadena: string = "JavaScript";

let tam: number = cadena.length;
let indice: number = Math.floor(Math.random() * tam);
console.log(cadena[indice]);
