import React from "react";
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom'

function CreateMFG() {
    return (
<div className="createButton">
            <Link to="/new_manufacturer">
            <button>New Manufacturer</button>
                {/* <ModuleForm
                setCreateModule={setCreateModule}/> */}
            </Link>
        </div>
    )
}

export default CreateMFG;