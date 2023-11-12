//importing react from the react file 
import React from "react"
//creating a function component for the search bar
function SearchBar({handleSearch}) {
  //returning  the component 
    return (
      <form style={{ padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="Search..." onChange={handleSearch}/>
      </form>
    )
}
//exporting the search bar component to other files
export default SearchBar