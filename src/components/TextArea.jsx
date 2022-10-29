import React, { useState } from 'react';
import PropType from 'prop-types';

export default function TextArea(props){

    const [text,setText]=useState('');

    let handleClear=()=>{
        setText("");
    }

    let handleUpdateTextUpper =()=>{
        setText(text.toUpperCase())
    }

    let handleUpdateTextLower =()=>{
        setText(text.toLowerCase())
    }

    let handleOnChange =(event)=>{
        setText(event.target.value)
    }

    let handleRemoveSpaces =()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    let handleCopyText =()=>{
        let copiedText=document.getElementById("myForm");
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
    }

    return(   
    <div className={`text-${props.mode.text}`}>
        <div className="form-group">
            <textarea className="form-control m-2" id="myForm" value={text}  onChange={handleOnChange} rows={props.size}></textarea>
            <button className={`btn btn-${props.mode.text} mx-2 my-2`} onClick={handleClear}>Clear</button>
            <button className={`btn btn-${props.mode.text} mx-2 my-2`} onClick={handleUpdateTextUpper}>Uppercase</button>
            <button className={`btn btn-${props.mode.text} mx-2 my-2`} onClick={handleUpdateTextLower}>Lowercase</button>
            <button className={`btn btn-${props.mode.text} mx-2 my-2`} onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
            <button className={`btn btn-${props.mode.text} mx-2 my-2`} onClick={handleCopyText}>Copy</button>
        </div>
        <div className="container">
            <h5 className="my-4">Text Summary</h5>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} letters</p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
    </div>
    )
}

TextArea.propType={
}

