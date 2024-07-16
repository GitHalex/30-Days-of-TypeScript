try {
    var firstName = "Asabeneh"; // Proporcionando un valor inicial a firstName
    var lastName = "Yetayeh";
    var fullName = firstName + " " + lastName;
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
var throwErrorExampleFun = function () {
    var message;
    var x = prompt("Enter a number: ");
    try {
        if (x === null || x.trim() === "")
            throw new Error("Input is empty");
        if (isNaN(Number(x)))
            throw new Error("Input is not a number");
        var num = Number(x);
        if (num < 5)
            throw new Error("Input is too low");
        if (num > 10)
            throw new Error("Input is too high");
        message = "Valid input: ".concat(num);
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
