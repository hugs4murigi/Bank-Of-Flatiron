//importing components from other files 
import React from 'react'
import NewTransaction from './newtransaction'
import TransactionList from './transactionlist'
import { useEffect, useState } from 'react'
import SearchBar from './searchBar';

//creating a function component for the front end display
function FilterableProductTable() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState ("");
  //using side effect for fetching objs in the json
  useEffect(() => {
      fetch("http://localhost:3000/transactions?q=" + query)
        .then((r) => r.json())
        .then(data => setTransactions(data))
  }, [query])
//creating adding transaction function
  function addTransaction(newTransactions) {
    const updatedTransactions = [...transactions, newTransactions]
    setTransactions(updatedTransactions);
  }
//creating search function
  function handleSearch(event){
    setQuery(event.target.value)
  }
//creating deleting transaction function
  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(transactions => transactions.id !== id)
    setTransactions(updatedTransactions)
}
//returning the function for displaying the componenets
  return (
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <h1>Bank of Flatiron</h1>
      <NewTransaction onAddTransaction={addTransaction} />
      <br/>
      <SearchBar handleSearch={handleSearch}/>
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction}/>
    </div>
  )
}
//exporting the main component
export default FilterableProductTable