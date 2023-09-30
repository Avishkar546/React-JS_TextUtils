import React, { useState } from 'react'

export default function Text(props) {
    const UpperCase = () => {
        let t = text.toUpperCase();
        setText(t);
    }

    const LowerCase = () => {
        let t = text.toLowerCase();
        setText(t);
    }

    const Length = () => {
        let t = String(text).length;
        setText(t);
    }

    const spaceRemove = () =>{
       let t = text.split(/[ ]+/);
       setText(t.join(" "));
    }
    const copyFunction = () =>{
        var t =document.getElementById("exampleFormControlTextarea1");
        t.select();
        navigator.clipboard.writeText(t.value);
    }

    const onChangeFunction = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Text..");
    return (
        <>
            <div>
                <h1 className=' w-75 mx-auto'>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control w-75 mx-auto border border-dark border-1.5" onClick={() => { if (text === "Enter Text..") { setText(""); } }}
                        value={text} onChange={onChangeFunction} id="exampleFormControlTextarea1" rows="8"></textarea>

                    <div className='button my-5'>
                        <button className='btn btn-primary' onClick={UpperCase}>Convert To UpperCase</button>
                        <button className='btn btn-success' onClick={LowerCase}>Convert To LowerCase</button>
                        <button className='btn btn-warning' onClick={Length}>Length</button>
                        <button className='btn btn-warning' onClick={spaceRemove}>Remove Spaces</button>
                        <button className='btn btn-warning' onClick={copyFunction}>Copy</button>
                    </div>
                </div>
            </div>
            <div className="container w-75 mx-auto my-auto">
                <h1>Text Summary</h1>
                <p>Text Contains {String(text).split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * String(text).split(" ").length} minutes read</p>
            </div>
        </>
    )
}
