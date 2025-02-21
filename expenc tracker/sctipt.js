let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
displayExpenses();

function addExpense() {
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (!amount || !description) return alert("Please enter all fields!");

    const expense = { id: Date.now(), amount, category, description };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
}

function displayExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";
    expenses.forEach(expense => {
        const li = document.createElement("li");
        li.className = "expense-item";
        li.innerHTML = `${expense.amount} - ${expense.category} - ${expense.description} 
            <button onclick="editExpense(${expense.id})">Edit</button>
            <button onclick="deleteExpense(${expense.id})">Delete</button>`;
        list.appendChild(li);
    });
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}
function editExpense(id) {
    const expense = expenses.find(exp => exp.id === id);
    document.getElementById("amount").value = expense.amount;
    document.getElementById("category").value = expense.category;
    document.getElementById("description").value = expense.description;
    deleteExpense(id);
}