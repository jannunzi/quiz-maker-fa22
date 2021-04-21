import React from 'react'

const Placeholder = () => {
    return(
        <div>
            <h3>Placeholder</h3>
            Consider the following label "Email" and input text input field.
            <br/>
            The input field is initially empty,
            <br/>
            but shows grayed out text saying "thomas@sowell.com"
            <br/>
            giving the user a hint of the input that is expected.
            <br/>
            When the user types into the text field, the hint disappears.
            <br/>
            If the user deletes all the text, the hint appears again.

            <br/>
            <br/>
            <label>Email</label>
            <br/>
            <input placeholder="thomas@sowell.com"/>
            <br/>
            <br/>
            This behavior can be achieved with which of the following code snippets?
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<label>Email</label>
<input placeholder="thomas@sowell.com"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input hint="thomas@sowell.com"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input tip="thomas@sowell.com"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input value="thomas@sowell.com"/>
`}                    
                </pre>
        </div>
    )
}

export default Placeholder