import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongooseSchemaNumber = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false);
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const valueStr = identifiers[4];
    const valueNum = Math.round(Math.random() * 100);
    const type1 = types[0];
    const type2 = types[1];
    const type3 = types[2];
    const choices = [
        field2,
        `Schema`,
        field1,
        type1,
    ];
    return(
        <div>
            <h1>Mongo Schema Number</h1>
            <div id="question123">

                Fill in the blanks below to complete code the snippet.
                Only use lowercase, no quotations, no extra spaces
                <br/>
                <br/>
                Declare a mongoose schema with a field called <b>{field1}</b> of type <b>{type1}</b>
                <br/>
                <br/>
                <b>
                    const {field2} = require("mongoose");
                    <br/>
                    const schema = <u>____1____</u>.<u>____2____</u>({`{`}<u>____3____</u>{`:`} <u>____4____</u>{`}`})
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
