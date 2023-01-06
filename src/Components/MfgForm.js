import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function MfgForm({ setManufacturers, manufacturers  }) {
    let history = useHistory()

    const [mfgData, setMfgData] = useState({
        name: "",
        year_founded: undefined,
        location: "",
        founded_by: "",
        image: ""
    })

    console.log(mfgData)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(mfgData)
        fetch("http://localhost:9292/manufacturers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mfgData),
    })
      .then((r) => r.json())
      .then((newMFG) => setManufacturers([...manufacturers, newMFG]))
      alert("Successfully created new manufacturer")
      history.push("/home")
    }

    function handleChange(e) {
        console.log(e.target.name)
        console.log(e.target.type)

        const name = e.target.name
        const value = e.target.value
        setMfgData({...mfgData, [name]: value,})
    } 

    return (
        <div className="form">
        <form 
            onSubmit={handleSubmit}
            className="formFormat">
            <label className="labels">Manufacturer Name:</label>
                <input
                    className="selectSpacing"
                    value={mfgData.name}
                    onChange={handleChange}
                    type="text"
                    name="name"/>
            <label className="labels">Year Founded:</label>
                <input
                className="selectSpacing"
                value={mfgData.year_founded}
                onChange={handleChange}
                type="number"
                name="year_founded"/>
            <label className="labels">Founded By:</label>
                <input
                className="selectSpacing"
                value={mfgData.founded_by}
                onChange={handleChange}
                type="text"
                name="founded_by"/>
            <label className="labels">Location:</label>
                <input
                className="selectSpacing"
                value={mfgData.location}
                onChange={handleChange}
                type="text"
                name="location"/>
            <label className="labels">Image:</label>
                <input
                className="selectSpacing"
                value={mfgData.image}
                onChange={handleChange}
                type="text"
                name="image"/>
                <div>
                <button type="submit">Create Manufacturer</button>
                </div>
        </form>
        </div>
    )
}

export default MfgForm;