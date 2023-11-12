//fetching components from other files 
import React from "react";
import TransactionItem from "./transactions";
import { useState } from "react";

//creating function componenets for the transaction list
function TransactionList({ transactions, onDeleteTransaction }) {
  const [search, setSearch] = useState("")
//returning the function component 
  return (
    <div>
      <h2>My Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} search={search}/>
        ))}
      </ul>
    </div>
  );
}
//exporting the transaction list components to other files
export default TransactionList;