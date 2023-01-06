import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import AdditionalDetails from "./AdditionalDetails";

function ModuleDetails({ onDeleteSynth, id, name, func, description, image, msrp, hp, discont, neg, pos, fiveV, depth, yearReleased, }) {

    const [moreInfo, setMoreInfo] = useState(false)


    function handleDelete() {
        console.log("running")
        fetch(`http://localhost:9292/delete/module/${id}`, {
            method: "DELETE",
        })
        onDeleteSynth(id)
    }

    return (
    <div className="modules">
        <div className="moduleTitle">
            <h2 id="moduleName">{name}</h2>
            <h4 className="moduleFunc">
            <Link to={`/edit/module/${id}`}>
                    <span>✏️</span>
            </Link>
                    {func}
                    <button className="trash" onClick={handleDelete}>🗑</button>
            </h4>
            {moreInfo ? <div className="discontinued">{discont ? "Discontinued" : null }</div> : null}
        </div>
        <img onClick={() => setMoreInfo((moreInfo) => !moreInfo)} 
            className='image' src={image} />
        <h4 className="moduleFunc">Price: ${msrp} | HP: {hp}</h4>
        <h4 className="moduleFunc">Released: {yearReleased}</h4>
        {moreInfo ?
            <AdditionalDetails
                id={id}
                description={description}
                discont={discont}
                neg={neg}
                pos={pos}
                fiveV={fiveV}
                depth={depth}
                yearReleased={yearReleased}
                /> : null}
    </div>
)}

export default ModuleDetails;