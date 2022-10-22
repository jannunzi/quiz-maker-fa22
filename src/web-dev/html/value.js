import React from 'react'
import {randomArrayOfStrings} from "../../utils/utils";

const Value = () => {
    const strings = randomArrayOfStrings(5);
    const label = strings[0];
    const username = strings[1];
    const domain = strings[2];
    return(
        <div>
            <h3>Input field Value</h3>
            <div>
            Consider the following label "{label}" and input text input field.
            <br/>
            The input field initially displays the text "{username}@{domain}".
            <br/>
            The user can edit the text by clicking into the field and typing on their keyboard.
            <br/>
            <br/>
            <label>{label}</label>
            <br/>
            {/*<input value={`${username}@${domain}`}/>*/}
            <div style={{border: 'solid 1px black', width: '200px', padding: '4px'}}>
                {username}@{domain}
            </div>
            <br/>
            <br/>
            This behavior can be achieved with which of the following code snippets?
            <hr/>
            <input type="radio" checked={true}/>
            <pre>
                    {`
<label>${label}</label>
<input value="${username}@${domain}"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>${label}</label>
<input data="${username}@${domain}"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>${label}</label>
<input email="${username}@${domain}"/>
`}                    
                </pre>
            <hr/>
            <input type="radio" checked={false}/>
            <pre>
                    {`
<label>${label}</label>
<input placeholder="${username}@${domain}"/>
`}                    
                </pre>
            </div>
        </div>
    )
}

export default Value