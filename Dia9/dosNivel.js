var countriesArreglo = [
    "Finland",
    "Denmark",
    "Sweden",
    "Norway",
    "Iceland",
    "España",
];
var namesArreglo = ["Alex", "Mathias", "Elias", "Brook"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];
// filtrar los productos con precios validos
var validProducts = products.filter(function (product) {
    return typeof product.price === "number" && !isNaN(product.price);
});
// mapear los precios
var prices = validProducts.map(function (product) { return product.price; });
// reduce para sumar
var total = prices.reduce(function (sum, price) { return sum + price; }, 0);
console.log(total);
