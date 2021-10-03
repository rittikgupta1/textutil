import { useState } from "react"
import React from 'react'

export default function Forms(props) {
    const handleupClick = () => {
        setText(text.toUpperCase());
    }
    const Changehogya = (event) => {
        setText(event.target.value);
    }
    const handleupClicllower = () => {
        setText(text.toLowerCase());
    }
    const handlespaces =()=>{
        let newtext = text.trim();
        setText(newtext);
        };
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={Changehogya} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupClick}>Capitalize</button>
                <button className="btn btn-primary" onClick={handleupClicllower}>LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handlespaces}>Remove Extra spaces</button>
     </div>
           
            <div className="container my-3">
                <p>Numer of words:<strong>{text.split(" ").length}</strong>and  Number of characters:<strong>{text.length}</strong></p>
                <p>Time taken to read: <strong> {text.split(" ").length*0.008}min</strong> </p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
