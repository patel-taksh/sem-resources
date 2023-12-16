import React from "react";

const Subject = ({subject}) =>{
    return(
        <div className="pa2">
            <h1 className="ba pa3 br4 dim shadow-1" style={{width:"fit-content"}}>{subject}</h1>
        </div>
    )
}

export default Subject;