import { useState } from "react"
import React from 'react'

export default function Forms(props) {
    const handleupClick= ()=>{
        console.log("Capiyalze is clicked");
        setText(text.toUpperCase());
    }
    const Changehogya= (event)=>{
        console.log("OnChange");
        setText(event.target.value);
        }
    const[text,setText]=useState("Enter text here");
    return (
        <div>
            <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={Changehogya} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleupClick}>Capitalize</button>
</div>
    )
}
