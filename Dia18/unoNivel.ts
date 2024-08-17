const doPromise: Promise<string[]> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills: string[] = ["HTML", "CSS", "JavaScript"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result: string[]) => {
    console.log(result);
  })
  .catch((error: string) => console.log(error));

const doPromise2: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills: string[] = ["HTML", "CSS", "JavaScript"];
    if (skills.includes("Node")) {
      resolve("Fullstack Developer");
    } else {
      reject("something worn has happenned");
    }
  }, 2000);
});

doPromise2
  .then((result: string) => {
    console.log(result);
  })
  .catch((error: string) => console.log(error));

const url: string = "https://restcountries.com/v2/all"; // API de países

// Definimos la interfaz para los datos que esperamos de la API
interface Country1 {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
}

async function fetchCountries(): Promise<void> {
  try {
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la solicitud a la API");
    }

    const data: Country1[] = await response.json(); // Convertimos la respuesta a JSON tipado
    console.log(data);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

fetchCountries();

interface Language {
  name: string;
}

interface Country2 {
  name: string;
  capital: string;
  languages: Language[];
  population: number;
  area: number;
}

const fetchCountriesData = async (): Promise<void> => {
  try {
    const response: Response = await fetch(url);
    const countries: Country2[] = await response.json();
    console.log(countries);
    countries.forEach((pais: Country2) => {
      console.log("======================================");
      console.log(`Country: ${pais.name}`);
      console.log(`Capital: ${pais.capital}`);
      console.log(
        `Lanmguages: ${pais.languages.map((lang) => lang.name).join(", ")}`
      );
      console.log(`Population: ${pais.population}`);
      console.log(`Area: ${pais.area} km^2`);
      console.log("======================================");
    });
  } catch (error) {
    console.error(`Error fetching the countries data: ${error}`);
  }
};

// fetchCountriesData();

const catsAPI: string = "https://api.thecatapi.com/v1/breeds";

interface Cat {
  name: string;
}
const fetchCats = async (): Promise<void> => {
  try {
    const response: Response = await fetch(catsAPI);
    const names: Cat[] = await response.json();
    console.log("Esto es una prueba");
    console.log(names);
    names.forEach((name: any) => {
      console.log(name.name);
    });
  } catch (error) {
    console.error("Esto es un error", error);
  }
};

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
