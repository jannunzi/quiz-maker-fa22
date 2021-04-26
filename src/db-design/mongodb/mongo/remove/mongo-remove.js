import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongoRemove = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false)
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const valueStr = identifiers[4];
    const valueNum = Math.round(Math.random() * 100);
    const type1 = "string";//types[0];
    const type2 = types[1];
    const type3 = types[2];
    const choices = [
        `db.${collection}.remove({${field1}: "${valueStr}"})`,
        `db.${collection}.delete({${field1}: "${valueStr}"})`,
        `db.${collection}.find({${field1}: "${valueStr}"}).remove()`,
        `db.${collection}.find({${field1}: "${valueStr}"}).delete()`,
    ]
    return(
        <div>
            <h1>Mongo Remove</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>

                Which of the following options deletes a document whose
                field <b>{field1}</b> is equal to <b>"{valueStr}"</b>.

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
