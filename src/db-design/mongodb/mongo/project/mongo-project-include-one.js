import React from 'react'
import {randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongoProjectIncludeOne = () => {
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
    const choices = [
        `db.${collection}.find({}, {${field1}: 1})`,
        `db.${collection}.find({}, {${field1}: true})`,
        `db.${collection}.find({${field1}: 1})`,
        `db.${collection}.find({${field1}: true})`,
        `db.${collection}.find({}, {$projection: [${field1}]})`
    ]
    return(
        <div>
            <h1>Mongo Project One</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>
                Which of the following options only includes
                field <b>{field1}</b>, but not fields <b>{field2}</b> or <b>{field3}</b>?
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
