import React, { useState } from "react";
import axios from "axios";
import './Upload.css';

const Uploadfiles = () => {
    const [file, setFile] = useState();
    const handleDrag = (event) => {
        event.preventDefault();
    }
    const handleDrop = (event) => {

        event.preventDefault();
        console.log(event.dataTransfer.files[0]);
        const file = event.dataTransfer.files[0];
        setFile(file);

    }

    const upload = () => {
        const formdata = new FormData();
        
        const sub=({
            subject: document.getElementById("subject").innerHTML.toLowerCase()
        })
        formdata.append('file', file);

        if(file){
            axios.post('http://localhost:3001/subject', sub);
            axios.post('http://localhost:3001/uploads', formdata)
            .then(res =>{
                document.getElementById("subject").reset();
            })
        }
        else{
            console.log("Enter file");
        }
    }
    return (
        <div className="container">
            <div className="dropzone"
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <h1>Drag your files here</h1>
            </div>
            <div className="pa3">
                <button type="submit" onClick={upload} id="subject" className="shadow-5 dim">DE</button>
                <button type="submit" onClick={upload} id="subject" className="shadow-5 dim">EES</button>
                <button type="submit" onClick={upload} id="subject" className="shadow-5 dim">HW</button>
                <button type="submit" onClick={upload} id="subject" className="shadow-5 dim">MAT</button>
                <button type="submit" onClick={upload} id="subject" className="shadow-5 dim">OOPS</button>
                <button type="submit" onClick={upload} id="subject" className="shadow-5 dim">P&S</button>
            </div>

        </div>
    )
}

export default Uploadfiles;