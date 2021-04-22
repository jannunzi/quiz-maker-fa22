import React from 'react'
import {randomSet, jsDataTypes} from "../../../utils/utils";

export const MongoFind$Eq = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false)
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const value1 = identifiers[4];
    const value2 = Math.round(Math.random() * 100);
    const type1 = "string";
    const type2 = types[1];
    const type3 = types[2];
    return(
        <div>
            <h1>Mongo Find $Eq</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>
                Which of the following options retrieves documents
                whose field <b>{field1}</b> is equal to <b>"{value1}"</b>
                <br/>
            </div>
            <div id="answers234">
                <hr/>
<input size={70}
       value={`db.${collection}.find({${field1}: {$eq: "${value1}"}})`}/>
                <hr/>
<input size={70}
       value={`db.${collection}.find("${field1} $eq '${value1}'")`}/>
                <hr/>
<input size={70}
       value={`db.${collection}.find({$eq: {${field1}: "${value1}"}})`}/>
                <hr/>
<input size={70}
       value={`db.${collection}.findEqual({${field1}: "${value1}"})`}/>
                <hr/>
            </div>
        </div>
    )
}
