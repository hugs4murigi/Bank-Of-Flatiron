//importing react and usestate from the react file
import React, { useState } from "react"

//creating a function component for adding the transaction
function NewTransaction({ onAddTransaction }) {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    //creating a funtion for handling the submit form
    function handleSubmit(e) {
        e.preventDefault()
        const transactionObj = { 
            transaction: { 
                date: date,
                description: description,
                category: category,
                amount: amount,

            }
        }
        // persist or posting transaction on server
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transactionObj)
        })
            .then(r => r.json())
            .then(data => onAddTransaction(data.transaction))
        // then use onAddTransaction to add transaction to state
    }
  
    //returning the components of the function called 
    return (
        //creating a form 
        <form onSubmit={handleSubmit}>
            <h2>Add Transaction</h2>
            <label htmlFor="date">date:</label>
            <input
                type="text"
                id="date"
                placeholder="Year--Month--Day"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="category">category:</label>
            <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="amount">amount:</label>
            <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br/>
            <br/>
            <button type="submit">Add trasaction</button>
        </form>
    )
}

//exporting the components 
export default NewTransaction;