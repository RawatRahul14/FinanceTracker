# Finance Tracker

A simple, responsive web application for tracking personal income and expenses. The application provides a dashboard to view your financial summary and manage transactions through an easy-to-use interface.

## Features

- **Dashboard:** View total balance, income, and expenses.
- **Add Transactions:** Record income and expenses with a description, amount, category, and date.
- **Transaction History:** View all recorded transactions in a table.
- **Filter Transactions:** Filter the transaction list by income or expense.
- **Delete Transactions:** Remove transactions and automatically update financial totals.
- **Responsive Design:** Use the application on desktop and mobile screens.

## Tech Stack

- **HTML5** — Application structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Transaction management and dynamic dashboard updates

## Project Structure

```text
FinanceTracker/
└── index.html
├── style.css
└── script.js
```

## Getting Started

### Prerequisites

You only need a modern web browser. No additional dependencies or package installations are required.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RawatRahul14/FinanceTracker.git
```

2. Navigate to the project directory:

```bash
cd FinanceTracker
```

3. Open `index.html` in your browser.

Alternatively, open the project folder in Visual Studio Code and use the Live Server extension to run the application locally.

## How It Works

1. Enter a transaction description and amount.
2. Select the transaction type and category.
3. Choose a date and click **Add Transaction**.
4. View the updated balance, total income, and total expenses.
5. Use the transaction filter to view specific transaction types.
6. Delete a transaction when it is no longer needed.

The dashboard totals are calculated dynamically using JavaScript based on the transactions currently held in memory.

## Current Limitations

- Transactions are not permanently stored.
- Refreshing the page clears all transactions.
- Editing existing transactions is not currently implemented.
- The application does not yet have a backend or database.

## Future Improvements

- Integrate a FastAPI backend.
- Add persistent database storage.
- Implement transaction editing.
- Add monthly financial summaries and date-based filtering.
- Introduce budget tracking and spending limits.

## License

This project was developed for educational purposes. A license can be added if the project is distributed publicly.