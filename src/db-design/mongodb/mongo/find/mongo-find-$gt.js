import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongoFind$Gt = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false)
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const value1 = identifiers[4];
    const value2 = Math.round(Math.random() * 100);
    const type1 = types[0];
    const type2 = "number";
    const type3 = types[2];
    return(
        <div>
            <h1>Mongo Find $Gt</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>
                Which of the following options
                retrieves documents whose field
                &nbsp;<b>{field2}</b> is greater than <b>{value2}</b>
                <br/>
            </div>
            <div id="answers234">
                <hr/>
<input size={70}
       value={`db.${collection}.find({${field2}: {$gt: ${value2}}})`}/>
                <hr/>
<input size={70}
       value={`db.${collection}.find({$gt: {${field2}: ${value2}}})`}/>
                <hr/>
<input size={70}
       value={`db.${collection}.findGreaterThan({${field2}: ${value2}})`}/>
                <hr/>
<input size={70}
       value={`db.${collection}.find("${field2} $gt ${value2}")`}/>
                <hr/>
            </div>
        </div>
    )
}
