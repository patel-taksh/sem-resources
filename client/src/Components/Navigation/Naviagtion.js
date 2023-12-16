import React from "react";
import "tachyons";

const Navigation =()=>{
    return(
        <div>
            <nav>
                <form className="pt3">
                    <input placeholder="Search subject" ></input>
                </form>
                <div style={{display:"flex",justifyContent:"flex-end", flexDirection:"row"}}>
                    <h3 className="dim pr3 link">Home</h3>
                    <h3 className="dim pr3 link">Resourcces</h3>
                    <h3 className="dim pr3 link">Upload</h3>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;