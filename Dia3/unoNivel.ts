let firstName: string = "Alex";
let lastName: string = "Calcina";
let country: string = "Bolivia";
let city: string = "Chacobamba";
let ageOtro: number = 30;
let isMarried: boolean = false;
let year: number = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof ageOtro);
console.log(typeof isMarried);
console.log(typeof year);

let valorNumber: string = "9.8";

console.log(parseInt(valorNumber) == 10);

console.log(5 > 3); // true
console.log("hello".length > 0); // true
console.log(true); // true

console.log(3 > 5); // false
console.log("".length > 0); // false
console.log(false);

const now: Date = new Date();
console.log(now.getFullYear());
console.log(`el mes es abril ${now.getMonth() + 1} `);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
