const countriesArr: string[] = [
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

const webTechsArr: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(countriesArr);
console.log(webTechsArr);

/* let text: string =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text);
console.log(text.length);

const textArr: string[] = text.split(" ");
console.log(textArr);
console.log(textArr.length);

const shoppingCart: string[] = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
console.log(shoppingCart);
// Find the index of "Honey"
const honeyIndex = shoppingCart.indexOf("Honey");

// Check if "Honey" is in the array and remove it
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}
console.log(shoppingCart);

shoppingCart[3] = "Green Tea";
console.log(shoppingCart); */

// check if "ETHIOPIS" is in the array countriesArr
const indexEthiopia = countriesArr.indexOf("Ethiopia");
if (indexEthiopia !== -1) {
  console.log(`${countriesArr[indexEthiopia]} Si existe`);
} else {
  console.log(`${countriesArr[indexEthiopia]} No existe`);
}
