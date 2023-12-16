import React from "react";

const Uploadfiles =()=>{
    const handleDrag =(event)=>{
        event.preventDefault();
        console.log(event);
    }
    const handleDrop=(event)=>{
        event.preventDefault();
        console.log(event);
    }
    return(
        <div className="container">
            <div className="dropzone"
            onDragOver={handleDrag}
            onDrop={handleDrop}
            >
                <h1>Drag your files here</h1>
            </div>

        </div>
    )
}

export default Uploadfiles;