import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongooseModelFind = () => {
    const id = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false);
    const collection = id[0];
    const valueStr = id[9];
    const valueNum = Math.round(Math.random() * 100);
    const choices = [
        'find',
        id[1],
        valueStr
    ];
    return(
        <div>
            <h1>Mongo Model Find</h1>
            <div id="question123">
                Fill in the blanks below to complete code the snippet.
                Only use lowercase, no quotations, no extra spaces
                <br/>
                <br/>
                Given mongoose model <b>{id[4]}</b> created from the following
                mongoose schema
                <br/>
                <br/>
                <b>{collection}({id[1]}: string, {id[2]}: {types[1]}, {id[3]}: {types[2]})</b>
                <br/>
                <br/>
                Retrieve all documents whose field <b>{id[1]}</b> is equal to <b>"{valueStr}"</b>
                <br/>
                <br/>
                <b>{id[4]}.<u>____1____</u>({`{`}<u>____2____</u>: "<u>____3____</u>"})</b>
                <br/>
                <br/>
            </div>
            <div id="answers234">
                <ol>
                {
                    choices.map((choice) => {
                        return(
                            <li>
                            [{choice}]
                            </li>
                        )
                    })
                }
                </ol>
            </div>
        </div>
    )
}
