/* interface Income {
  description: string;
  amount: number;
}

interface Expense {
  description: string;
  amount: number;
}

interface PersonAccount {
  firstName: string;
  lastName: string;
  incomes: Income[];
  expenses: Expense[];
  totalIncome: () => number;
  totalExpense: () => number;
  accountInfo: () => string;
  addIncome: (description: string, amount: number) => void;
  addExpense: (description: string, amount: number) => void;
  accountBalance: () => number;
}

const personAccount: PersonAccount = {
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
  totalIncome() {
    return this.incomes.reduce((acc, income) => acc + income.amount, 0);
  },
  totalExpense() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  },
  accountInfo() {
    return `Account Holder: ${this.firstName} ${this.lastName}`;
  },
  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance() {
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
console.log(personAccount.accountBalance()); // 3250 */

/* interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  isLoggedIn: boolean;
}

const usuarios: User[] = [
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
]; */
