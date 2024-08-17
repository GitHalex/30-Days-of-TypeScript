var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var doPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var skills = ["HTML", "CSS", "JavaScript"];
        if (skills.length > 0) {
            resolve(skills);
        }
        else {
            reject("Something wrong has happened");
        }
    }, 2000);
});
doPromise
    .then(function (result) {
    console.log(result);
})
    .catch(function (error) { return console.log(error); });
var doPromise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var skills = ["HTML", "CSS", "JavaScript"];
        if (skills.includes("Node")) {
            resolve("Fullstack Developer");
        }
        else {
            reject("something worn has happenned");
        }
    }, 2000);
});
doPromise2
    .then(function (result) {
    console.log(result);
})
    .catch(function (error) { return console.log(error); });
var url = "https://restcountries.com/v2/all"; // API de países
function fetchCountries() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Error en la solicitud a la API");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Ocurrió un error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchCountries();
var fetchCountriesData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, countries, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                countries = _a.sent();
                console.log(countries);
                countries.forEach(function (pais) {
                    console.log("======================================");
                    console.log("Country: ".concat(pais.name));
                    console.log("Capital: ".concat(pais.capital));
                    console.log("Lanmguages: ".concat(pais.languages.map(function (lang) { return lang.name; }).join(", ")));
                    console.log("Population: ".concat(pais.population));
                    console.log("Area: ".concat(pais.area, " km^2"));
                    console.log("======================================");
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error("Error fetching the countries data: ".concat(error_2));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// fetchCountriesData();
var catsAPI = "https://api.thecatapi.com/v1/breeds";
var fetchCats = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, names, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(catsAPI)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                names = _a.sent();
                console.log("Esto es una prueba");
                console.log(names);
                names.forEach(function (name) {
                    console.log(name.name);
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error("Esto es un error", error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
fetchCats();
/* const square = async (n: number): Promise<number> => {
  return n * n;
};

async function runSquareExample(): Promise<void> {
  try {
    const valor: number = await square(3);
    console.log(valor);
  } catch (error) {
    console.error("Ocurrio un error", error);
  }
}
runSquareExample();

const fetchData = async (): Promise<void> => {
  try {
    const respuesta: Response = await fetch(url);
    const countries: Country1[] = await respuesta.json();
    console.log(countries);
  } catch (error) {
    console.error(error);
  }
};

console.log("===== async end await ===========");
fetchData(); */
