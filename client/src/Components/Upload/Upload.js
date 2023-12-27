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

    const upload = (event) => {
        const formdata = new FormData();

        const sub = ({
            subject: event.target.innerHTML.toLowerCase()
        })
        formdata.append('file', file);
        console.log(event.target.innerHTML.toLowerCase());

        if (file) {
            axios.post('http://localhost:3001/subject', sub)
            .then(res=>{
                setFile(null);
            })

            axios.post('http://localhost:3001/uploads', formdata)
                .then(res => {
                    // const sub_button = document.getElementById("subject-form");
                    // sub_button.reset();
                    // console.log(document.getElementById("reset").click());
                    console.log("file sent to backend")
                })
                .catch(err => console.log(err))
        }
        else {
            alert("Enter file");
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
                    <button type="submit" onClick={upload} id="subject" className="shadow-5 dim">PnS</button>
                    <button type="reset" id="reset"></button>
            </div>

        </div>
    )
}

export default Uploadfiles;