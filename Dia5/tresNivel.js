"use strict";
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Ordene el array y encuentre la edad mínima y máxima
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Sorted ages: ${ages}`);
console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
// Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
const midIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 !== 0
    ? ages[midIndex]
    : (ages[midIndex - 1] + ages[midIndex]) / 2;
console.log(`Median age: ${medianAge}`);
// Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;
console.log(`Average age: ${averageAge}`);
// Encuentre el rango de las edades (max menos min)
const ageRange = maxAge - minAge;
console.log(`Age range: ${ageRange}`);
// Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
const minAvgDifference = Math.abs(minAge - averageAge);
const maxAvgDifference = Math.abs(maxAge - averageAge);
console.log(`|Min - Average|: ${minAvgDifference}`);
console.log(`|Max - Average|: ${maxAvgDifference}`);
