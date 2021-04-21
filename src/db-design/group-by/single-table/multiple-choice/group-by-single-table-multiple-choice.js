import React from 'react'
import {randomArray, randomData, randomFruitSet, randomSet, randomStringCapitalized, fruits} from "../../../../utils/utils";

const GroupBySingleTableMultipleChoice = () => {
    const array = randomArray()
    const randomFruits = randomSet(5, array)
    console.log(randomFruits)
    const randomTableNameA = randomFruits[0];//randomStringCapitalized(2);
    const randomFieldA = randomFruits[1];//randomStringCapitalized(4);
    const randomFieldB = randomFruits[2];//randomStringCapitalized(4);
    const randomFieldC = randomFruits[3];//randomStringCapitalized(4);
    const randomFieldD = randomFruits[4];//randomStringCapitalized(4);
    return(
        <>
            <h3>Group By Single Table Multiple Choice</h3>
            <p>
            Consider the following schema:
                <br/>
                <br/>
                <b>{randomTableNameA}({randomFieldA}, {randomFieldB}, {randomFieldC}, {randomFieldD})</b>
                <br/>
                <br/>
            Select the statement that best implements the following query
                <br/>
                <br/>
                <b>"The sum of all {randomFieldB} per {randomFieldD}"</b>
            </p>
            <br/>
            <input type="radio"/>
            <br/>
            SELECT {randomFieldD}, SUM({randomFieldB})
            &nbsp;FROM {randomTableNameA}
            &nbsp;GROUP BY {randomFieldD}
            <br/>
            <br/>
            <input type="radio"/>
            <br/>
            SELECT {randomFieldD}, SUM({randomFieldD})
            &nbsp;FROM {randomTableNameA}
            &nbsp;GROUP BY {randomFieldB}
            <br/>
            <br/>
            <input type="radio"/>
            <br/>
            SELECT {randomFieldA}, {randomFieldD}, SUM({randomFieldB})
            &nbsp;FROM {randomTableNameA}
            &nbsp;GROUP BY {randomFieldD}
            <br/>
            <br/>
            <input type="radio"/>
            <br/>
            SELECT {randomFieldA}, {randomFieldD}, SUM({randomFieldD})
            &nbsp;FROM {randomTableNameA}
            &nbsp;GROUP BY {randomFieldB}
            <br/>
            <br/>
        </>
    )
}

export default GroupBySingleTableMultipleChoice