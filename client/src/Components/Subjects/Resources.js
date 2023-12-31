import React from "react";
import Subject from "./Subjects";
import { Link } from "react-router-dom";

const Resources = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* <Link to="./de" target="_blank" >hello</Link> */}
            
            <Subject subject="EES" />
            <Subject subject="HW" />
            <Subject subject="MAT" />
            <Subject subject="OOPS" />
            <Subject subject="PnS" />
        </div>
    )
}

export default Resources;