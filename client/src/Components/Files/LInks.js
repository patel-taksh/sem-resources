import React from "react";

import axios from "axios";





// axios.get('http://localhost:3001/files')
//     .then(res => {

//         const f = res.data.filter((b) => {
//             return b.sub === 'de';
//         })
//         name = f.map((a) => {
//             return a.name
//         })
//         isResolved=true;
//     })
//     // .then((name)=>{
//     //     Links.current=name.forEach(element => {
//     //         console.log(element)
//     //         return <a href={`http://localhost:3001/de/images/${element}`} target="_blank">HELLO</a>
//     //     });
//     // })
//     .catch(err => console.log(err))


const links=async (a)=>{
    let name;
    let isResolved=false;
    axios.get('http://localhost:3001/files')
    .then(res => {
        console.log(res)
        const f = res.data.filter((b) => {
            return b.sub === a;
        })
        name = f.map((a) => {
            return a.name
        })
        isResolved=true;
    })
    // .then((name)=>{
    //     Links.current=name.forEach(element => {
    //         console.log(element)
    //         return <a href={`http://localhost:3001/de/images/${element}`} target="_blank">HELLO</a>
    //     });
    // })
    .catch(err => console.log(err))
    
    if(isResolved){
        // console.log(name)
        return name;
    }
    return name
}

export default links;