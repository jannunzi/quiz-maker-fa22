import React from 'react'
import {randomArrayOfStrings} from "../../utils/utils";

const LabelsForInput = () => {
    const strings = randomArrayOfStrings(7)
    const username1 = strings[0];
    const username2 = strings[1];
    const username3 = strings[2];
    const username4 = strings[3];
    const USERNAME = strings[4];
    const USERNAME2 = strings[5];
    const USERNAME3 = strings[6];
    const USERNAME4 = strings[7];
    return(
        <div>
            <h3>Labels for input</h3>
            <div>
                Consider the following label "{USERNAME}" and input text field below it.
                A user clicks on the label "{USERNAME}" and the input field receives focus, i.e., the cursor appears in the input field ready for the user to type in data.
                <br/>
                <br/>
                <label for="${username}">{USERNAME}</label>
                <br/>
                <input id="${username}"/>
                <br/>
                <br/>
                Which of the following code snippets achieves this behavior?
            </div>
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>
                    {`
<label for="${username1}">${USERNAME}</label>
<input id="${username1}"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label id="${username2}">${USERNAME}</label>
<input id="${username2}"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label name="${username3}">${USERNAME}</label>
<input name="${USERNAME}"/>
`}                    
                </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>
                    {`
<label for="${USERNAME}">${USERNAME}</label>
<input name="${username4}"/>
`}                    
                </pre>
        </div>
    )
}

export default LabelsForInput