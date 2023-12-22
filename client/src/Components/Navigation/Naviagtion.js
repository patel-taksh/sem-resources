import React from "react";
import "tachyons";
import "./Navigation.css"

function Navigation ({changeRoutes}){
    // console.log(document.getElementById("nav"));
    return(
        <div>
            <nav>
                <form className="pt3">
                    <input placeholder="Search subject" ></input>
                </form>
                <div style={{display:"flex",justifyContent:"flex-end", flexDirection:"row"}}>
                    <button className="dim pr3 link " id="nav" onClick={changeRoutes}>Home</button>
                    <button className="dim pr3 link" id="nav" onClick={changeRoutes}>Resources</button>
                    <button className="dim pr3 link" id="nav" onClick={changeRoutes}>Upload</button>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;