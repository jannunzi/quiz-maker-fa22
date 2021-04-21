import React from 'react'

const LabelsAndRadios = () => {
    return(
        <div>
            <h3>Labels and Checkboxes</h3>
            Consider the following set of buttons

            <br/>
            <label><input type="checkbox"/> Red</label>
            <br/>
            <label><input type="checkbox"/> White</label>
            <br/>
            <label><input type="checkbox"/> Blue</label>
            <br/>
            
            If a user clicks on the text, the button is selected.
            <br/>
            Which of the following code snippets achieves this behavior?
            <br/>
            Select all that apply. 

            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<label><input type="checkbox"/>Red</label>
<label><input type="checkbox"/>White</label>
<label><input type="checkbox"/>Blue</label>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<input id="red" type="checkbox"/><label for="red">Red</label>
<input id="white" type="checkbox"/><label for="white">White</label>
<input id="blue" type="checkbox"/><label for="blue">Blue</label>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<input id="red" type="checkbox"/><label id="red">Red</label>
<input id="white" type="checkbox"/><label id="white">White</label>
<input id="blue" type="checkbox"/><label id="blue">Blue</label>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<input name="red" type="checkbox"/><label name="red">Red</label>
<input name="white" type="checkbox"/><label name="white">White</label>
<input name="blue" type="checkbox"/><label name="blue">Blue</label>
`}                    
                </pre>
        </div>
    )
}

export default LabelsAndRadios