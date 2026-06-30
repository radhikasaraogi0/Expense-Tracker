let expenses = [];

const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");
addBtn.addEventListener("click", addExpense);

function addExpense(){
    const name = nameInput.value;
    const amount = Number(amountInput.value);
    if(name==="" || amount<=0){
        alert("Enter valid details");
        return;
    }

    expenses.push({
        name:name,
        amount:amount
    })

    nameInput.value="";
    amountInput.value="";

    displayExpenses();
}


function displayExpenses(){
    expenseList.innerHTML="";
    let sum=0;
    for(let i=0;i<expenses.length;i++){
        sum+=expenses[i].amount;
        const li=document.createElement("li");
        li.innerHTML=`
            ${expenses[i].name} - ₹${expenses[i].amount}
            <button class="delete" onclick="deleteExpense(${i})">
            Delete
            </button>
        `;
        expenseList.appendChild(li);

    }
    total.textContent=sum;
}


function deleteExpense(index){
    expenses.splice(index,1);
    displayExpenses();
}
