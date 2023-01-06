import React from "react";
import SearchBar from "./SearchBar";
import ModuleList from "./ModuleList";

function Home({  onDeleteSynth, search, onSearchChange, option, onOptionChange, setSynthData, synthData }) {
    return (
        <div>
        <SearchBar
        search={search}
        onSearchChange={onSearchChange}
        option={option}
        onOptionChange={onOptionChange}
        setSynthData={setSynthData}
        />
        <ModuleList 
        onDeleteSynth={onDeleteSynth}
        synthData={synthData}/>
        </div>)
}

export default Home;