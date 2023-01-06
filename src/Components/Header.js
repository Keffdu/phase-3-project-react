import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'

function Header({ setSynthData, manufacturers, setManufacturers }) {
    const [selectedMFG, setSelectedMFG] = useState(1)
    
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
            <Link to="/home">
                <h1 onClick={goHome} >Synthformation</h1>
            </Link>
        </header>
        <div className='brands'>
            {brandNames}
        </div>
    </div>
)}

export default Header;