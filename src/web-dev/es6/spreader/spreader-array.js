import React from 'react'
import {randomArrayOfStrings, randomInt, randomIntArray} from "../../../utils/utils";

const SpreaderArray = () => {
    const strings = randomArrayOfStrings()
    const array1Values = randomIntArray(randomInt(3, 3))
    const array2Values = randomIntArray(randomInt(3, 3))

    console.log(array1Values)
    console.log(array2Values)
    return(
        <div>
            <h2>Spreader Array</h2>
            <Question
                array1={strings[0]}
                array1Values={array1Values}
                array2={strings[1]}
                array2Values={array2Values}
                array3={strings[2]}
            />
        </div>
    )
}

const Question = (
    {
        array1="array1",
        array1Values = [1, 2, 3, 4],
        array2="array2",
        array2Values = [5, 6, 7, 8],
        array3="array3",
    }) => {
    return(
        <div id="question">
            Consider the following code snippet:
            <br/>
            <br/>
            <pre>
{`let ${array1} = [${array1Values}];
let ${array2} = [${array2Values}];
let ${array3} = [...${array1}, 9, 10, 11, ${array2}]`}
            </pre>
            How many elements does <code>{array3}</code> have: [HOWMANY_{array1Values.length + 3 + array2Values.length}]
        </div>
    )
}

export default SpreaderArray