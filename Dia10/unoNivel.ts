console.log("entonces");
const names: string[] = ["Asabeneh", "Brook", "David", "John"];
const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack: [string[], string[]] = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const [frontEndARR, backEndARR]: [string[], string[]] = fullStack;

console.log(frontEndARR);
console.log(backEndARR);
