import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongooseSchemaModel = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false);
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const field4 = identifiers[4];
    const field5 = identifiers[5];
    const field6 = identifiers[6];
    const valueStr = identifiers[4];
    const valueNum = Math.round(Math.random() * 100);
    const type1 = types[0];
    const type2 = types[1];
    const type3 = types[2];
    const choices = [
        field4,
        'model',
        field5
    ];
    return(
        <div>
            <h1>Mongo Schema Model</h1>
            <div id="question123">

                Fill in the blanks below to complete code the snippet.
                <br/>
                Only use lowercase, no quotations, no extra spaces
                <br/>
                <br/>
                Consider the following mongoose schema
                <br/>
                <br/>
                <b>
                    {collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})
                </b>
                <br/>
                <br/>
                Create a mongoose model called "SomeModel" using a schema stored in file "{field6}.js"
                <br/>
                <br/>
                <b>
                const {field4} = require("mongoose")
                    <br/>
                const {field5} = require("./{field6}")
                    <br/>
                const someModel = <u>____1____</u>.<u>____2____</u>("SomeModel", <u>____3____</u>)
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
