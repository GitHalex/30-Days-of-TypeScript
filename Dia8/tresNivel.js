var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [
        { description: "Salary", amount: 3000 },
        { description: "Freelance", amount: 1500 },
    ],
    expenses: [
        { description: "Rent", amount: 1000 },
        { description: "Groceries", amount: 300 },
    ],
    totalIncome: function () {
        return this.incomes.reduce(function (acc, income) { return acc + income.amount; }, 0);
    },
    totalExpense: function () {
        return this.expenses.reduce(function (acc, expense) { return acc + expense.amount; }, 0);
    },
    accountInfo: function () {
        return "Account Holder: ".concat(this.firstName, " ").concat(this.lastName);
    },
    addIncome: function (description, amount) {
        this.incomes.push({ description: description, amount: amount });
    },
    addExpense: function (description, amount) {
        this.expenses.push({ description: description, amount: amount });
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    },
};
console.log(personAccount.accountInfo()); // Account Holder: John Doe
console.log(personAccount.totalIncome()); // 4500
console.log(personAccount.totalExpense()); // 1300
console.log(personAccount.accountBalance()); // 3200
personAccount.addIncome("Stock Dividends", 200);
console.log(personAccount.totalIncome()); // 4700
personAccount.addExpense("Utilities", 150);
console.log(personAccount.totalExpense()); // 1450
console.log(personAccount.accountBalance()); // 3250
var usuarios = [
    {
        id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];
var signUp = function (newUser) {
    var userExists = usuarios.some(function (user) { return user.email === newUser.email || user.username === newUser.username; });
    if (userExists) {
        return "Usuario ya tiene una cuenta.";
    }
    else {
        var newUserWithId = __assign(__assign({ id: Math.random().toString(36).substring(2, 15) }, newUser), { createdAt: new Date().toLocaleString(), isLoggedIn: false });
        usuarios.push(newUserWithId);
        return "Usuario registrado exitosamente.";
    }
};
var signIn = function (usernameOrEmail, password) {
    var user = usuarios.find(function (user) {
        return (user.email === usernameOrEmail || user.username === usernameOrEmail) &&
            user.password === password;
    });
    if (user) {
        if (user.isLoggedIn) {
            return "El usuario ya está conectado.";
        }
        else {
            user.isLoggedIn = true;
            return "Inicio de sesión exitoso.";
        }
    }
    else {
        return "Nombre de usuario o contraseña incorrectos.";
    }
};
console.log(signUp({
    username: "NewUser",
    email: "newuser@example.com",
    password: "password123",
}));
console.log(signIn("newuser@example.com", "password123"));
console.log(signIn("Alex", "123123"));
