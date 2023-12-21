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
        const file=event.dataTransfer.files[0];
        setFile(file);

    }

    const upload = () => {
        const formdata = new FormData();
        const sub={
            subject: document.getElementById("subject-entered").value
        }
        console.log(sub);
        formdata.append('file', file);

        axios.post('http://localhost:3001/subject', sub);
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