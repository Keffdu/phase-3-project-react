import React from "react";
import { useState } from "react";
import ModuleForm from "./ModuleForm";
import {Link, NavLink} from 'react-router-dom'


function CreateModule() {
    const [createModule, setCreateModule] = useState(false)


    // onClick={() => setCreateModule((createModule) => !createModule)}


    return (
        <div className="createButton">
            <Link to="/new_module">
            <button>New Module</button>
                {/* <ModuleForm
                setCreateModule={setCreateModule}/> */}
            </Link>
        </div>
    )
}

export default CreateModule;