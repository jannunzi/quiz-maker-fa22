import React from 'react'
import {randomArrayElement, randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongoFindById = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false)
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const type1 = types[0];
    const type2 = types[1];
    const type3 = types[2];
    return(
        <div>
            <h1>Mongo Find By Id</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                {collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})
                <br/>
                <br/>
                Which of the following options retrieves a document by its primary key?
                <br/>
            </div>
            <div id="answers234">
                <hr/>
                <input size={50} value={`db.${collection}.find({_id: ObjectId("ABC")})`}/>
                <hr/>
                <input size={50} value={`${collection}.db.find({_id: ObjectId("ABC")})`}/>
                <hr/>
                <input size={50} value={`db.${collection}.find({${field1}: "ABC"})`}/>
                <hr/>
                <input size={50} value={`db.${collection}.findById("ABC")`}/>
                <hr/>
                <input size={50} value={`db.${collection}.findOne({_id: ObjectId("ABC")})`}/>
                <hr/>
                <input size={50} value={`${collection}.db.findById("ABC")`}/>
                <hr/>
                <input size={50} value={`${collection}.db.find("ABC")`}/>
            </div>
        </div>
    )
}
