import React from 'react'

const Textarea = () => {
    return(
        <div>
            <h3>Input field Textarea</h3>
            Consider the following label "Post" and text field.
            <br/>
            The input field initially displays the text
            <br/>
            <pre>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </pre>
            The user can edit the text by clicking into the field and typing on their keyboard.
            <br/>
            <label>Post</label>
            <br/>
            <textarea
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"></textarea>
            <br/>
            <br/>
            This behavior can be achieved with which of the following code snippets?
            <hr/>
            <input type="radio" checked={true}/>
            <pre>
                    {`
<label>Post</label>
<textarea>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
</textarea>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={true}/>
            <pre>
                    {`
<label>Post</label>
<textarea
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"></textarea>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Post</label>
<textarea
    data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"></textarea>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>Post</label>
<textarea
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"></textarea>
`}                    
                </pre>
        </div>
    )
}

export default Textarea