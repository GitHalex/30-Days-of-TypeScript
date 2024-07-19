"use strict";
try {
    let firstName = "Asabeneh"; // Proporcionando un valor inicial a firstName
    let lastName = "Yetayeh";
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
catch (err) {
    if (err instanceof Error) {
        console.log("Name of the error", err.name);
        console.log("Error message", err.message);
    }
    else {
        console.log("An unknown error occurred");
    }
}
finally {
    console.log("In any case, I will be executed");
}
const throwErrorExampleFun = () => {
    let message;
    let x = prompt("Enter a number: ");
    try {
        if (x === null || x.trim() === "")
            throw new Error("Input is empty");
        if (isNaN(Number(x)))
            throw new Error("Input is not a number");
        const num = Number(x);
        if (num < 5)
            throw new Error("Input is too low");
        if (num > 10)
            throw new Error("Input is too high");
        message = `Valid input: ${num}`;
        console.log(message);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("Error:", err.message);
        }
        else {
            console.log("An unknown error occurred");
        }
    }
};
throwErrorExampleFun();
