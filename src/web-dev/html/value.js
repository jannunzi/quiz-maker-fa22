import React from 'react'

const Value = () => {
    return(
        <div>
            <h3>Input field Value</h3>
            Consider the following label "Email" and input text input field.
            <br/>
            The input field initially displays the text "thomas@sowell".
            <br/>
            The user can edit the text by clicking into the field and typing on their keyboard.
            <br/>
            <br/>
            <label>Email</label>
            <br/>
            <input value="thomas@sowell"/>
            <br/>
            <br/>
            This behavior can be achieved with which of the following code snippets?
            <hr/>
            <input type="radio" checked={true}/>
            <pre>
                    {`
<label>Email</label>
<input value="thomas@sowell"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input data="thomas@sowell"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input email="thomas@sowell"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input placeholder="thomas@sowell"/>
`}                    
                </pre>
        </div>
    )
}

export default Value