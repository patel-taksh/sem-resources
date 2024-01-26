import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import links from "./LInks";

class GetFiles extends React.Component {
    constructor() {
        super();

        // let Links = useRef(0);
        console.log("Hello");
        this.state = { name: 'ok' }


    }

    async componentWillMount() {
        const url = window.location.href;
        let a = url.split('/')[4].toLowerCase();
        async function getData() {
            let n;
            await axios.get('http://localhost:3001/file')
                .then(res => {
                    n = res.data.filter((file) => {
                        if (file.sub === a) {
                            return file.name
                        }
                    })
                })
                .catch(err => { console.log(err) })
            return n;
        }

        const data = await getData();
        // console.log(data);
        this.setState({
            name: data
        })

    }

    render() {
        // console.log(Object.entries(this.state.name)[0][1])
        const data = Object.entries(this.state.name);
        console.log(data)
        return (
            <div>
                {
                    // (<h1>Hello</h1>)
                    data.map(element => (
                        <div>
                        <a href={`http://localhost:3001/${element[1].sub}/${element[1].type}/${element[1].name}`} target="_blank">Click</a>
                        <br></br>
                        </div>
                    ))
                }
            </div>

            // <ul>
            //     {data.map(item => (
            //         <li key={item.id}>{item.animal}</li>
            //     ))}
            // </ul>
        )
    }


}

export default GetFiles;
