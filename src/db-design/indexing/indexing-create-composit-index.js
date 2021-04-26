import React from 'react'
import {randomSet, jsDataTypes} from "../../utils/utils";

export const IndexingCreateCompositeIndex = () => {
    const id = randomSet(20, null, false);
    const types = randomSet(3, jsDataTypes, false);
    const collection = id[18];
    const model = id[17];
    const field1 = id[0], type1 = 'string';//types[0];
    const field2 = id[1], type2 = 'string';//types[1];
    const field3 = id[2], type3 = types[2];
    const field4 = id[3], type4 = types[3];
    const field5 = id[4], type5 = types[4];
    const field6 = id[5], type6 = types[5];
    const field7 = id[6], type7 = types[6];
    const tableA = id[7]
    const tableB = id[8]
    const tableC = id[9]
    const valueStr1 = id[16];
    const valueStr2 = id[19];
    const valueNum = Math.round(Math.random() * 100);
    const choices = [
        'CREATE',
        'INDEX',
        'ON',
        tableA,
        field2,
        field3,
    ];
    return(
        <div>
            <h1>Indexing Create Composite Index</h1>
            <div id="question123">
                Fill in the blanks below to complete code the snippet.
                <br/>
                Only use lowercase, no quotations, no extra spaces
                <br/>
                <br/>
                Consider the following schema
                <br/>
                <br/>
                <b>
                {tableA}({field1} (pk), {field2}, {field3}, {field4} (fk))
                <br/>
                {tableB}({field4} (pk), {field5}, {field6}, {field7})
                </b>
                <br/>
                <br/>
                Create an index called <b>MY_INDEX</b> that can improve the performance of the following query
                <br/>
                <br/>
                <b>
                SELECT * FROM {tableA} WHERE {field2}= '{valueStr1}' AND {field3} = '{valueStr1}'
                </b>
                <br/>
                <br/>
                <b>
                <u>____1____</u> <u>____2____</u> MY_INDEX <u>____3____</u> <u>____4____</u> (<u>____5____</u>, <u>____6____</u>)
                </b>
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
