const countriesARR: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatinia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova (Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

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

// Usar reduce para filtrar y sumar los precios válidos
const totalPrice = products.reduce((sum, product) => {
  // Comprobar si el precio es un número válido
  if (typeof product.price === "number" && !isNaN(product.price)) {
    return sum + product.price;
  }
  return sum;
}, 0);

console.log(totalPrice);

/* function categorizeCountries(countries: string[], pattern: string): string[] {
  return countries.filter((country) => country.includes(pattern));
}

// Ejemplos de uso Dia9
const landCountries = categorizeCountries(countriesARR, "land");
const iaCountries = categorizeCountries(countriesARR, "ia");
const islandCountries = categorizeCountries(countriesARR, "island");
const stanCountries = categorizeCountries(countriesARR, "stan");

console.log('Países que contienen "land":', landCountries);
console.log('Países que contienen "ia":', iaCountries);
console.log('Países que contienen "island":', islandCountries);
console.log('Países que contienen "stan":', stanCountries);
 */

interface LetterCount {
  letter: string;
  count: number;
}

function getStringLists(countries: string[]): LetterCount[] {
  const letterMap: { [key: string]: number } = {};

  countries.forEach((country) => {
    const firstLetter = country[0].toUpperCase();
    if (letterMap[firstLetter]) {
      letterMap[firstLetter]++;
    } else {
      letterMap[firstLetter] = 1;
    }
  });

  const result: LetterCount[] = Object.keys(letterMap).map((letter) => ({
    letter,
    count: letterMap[letter],
  }));

  return result;
}

// Ejemplo de uso
const letterCounts = getStringLists(countriesARR);
console.log(letterCounts);
