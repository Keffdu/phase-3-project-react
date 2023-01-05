import React from "react";
import CreateMFG from "./CreateMFG";
import CreateModule from "./CreateModule";

function SearchBar({ search, onSearchChange, option, onOptionChange, setSynthData }) {

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/${option}/${search}`)
        .then(resp => resp.json())
        .then((searchData) => setSynthData(searchData))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="searchBar">
                    <select 
                        id="options"
                        onChange={(e) => onOptionChange(e.target.value)}
                        value={option}>
                        <option value={"module_name"}>Module Name</option>
                        <option value={"function"}>Function</option>
                        <option value={"hp"}>HP</option>
                    </select>
                    <input 
                    id="search"
                    type="text"
                    name="search"
                    placeholder="Search..."
                    autoComplete="off"
                    value={search}
                    onChange={e => onSearchChange(e.target.value)}
                    />
                <button type="submit">Search</button>
                </div>
            </form>
            <div className="createBar">
            <CreateMFG />
            <CreateModule />
            </div>
        </>
)}

export default SearchBar;