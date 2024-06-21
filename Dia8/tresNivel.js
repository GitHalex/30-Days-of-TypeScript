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
