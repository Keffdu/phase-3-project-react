import React, { useEffect } from 'react';
import { useState } from 'react';

function Header({ setSynthData }) {
    const [selectedMFG, setSelectedMFG] = useState(1)
    const [manufacturers, setManufacturers] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/manufacturers')
        .then(resp => resp.json())
        .then((synthInfo) => setManufacturers(synthInfo))
    }, [])

        const brandNames = manufacturers.map((mfg) =>
        <div className='singleBrands'>
            <img 
            onClick= {() => setSelectedMFG(`${mfg.id}`)}
            className='brandImg' src={mfg.image}/>
        </div>)


    useEffect(() => {
        fetch(`http://localhost:9292/manufacturer/${selectedMFG}`)
        .then(resp => resp.json())
        .then((MFGsynthInfo) => setSynthData(MFGsynthInfo.synth_modules))
    }, [selectedMFG])

    function goHome () {
        fetch(`http://localhost:9292/modules`)
        .then(resp => resp.json())
        .then((MFGsynthInfo) => setSynthData(MFGsynthInfo))
    }


    return (
    <div >
        <header className='header'>
            <h1 onClick={goHome} >Synthformation</h1>
        </header>
        <div className='brands'>
            {brandNames}
        </div>
    </div>
)}

export default Header;