import React from "react";

function AdditionalDetails({ description, id, discont, neg, pos, fiveV, depth, yearReleased}) {

    
    return (
    <div>
        <p className="moduleFunc">{description}</p>
        <p>Power Consumption: {neg}</p>
    </div>
)}

export default AdditionalDetails;