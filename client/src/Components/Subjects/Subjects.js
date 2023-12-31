import React from "react";

const Subject = ({subject}) =>{
    return(
        <div className="pa2" >
            <h1 
            className="ba pa3 br4 dim shadow-1 pointer" 
            style={{width:"fit-content"}}
            onClick={()=>{alert(subject)}}
            >
                {subject}
            </h1>
        </div>
    )
}

export default Subject;