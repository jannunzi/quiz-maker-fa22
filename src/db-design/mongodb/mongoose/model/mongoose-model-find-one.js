import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongooseModelFindOne = () => {
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
        'findOne',
        field1,
        valueStr
    ];
    return(
        <div>
            <h1>Mongo Model Find One</h1>
            <div id="question123">
                Fill in the blanks below to complete code the snippet.
                <br/>
                Only use lowercase, no quotations, no extra spaces
                <br/>
                <br/>
                Given a mongoose model called <b>{model}</b> created from the following
                mongoose schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>
                Retrieve a single document whose
                field <b>{field1}</b> is equal to <b>"{valueStr}"</b>
                <br/>
                <br/>
                <b>{model}.<u>____1____</u>({`{`}____2____: "<u>____3____</u>"})</b>
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
