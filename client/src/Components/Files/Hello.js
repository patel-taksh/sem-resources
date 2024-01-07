import React from "react";

const Hello=()=>{
    const queryParams=new URLSearchParams(window.location.search);
    console.log(window.location.search)

    const subject=queryParams.get("subject");
    console.log(window.location.href);

    const url=window.location.href;
    const a=url.split('/');
    console.log(a[4]);

    return(
        <div>
            <h1>{a[4]}</h1>
        </div>
    )
}

export default Hello;