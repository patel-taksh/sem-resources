import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Subject = ({subject}) =>{
    const navigate = useNavigate();


    console.log("in subjects")

    return(
        <div className="pa2" >
            <h1 
            className="ba pa3 br4 dim shadow-1 pointer" 
            style={{width:"fit-content"}}
            // onClick={()=>{navigate(`./${subject}`)}}
            onClick={()=>{window.open(`http://localhost:3000/resources/${subject}`,'_blank')}}
            
            >
                {subject}
            </h1>
        </div>
    )
}

export default Subject;