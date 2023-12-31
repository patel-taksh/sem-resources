import React from "react";
import "tachyons";
import "./Navigation.css"
import { Link, Outlet } from "react-router-dom";

function Navigation({ changeRoutes }) {
    // console.log(document.getElementById("nav"));
    return (
        <div>
            <form className="pt3">
                <input placeholder="Search subject" ></input>
            </form>
            <nav style={{display:"flex", justifyContent:"flex-end", flexDirection:"row"}}>
                <Link to="/" className="pr3" id="nav">Home</Link>
                <Link to="/resources" className="pr3" id="nav">Resources</Link>
                <Link to="/upload" className="pr3" id="nav">Upload</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navigation;