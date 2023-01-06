import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function ModuleForm({ setSynthData, synthData, manufacturers }) {
    let history = useHistory()
    const [formData, setFormData] = useState({
        module_name: "",
        manufacturer_name: undefined,
        function: "",
        description: "",
        year_released: 0,
        discontinued: false,
        msrp: 0,
        hp: 0,
        depth: undefined,
        positive_v: undefined,
        negative_v: undefined,
        five_v: undefined,
        image: "",
        manufacturer_id: 0
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch("http://localhost:9292/modules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newMFG) => setSynthData([...synthData, newMFG]))
      alert("Successfully created new module")
      history.push("/home")
    }

    // console.log(formData)

    const mfgnames = manufacturers.map((mfg) => <option className="options" value={mfg.id}>{mfg.name}</option>)

    function handleChange(e) {
        console.log(e.target.name)
        console.log(e.target.type)

        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]: value,})
    } 

    return (
        <div className="form">
        <form 
        onSubmit={handleSubmit}
        className="formFormat">
        <label className="labels">Manufacturer Name:</label>
            <select
            className="selectSpacing"
            name="manufacturer_id"
            onChange={handleChange}
            value={formData.manufacturer_name}>
                <option className="options">Choose Manufacturer</option>
            {mfgnames}
            </select>
        <label className="labels">Module Name:</label>
            <input
            className="selectSpacing"
            value={formData.module_name}
            onChange={handleChange}
            type="text"
            name="module_name"/>
        <label className="labels">HP:</label>
            <input
            className="selectSpacing"
            value={formData.hp}
            onChange={handleChange}
            type="number"
            name="hp"/>
        <label className="labels">Function:</label>
            <input
            className="selectSpacing"
            value={formData.function}
            onChange={handleChange}
            type="text"
            name="function"/>
        <label className="labels">Description:</label>
            <textarea
            className="selectSpacing"
            value={formData.description}
            onChange={handleChange}
            type="text"
            name="description"/>
        <label className="labels">MSRP</label>
            <input
            className="selectSpacing"
            value={formData.msrp}
            onChange={handleChange}
            type="number"
            name="msrp"/>
        <label className="labels">Image URL</label>
            <input
            className="selectSpacing"
            value={formData.image}
            onChange={handleChange}
            type="text"
            name="image"/>
        <label className="labels">Release Year</label>
            <input
            className="selectSpacing"
            value={formData.year_released}
            onChange={handleChange}
            type="number"
            name="year_released"/>
            <div>
            <button type="submit">Create Module</button>
            </div>
        </form>
        </div>
    )
}

export default ModuleForm;