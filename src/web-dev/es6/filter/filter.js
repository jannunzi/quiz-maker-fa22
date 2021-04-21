import React from 'react'
import {randomIntArray} from "../../../utils/utils";

const Filter = () => {
    const ewq = randomIntArray()
    return(
        <div>
            <h3>Filter</h3>
            Consider the following array of strings:
            <br/>
            <br/>
            <pre>
            const ewq = [{ewq.map((w,i)=>`${w}${i<ewq.length-1?',':''}`)}]
            </pre>
            Which of the code snippets below would generate the following output? Select all that apply.
            <ul>
                {
                    ewq.filter(dsa => dsa > 50).map(rew =>
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
        ewq.filter(dsa => dsa > 50).map(rew =>
            <li>{rew}</li>
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
        ewq.filter(
            function(dsa){
                return dsa > 50
            })
            .map(
            function(rew) {
                return(
                    <li>{rew}</li>
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
        ewq.map(dsa => dsa > 50).filter(rew =>
            <li>{rew}</li>
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
        ewq.map(rew =>
            <li>{rew}</li>
        ).filter(dsa => dsa > 50)
    }
</ul>`}
            </pre>

        </div>
    )
}

export default Filter