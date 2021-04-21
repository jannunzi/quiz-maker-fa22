import React from 'react'
import {randomArrayElement, randomSet, jsDataTypes} from "../../../utils/utils";

export const MongoFindByMultipleFields = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false)
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const value1 = identifiers[4];
    const value2 = Math.round(Math.random() * 100);
    const type1 = types[0];
    const type2 = types[1];
    const type3 = types[2];
    return(
        <div>
            <h1>Mongo Find By Multiple Fields</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                <b>
                {collection}({field1}: string, {field2}: number, {field3}: {type3})
                </b>
                <br/>
                <br/>
                Which of the following options retrieves documents
                whose field <b>{field1}</b> is equal to <b>"{value1}"</b>
                and field <b>{field2}</b> is equal to <b>{value2}</b>
                <br/>
            </div>
            <div id="answers234">
                <hr/>
                <input size={50} value={`db.${collection}.find({${field1}: "${value1}", ${field2}: ${value2})`}/>
                <hr/>
                <input size={50} value={`db.${collection}.find({${field1}: "${value1}"}, {${field2}: ${value2}})`}/>
                <hr/>
                <input size={50} value={`db.${collection}.find({{${field1}: "${value1}"}, {${field2}: ${value2}}})`}/>
                <hr/>
                <input size={50} value={`db.${collection}.find("${field1}: '${value1}' AND ${field2}: ${value2}")`}/>
                <hr/>
                <input size={50} value={`db.${collection}.find("${field1} == '${value1}' AND ${field2} == ${value2}")`}/>
                <hr/>
                <input size={50} value={`db.${collection}.find([${field1}: "${value1}", ${field2}: ${value2}])`}/>
            </div>
        </div>
    )
}
