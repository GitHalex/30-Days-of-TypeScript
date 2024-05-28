var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Ordene el array y encuentre la edad mínima y máxima
ages.sort(function (a, b) { return a - b; });
var minAge = ages[0];
var maxAge = ages[ages.length - 1];
console.log("Sorted ages: ".concat(ages));
console.log("Min age: ".concat(minAge));
console.log("Max age: ".concat(maxAge));
// Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
var midIndex = Math.floor(ages.length / 2);
var medianAge = ages.length % 2 !== 0
    ? ages[midIndex]
    : (ages[midIndex - 1] + ages[midIndex]) / 2;
console.log("Median age: ".concat(medianAge));
// Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
var averageAge = ages.reduce(function (acc, age) { return acc + age; }, 0) / ages.length;
console.log("Average age: ".concat(averageAge));
// Encuentre el rango de las edades (max menos min)
var ageRange = maxAge - minAge;
console.log("Age range: ".concat(ageRange));
// Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
var minAvgDifference = Math.abs(minAge - averageAge);
var maxAvgDifference = Math.abs(maxAge - averageAge);
console.log("|Min - Average|: ".concat(minAvgDifference));
console.log("|Max - Average|: ".concat(maxAvgDifference));
