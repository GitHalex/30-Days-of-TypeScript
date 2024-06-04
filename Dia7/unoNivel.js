/* function fullName(): void {
  console.log(`Mi nombre completo es: Alex Lopez`);
}
fullName(); */
function fullName(firstName, lastName) {
    return "Mi nombre es: ".concat(firstName, " y mi apellido es: ").concat(lastName);
}
console.log(fullName("Alex", "Lopez"));
