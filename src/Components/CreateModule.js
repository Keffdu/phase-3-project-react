import React from "react";
import { useState } from "react";

function CreateModule() {
    const [createModule, setCreateModule] = useState(false)
    return (
        <div>
        {createModule ? <p>hello</p> : null}
        </div>
    )
}

export default CreateModule;