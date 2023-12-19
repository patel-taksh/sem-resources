import React, { useState } from "react";
import axios from "axios";

const Uploadfiles = () => {
    const [file, setFile] = useState();
    const handleDrag = (event) => {
        event.preventDefault();
    }
    const handleDrop = (event) => {
        event.preventDefault();
        console.log(event.dataTransfer.files[0]);
        const filetype = event.dataTransfer.files[0].type;
        setFile(event.dataTransfer.files[0]);

    }

    const upload = () => {
        const formdata = new FormData();
        const subject=document.getElementById("subject-entered").value;
        formdata.append('file', file);
        formdata.append('subject',subject);
        axios.post('http://localhost:3001/uploads', formdata)
    }
    return (
        <div className="container">
            <div className="dropzone"
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <h1>Drag your files here</h1>
            </div>
            <button type="submit" onClick={upload}>Submit</button>
            <form>
                <input type="text" placeholder="Enter Subject" id="subject-entered"></input>
            </form>

        </div>
    )
}

export default Uploadfiles;