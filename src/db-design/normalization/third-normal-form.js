import React from 'react'
import {randomSet, work} from "../../utils/utils";
import Pk from "../utils/pk";
import Fk from "../utils/fk";

const ThirdNormalForm = () => {
    const capitalizedStrings = randomSet(10, work, true)
    const lowercaseStrings = randomSet(10, work)
    
    const courseTable = capitalizedStrings[0];//"CUSTOMERS";
    const courseId = lowercaseStrings[0];//"cid";
    const semester = lowercaseStrings[1];//"first_name";
    const seats = lowercaseStrings[2];//"last_name";
    const courseName = lowercaseStrings[3];//"courseName";    
    
    return(
        <div>
            <h1>Third Normal Form</h1>
            <div id="question123">
                Consider the following schema with
                composite primary key <b>{'{'}{courseId}, {semester}{'}'}</b>
                <br/>
                and a dependency between fields <b>{courseName}</b> and <b>{seats}</b>
                <br/>
                <br/>
                <b>{courseTable}({'{'}{courseId}, {semester}{'}'}, {seats}, {courseName})</b>
                <br/>
                <br/>
                Which normalization is the schema violating?
            </div>
            <div id="answers234">
                <hr/>
                Third normal form
                <hr/>
                Second normal form
                <hr/>
                First normal form
                <hr/>
                The schema does not violate any normal form
            </div>
        </div>
    )
}

export default ThirdNormalForm