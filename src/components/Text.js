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
        let t = text.length;
        setText(t);
    }

    const onChangeFunction = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Text..");
    return (
        <div>
            <h1 className=' w-75 mx-auto'>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control w-75 mx-auto border border-dark border-1.5"
                    value={text} onChange={onChangeFunction}  id="exampleFormControlTextarea1" rows="8"></textarea>

                <div className='button my-5'>
                    <button className='btn btn-primary' onClick={UpperCase}>Convert To UpperCase</button>
                    <button className='btn btn-success' onClick={LowerCase}>Convert To LowerCase</button>
                    <button className='btn btn-warning' onClick={Length}>Length</button>
                </div>
            </div>
        </div>
    )
}
