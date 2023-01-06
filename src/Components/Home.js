import React from "react";
import SearchBar from "./SearchBar";
import ModuleList from "./ModuleList";

function Home({ search, onSearchChange, option, onOptionChange, setSynthData, synthData }) {
    return (
        <div>
        <SearchBar
        search={search}
        onSearchChange={onSearchChange}
        option={option}
        onOptionChange={onOptionChange}
        setSynthData={setSynthData}
        />
        <ModuleList synthData={synthData}/>
        </div>)
}

export default Home;