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

const square = async (n: number): Promise<number> => {
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
