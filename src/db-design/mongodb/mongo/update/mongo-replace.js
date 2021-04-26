import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongoReplace = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false)
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const valueStr = identifiers[4];
    const valueNum = Math.round(Math.random() * 100);
    const type1 = "string";//types[0];
    const type2 = "number";//types[1];
    const type3 = types[2];
    const choices = [
        `db.${collection}.update({${field1}: "${valueStr}"}, {${field2}: ${valueNum}})`,
        `db.${collection}.update({${field1}: "${valueStr}"}, {$set: {${field2}: ${valueNum}}})`,
        `db.${collection}.update({$set: {${field2}: ${valueNum}}}, {${field1}: "${valueStr}"})`,
        `db.${collection}.update({${field2}: ${valueNum}}, {${field1}: "${valueStr}"})`,
        `db.${collection}.update({${field1}: "${valueStr}"}, {${field2}: {$set: ${valueNum}}})`,
        `db.${collection}.update({${field2}: {$set: ${valueNum}}}, {${field1}: "${valueStr}"})`,
    ]
    return(
        <div>
            <h1>Mongo Replace</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>
                Which of the following options replaces a document whose
                field <b>{field1}</b> is equal to <b>"{valueStr}"</b> with a new document whose
                field <b>{field2}</b> is equal to <b>{valueNum}</b>?


                <br/>
            </div>
            <div id="answers234">
                <hr/>
                {
                    choices.map((choice) => {
                        return(
                            <>
                            <input size={70}
                                   style={{border: "none"}}
                                   value={choice}/>
                                   <hr/>
                           </>
                        )
                    })
                }
            </div>
        </div>
    )
}
