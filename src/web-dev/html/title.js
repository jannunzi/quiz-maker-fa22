import React from 'react'

const Title = () => {
    return(
        <div>
            <h3>Title Tooltip</h3>
            Consider the following label "Email" and input text input field.
            <br/>
            The input field is initially empty.
            <br/>
            When the user hovers over the input field, a small text appears "Please enter your email"
                <br/>
                near the input field with a hint of the input that is expected.
            <br/>
            When the user hovers away, the hint disappears.

            <br/>
            <br/>
            <label>Email</label>
            <br/>
            <input title="Please enter your email"/>
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
    )
}

export default Title