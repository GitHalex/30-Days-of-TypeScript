const countriesArreglo: string[] = [
  "Finland",
  "Denmark",
  "Sweden",
  "Norway",
  "Iceland",
  "España",
];

const namesArreglo: string[] = ["Alex", "Mathias", "Elias", "Brook"];

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Product {
  product: string;
  price: number | string;
}

const products: Product[] = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// filtrar los productos con precios validos
const validProducts = products.filter(
  (product: Product) =>
    typeof product.price === "number" && !isNaN(product.price)
);
// mapear los precios
const prices: number[] = validProducts.map(
  (product: Product) => product.price as number
);
// reduce para sumar

const total: number = prices.reduce((sum, price) => sum + price, 0);
console.log(total);
