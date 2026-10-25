const form = document.getElementById("transaction-form");
const transactionList = document.getElementById("transaction-list");
const filter = document.getElementById("filter");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");
const emptyMessage = document.getElementById("empty-message");

let transactions = [];
let nextId = 1;

document.getElementById("date").value =
    new Date().toLocaleDateString("en-IN");

function formatCurrency(amount) {
    return "₹" + amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function updateDashboard() {
    const income = transactions
        .filter(t => t.type === "income")
        .reduce((total, t) => total + t.amount, 0);

    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce((total, t) => total + t.amount, 0);

    balanceElement.textContent = formatCurrency(income - expenses);
    incomeElement.textContent = formatCurrency(income);
    expensesElement.textContent = formatCurrency(expenses);
}

function displayTransactions() {
    transactionList.innerHTML = "";

    const filteredTransactions = transactions.filter(t =>
        filter.value === "all" || t.type === filter.value
    );

    emptyMessage.style.display =
        filteredTransactions.length === 0 ? "block" : "none";

    filteredTransactions.forEach(t => {
        const row = document.createElement("tr");

        const values = [
            t.date,
            t.description,
            t.category,
            t.type,
            formatCurrency(t.amount)
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        row.children[3].className = t.type;

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", () => {
            transactions = transactions.filter(item => item.id !== t.id);
            updateDashboard();
            displayTransactions();
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        transactionList.appendChild(row);
    });
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const description = document.getElementById("description").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!description || !Number.isFinite(amount) || amount <= 0 || !date) {
        alert("Please enter valid transaction details.");
        return;
    }

    const transaction = {
        id: nextId++,
        description,
        amount,
        type,
        category,
        date
    };

    transactions.push(transaction);

    updateDashboard();
    displayTransactions();

    form.reset();
    document.getElementById("date").value =
        new Date().toLocaleDateString("en-CA");
});

filter.addEventListener("change", displayTransactions);

updateDashboard();
displayTransactions();