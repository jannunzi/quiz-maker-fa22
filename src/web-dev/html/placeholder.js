import React from 'react'
import {randomArrayOfStrings} from "../../utils/utils";

const Placeholder = () => {
        const strings = randomArrayOfStrings(10);
        const label = strings[0];
        const username = strings[1];
        const domain = strings[2];
    return(
        <div>
            <h3>Placeholder</h3>
                <div>
                    Consider the following label <b>"{label}"</b> and input text input field.
            The input field is initially empty,
                    but shows grayed out text saying <b>"{username}@{domain}.com"</b> giving the user a hint of the input that is expected.
            When the user types into the text field, the hint disappears.
            If the user deletes all the text, the hint appears again.

            <br/>
            <br/>
            <label>{label}</label>
            <br/>
            {/*<input placeholder={`${username}@${domain}.com`}/>*/}
            <div style={{color: 'gray', border: 'solid 1px black', width: '250px', padding: '4px'}}>
                {username}@{domain}.com
            </div>
            <br/>
            <br/>
            This behavior can be achieved with which of the following code snippets?
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<label>Email</label>
<input placeholder="${username}@${domain}.com"/>
`}
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input hint="${username}@${domain}.com"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input tip="${username}@${domain}.com"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label>Email</label>
<input value="${username}@${domain}.com"/>
`}                    
                </pre>
                </div>
        </div>
    )
}

export default Placeholder