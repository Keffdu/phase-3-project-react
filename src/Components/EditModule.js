import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function EditModule({ onModuleUpdate, manufacturers }) {
    const [editModule, setEditModule] = useState({
        module_name: "",
        manufacturer_name: undefined,
        function: "",
        description: "",
        year_released: undefined,
        discontinued: false,
        msrp: undefined,
        hp: undefined,
        depth: undefined,
        positive_v: undefined,
        negative_v: undefined,
        five_v: undefined,
        image: "",
        manufacturer_id: undefined
    })

    const { id } = useParams()
    let history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:9292/edit/module/${id}`)
        .then(resp => resp.json())
        .then((synthDetails) => setEditModule(synthDetails))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(editModule)
        fetch(`http://localhost:9292/edit/module/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editModule),
    })
      .then((r) => r.json())
      .then((editedSynth) => onModuleUpdate(editedSynth))
      alert(`Successfully edited ${editModule.module_name} `)
      history.push("/home")
    }

    function handleChange(e) {
        console.log(e.target.name)
        console.log(e.target.value)

        const name = e.target.name
        const value = e.target.value
        setEditModule({...editModule, [name]: value,})
    } 

    const mfgnames = manufacturers.map((mfg) => <option className="options" value={mfg.id}>{mfg.name}</option>)

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
            value={editModule.manufacturer_id}>
            {mfgnames}
            </select>
        <label className="labels">Module Name:</label>
            <input
            className="selectSpacing"
            value={editModule.module_name}
            onChange={handleChange}
            type="text"
            name="module_name"/>
        <label className="labels">HP:</label>
            <input
            className="selectSpacing"
            value={editModule.hp}
            onChange={handleChange}
            type="number"
            name="hp"/>
        <label className="labels">Function:</label>
            <input
            className="selectSpacing"
            value={editModule.function}
            onChange={handleChange}
            type="text"
            name="function"/>
        <label className="labels">Description:</label>
            <textarea
            className="textarea"
            value={editModule.description}
            onChange={handleChange}
            type="text"
            name="description"
            rows="15" cols="15"/>
        <label className="labels">MSRP</label>
            <input
            className="selectSpacing"
            value={editModule.msrp}
            onChange={handleChange}
            type="number"
            name="msrp"/>
        <label className="labels">Image URL</label>
            <input
            className="selectSpacing"
            value={editModule.image}
            onChange={handleChange}
            type="text"
            name="image"/>
        <label className="labels">Release Year</label>
            <input
            className="selectSpacing"
            value={editModule.year_released}
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

export default EditModule;