import React from 'react'
import {
    randomArrayOfStrings,
    randomInt,
    randomIntArray
} from "../../../utils/utils";

const Filter = () => {
    const range = randomIntArray();
    const strings = randomArrayOfStrings(3);
    const ewq = strings[0];
    const dsa = strings[1];
    const rew = strings[2];
    const fifty = randomInt(75);
    // const 
    return(
        <div>
            <h3>Filter</h3>
                <div>
            Consider the following array of values:
            <br/>
            <br/>
            <pre>
            const {ewq} = [{range.map((w,i)=>`${w}${i<range.length-1?',':''}`)}]
            </pre>
            Which of the code snippets below would generate the following output? Select all that apply.
            <ul>
                {
                    range.filter(dsa => dsa > fifty).map(rew =>
                        <li>{rew}</li>
                    )
                }
            </ul>
            <hr/>
            <input checked={true} type="checkbox"/>
            <pre>
                {`
<ul>
    {
        ${ewq}.filter(${dsa} => ${dsa} > ${fifty}).map(${rew} =>
            <li>{${rew}}</li>
        )
    }
</ul>`}
            </pre>
            <hr/>
            <input checked={true} type="checkbox"/>
            <pre>
                {`
<ul>
    {
        ${ewq}.filter(
            function(${dsa}){
                return ${dsa} > ${fifty}
            })
            .map(
            function(${rew}) {
                return(
                    <li>{${rew}}</li>
                )
            })
    }
</ul>`}
            </pre>
            <hr/>
            <input checked={false} type="checkbox"/>
            <pre>
                {`
<ul>
    {
        ${ewq}.map(${dsa} => ${dsa} > ${fifty}).filter(${rew} =>
            <li>{${rew}}</li>
        )
    }
</ul>`}
            </pre>
            <hr/>
            <input checked={false} type="checkbox"/>
            <pre>
                {`
<ul>
    {
        ${ewq}.map(${rew} =>
            <li>{${rew}}</li>
        ).filter(${dsa} => ${dsa} > ${fifty})
    }
</ul>`}
            </pre>
                </div>
        </div>
    )
}

export default Filter