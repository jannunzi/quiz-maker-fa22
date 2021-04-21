import React from 'react'
import {
    randomArray,
    randomData,
    randomFruitSet,
    randomSet,
    randomStringCapitalized,
    fruits, work,
    education, aggregationFunctions
} from "../../../utils/utils";
import {Link} from "react-router-dom";
import Pk from "../../utils/pk"
import Fk from "../../utils/fk"

const InlineViewLegalTrueFalse = () => {
    // const array = randomArray();
    const randomStrings = randomSet(10, work);
    const studentTable = randomStrings[0];
    const studentId = randomStrings[1];
    const studentName = randomStrings[2];

    const sectionTable = randomStrings[3];
    const sectionId = randomStrings[4];
    const sectionName = randomStrings[5];

    const enrollmentTable = randomStrings[6];
    const enrollmentId = randomStrings[7];
    const enrollmentGrade = randomStrings[8];
    
    const randomStrings2 = randomSet(9, education);
    const viewName = randomStrings2[0];
    const enrollmentTableRename = randomStrings2[1];
    const aggregationRename = randomStrings2[2];
    const gradeValue = randomStrings2[3];
    
    const randomAggregations = randomSet(2, aggregationFunctions);
    const aggregation1 = randomAggregations[0];
    const aggregation2 = randomAggregations[1];

    return(
        <>
            <h3>Inline Views Legal True False</h3>
            <p>
            Consider the following schema:
                <br/>
                <br/>
                {studentTable}(<Pk name={studentId}/>, {studentName})
                <br/>
                {sectionTable}(<Pk name={sectionId}/>, {sectionName})
                <br/>
                {enrollmentTable}(<Pk name={enrollmentId}/>, <Fk name={studentId}/>, <Fk name={sectionId}/>, {enrollmentGrade})
                <br/>
                <br/>
                Is the following query legal?
                <br/>
                <br/>
                SELECT {viewName}.scid
                <br/>
                FROM
                <div style={{marginLeft: "20px"}}>
                    (SELECT {enrollmentTableRename}.{sectionId}, {aggregation1}({enrollmentTableRename}.{enrollmentId}) as {aggregationRename}
                    <br/>
                    FROM {enrollmentTable} {enrollmentTableRename}
                    <br/>
                    WHERE {enrollmentTableRename}.{enrollmentGrade} = '{gradeValue}'
                    <br/>
                    GROUP BY {enrollmentTableRename}.{sectionId}) {viewName}
                </div>
                WHERE {viewName}.{aggregationRename} = {aggregation2}({viewName}.{aggregationRename})
                <br/>
            </p>
        </>
    )
}

export default InlineViewLegalTrueFalse
// 265641