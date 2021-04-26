import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongooseModelFindById = () => {
    const id = randomSet(20, null, false);
    const types = randomSet(3, jsDataTypes, false);
    const collection = id[18];
    const model = id[17];
    const field1 = id[0], type1 = 'string';//types[0];
    const field2 = id[1], type2 = types[1];
    const field3 = id[2], type3 = types[2];
    const valueStr = id[19];
    const valueNum = Math.round(Math.random() * 100);
    const choices = [
        'findById',
        valueStr
    ];
    return(
        <div>
            <h1>Mongo Model Find By Id</h1>
            <div id="question123">
                Fill in the blanks below to complete code the snippet.
                Only use lowercase, no quotations, no extra spaces
                <br/>
                <br/>
                Given mongoose model called <b>{model}</b> created from the following
                mongoose schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>
                Retrieve a single document whose primary key is equal to <b>"{valueStr}"</b>
                <br/>
                <br/>
                <b>{model}.<u>____1____</u>("<u>____2____</u>")</b>
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
