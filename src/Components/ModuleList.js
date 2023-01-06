import React from "react";
import ModuleDetails from "./ModuleDetails";

function ModuleList ({ synthData, onDeleteSynth }) {
    const modules = synthData.map((mod) => {
        return (
            <ModuleDetails
            key={mod.id}
            id={mod.id}
            name={mod.module_name}
            func={mod.function}
            description={mod.description}
            image={mod.image}
            msrp={mod.msrp}
            hp={mod.hp}
            discont={mod.discontinued}
            neg={mod.negative_v}
            pos={mod.positive_v}
            fiveV={mod.five_v}
            depth={mod.depth}
            yearReleased={mod.year_released}
            onDeleteSynth={onDeleteSynth}
            />)
            
    })

    return (
        <div className="moduleGroup">
            {modules}
        </div>)
}

export default ModuleList;