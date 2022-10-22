import React from 'react'
import {randomArrayOfStrings} from "../../utils/utils";

const Title = () => {
    const strings = randomArrayOfStrings(10);
    const label = strings[0];
    const tooltip = strings[1];
    return(
        <div>
            <h3>Title Tooltip</h3>
            <div>
            Consider the following label <b>"{label}"</b> and input text input field.
            The input field is initially empty.
            When the user hovers over the input field, a small text appears <b>"{tooltip}"</b>
                near the input field with a hint of the input that is expected.
            When the user hovers away, the hint disappears.

            <br/>
            <br/>
            <label>{label}</label>
            <br/>
            {/*<input title="Please enter your email"/>*/}
                <div style={{color: 'white', border: 'solid 1px black', width: '200px', height: '25px', padding: '4px'}}>
                    hello
                </div>
                <span style={{backgroundColor: 'gray', color: 'white', width: '100px', position: "relative", left: '90px', bottom: '10px', padding: '3px'}}>
                    {tooltip}
                </span>
            <br/>
            <br/>
            This behavior can be achieved with which of the following code snippets?
            <hr/>
            <input type="radio" checked={true}/>
            <pre>
                    {`
<label>Email</label>
<input title="Please enter your email"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input tooltip="Please enter your email"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input hint="Please enter your email"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input placeholder="Please enter your email"/>
`}                    
                </pre>
            </div>
        </div>
    )
}

export default Title