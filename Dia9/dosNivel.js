var countriesARR = [
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
// Usar reduce para filtrar y sumar los precios válidos
var totalPrice = products.reduce(function (sum, product) {
    // Comprobar si el precio es un número válido
    if (typeof product.price === "number" && !isNaN(product.price)) {
        return sum + product.price;
    }
    return sum;
}, 0);
console.log(totalPrice);
function getStringLists(countries) {
    var letterMap = {};
    countries.forEach(function (country) {
        var firstLetter = country[0].toUpperCase();
        if (letterMap[firstLetter]) {
            letterMap[firstLetter]++;
        }
        else {
            letterMap[firstLetter] = 1;
        }
    });
    var result = Object.keys(letterMap).map(function (letter) { return ({
        letter: letter,
        count: letterMap[letter],
    }); });
    return result;
}
// Ejemplo de uso
var letterCounts = getStringLists(countriesARR);
console.log(letterCounts);
function getLastTenCountries(countries) {
    return countries.slice(-10);
}
// Ejemplo de uso
var lastTenCountries = getLastTenCountries(countriesARR);
console.log(lastTenCountries);
function mostCommonInitial(countries) {
    var letterMap = {};
    countries.forEach(function (country) {
        var firstLetter = country[0].toUpperCase();
        if (letterMap[firstLetter]) {
            letterMap[firstLetter]++;
        }
        else {
            letterMap[firstLetter] = 1;
        }
    });
    var maxCount = 0;
    var mostCommonLetter = "";
    for (var letter in letterMap) {
        if (letterMap[letter] > maxCount) {
            maxCount = letterMap[letter];
            mostCommonLetter = letter;
        }
    }
    return mostCommonLetter;
}
// Ejemplo de uso
var commonInitial = mostCommonInitial(countriesARR);
console.log("La letra que se utiliza m\u00E1s veces como inicial de un nombre de pa\u00EDs es: ".concat(commonInitial));
