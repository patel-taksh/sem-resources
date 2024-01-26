import React from "react";
import Subject from "./Subjects";
import { Outlet } from "react-router-dom";

const Resources = () => {
    console.log("IN resources")
    return (
        <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Subject subject="DE" />
            <Subject subject="EES" />
            <Subject subject="HW" />
            <Subject subject="MAT" />
            <Subject subject="OOPS" />
            <Subject subject="PnS" />
        </div>
        <Outlet />
        </>
    )
}

export default Resources;