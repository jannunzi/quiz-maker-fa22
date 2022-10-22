import React from 'react'
import {randomArrayOfStrings} from "../../utils/utils";

const LabelsAndRadios = () => {
    const strings = randomArrayOfStrings(7);
    
    const red   = strings[0];
    const white = strings[1];
    const blue  = strings[2];
    
    const redId   = strings[3];
    const whiteId = strings[4];
    const blueId  = strings[5];
    
    return(
        <div>
            <h3>Labels and Checkboxes</h3>
            <div>
            Consider the following set of buttons

            <br/>
            <br/>
            <label><input type="checkbox"/> {red}</label>
            <br/>
            <label><input type="checkbox"/> {white}</label>
            <br/>
            <label><input type="checkbox"/> {blue}</label>
            <br/>
            <br/>
            
            If a user clicks on the text, the button is selected.
            <br/>
            Which of the following code snippets achieves this behavior?
            <br/>
            Select all that apply.
            </div>

            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<label><input type="checkbox"/>${red}</label>
<label><input type="checkbox"/>${white}</label>
<label><input type="checkbox"/>${blue}</label>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<input id="${redId}" type="checkbox"/><label for="${redId}">${red}</label>
<input id="${whiteId}" type="checkbox"/><label for="${whiteId}">${white}</label>
<input id="${blueId}" type="checkbox"/><label for="${blueId}">${blue}</label>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<input id="${redId}" type="checkbox"/><label id="${redId}">${red}</label>
<input id="${whiteId}" type="checkbox"/><label id="${whiteId}">${white}</label>
<input id="${blueId}" type="checkbox"/><label id="${blueId}">${blue}</label>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<input name="${redId}" type="checkbox"/><label name="${redId}">${red}</label>
<input name="${whiteId}" type="checkbox"/><label name="${whiteId}">${white}</label>
<input name="${blueId}" type="checkbox"/><label name="${blueId}">${blue}</label>
`}                    
                </pre>
        </div>
    )
}

export default LabelsAndRadios