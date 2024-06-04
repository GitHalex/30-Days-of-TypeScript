/* function fullName(): void {
  console.log(`Mi nombre completo es: Alex Lopez`);
}
fullName(); */

function fullName(firstName: string, lastName: string): string {
  return `Mi nombre es: ${firstName} y mi apellido es: ${lastName}`;
}
console.log(fullName("Alex", "Lopez"));

function addNumbers(numero1: number, numero2: number): number {
  return numero1 + numero2;
}
console.log(addNumbers(2, 4));
