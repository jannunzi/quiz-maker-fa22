import React from 'react'
import {randomArrayOfStrings} from "../../../utils/utils";

const Map1 = () => {
    const ewq = randomArrayOfStrings(2, 5)
    return(
        <div>
            Consider the following array of strings:
            <br/>
            <br/>
            <pre>
            const ewq = [{ewq.map((w,i)=>`'${w}'${i<ewq.length-1?',':''}`)}]
            </pre>
            Which of the code snippets below would generate the following output? Select all that apply.
            <ul>
                {
                    ewq.map(rew =>
                        <li>{rew}</li>
                    )
                }
            </ul>
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>{`
<ul>
{
    ewq.map(rew => <li>{rew}</li>)
}
</ul>`}
            </pre>
            <hr/>
            <input type="checkbox" checked={true}/>
            <pre>{`
<ul>
{
    ewq.map(rew => {
            return <li>{rew}</li>
        }
    )
}
</ul>`}
            </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>{`
<ul>
{
    ewq.map(function(rew) =>
        <li>{rew}</li>
    )
}
</ul>`}
            </pre>
            <hr/>
            <input type="checkbox" checked={false}/>
            <pre>{`
<ul>
{
    ewq.map(rew =>
        return <li>{rew}</li>
    )
}
</ul>`}
            </pre>
        </div>
    )
}

export default Map1