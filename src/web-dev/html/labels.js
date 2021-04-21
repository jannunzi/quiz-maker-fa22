import React from 'react'

const Labels = () => {
    return(
        <div>
            <h3>Labels</h3>
            Consider the following label "Username" and input text input field.
            A user clicks on the label and the input field receives focus, i.e., the cursor appears in the input field ready for the user to type in data.
            <br/>
            <label for="username">Username</label>
            <br/>
            <input id="username"/>
            <br/>
            This behavior can be achieved with which of the following code snippets?
            Select all that apply.
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<label for="username">Username</label>
<input id="username"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label id="username">Username</label>
<input id="username"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label name="username">Username</label>
<input name="username"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label for="username">Username</label>
<input name="username"/>
`}                    
                </pre>
        </div>
    )
}

export default Labels