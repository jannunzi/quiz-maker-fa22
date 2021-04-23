import React from 'react'
import {randomArrayElement, randomSet, jsDataTypes} from "../../../../utils/utils";

export const MongoFindAll = () => {
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
            <h1>Mongo Find All</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                {collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})
                <br/>
                <br/>
                Which of the following options retrieves all the documents?
                <br/>
            </div>
            <div id="answers234">
                <hr/>
                <b>db.{collection}.find()</b>
                <hr/>
                db.findAll({collection})
                <hr/>
                db.{collection}.findAll()
                <hr/>
                db.find({collection})
                <hr/>
                db.{collection}()
                <hr/>
                db.find.{collection}()
            </div>
        </div>
    )
}
