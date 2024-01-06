import React from "react";
import { useNavigate } from "react-router-dom";

const Subject = ({subject}) =>{
    const navigate = useNavigate();
    return(
        <div className="pa2" >
            <h1 
            className="ba pa3 br4 dim shadow-1 pointer" 
            style={{width:"fit-content"}}
            onClick={()=>{navigate('./files')}}>
                {subject}
            </h1>
        </div>
    )
}

export default Subject;