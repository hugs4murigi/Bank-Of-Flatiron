//importing components from other files 
import React from 'react'
import ReactDOM from 'react-dom/client'
import FilterableProductTable from './App.jsx'
//rendering components to the html file
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterableProductTable />
  </React.StrictMode>,
)