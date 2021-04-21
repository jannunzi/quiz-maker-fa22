import React from 'react'
import {randomArray, randomData, randomFruitSet, randomSet, randomStringCapitalized, fruits} from "../../../../utils/utils";

const GroupByTwoTablesMultipleMinMaxChoice = () => {
    
    const array = randomArray()
    const randomFruits = randomSet(9, array)
    const tableA = randomFruits[0];
    const tableApk = randomFruits[1];
    const tableAfield1 = randomFruits[2];
    const tableAfield2 = randomFruits[3];

    const tableB = randomFruits[4];
    const tableBpk = randomFruits[5];
    const tableBfield1 = randomFruits[6];

    const tableArename = randomFruits[7];
    const tableBrename = randomFruits[8];
    return(
        <>
            <h3>Group By Two Tables Min Max Multiple Choice</h3>
            <p>
            Consider the following schema:
                <br/>
                <br/>
                {tableA}(<b>{tableApk}</b> (pk), {tableAfield1}, {tableAfield2})
                <br/>
                {tableB}(<b>{tableBpk}</b> (pk), {tableBfield1}, <u><i>{tableApk}</i></u> (fk))
                <br/>
                <br/>
            Select the statement that best implements the following query
                <br/>
                <br/>
                <b>"What are min and max {tableAfield1}, per {tableApk}"</b>
            </p>
            <input type="radio" checked={true}/>
                <br/>
                SELECT {tableArename}.{tableApk}, MIN({tableArename}.{tableAfield1}), MAX({tableArename}.{tableAfield1})
                <br/>
                FROM {tableA} {tableArename}
                <br/>
                GROUP BY {tableArename}.{tableApk}
                <br/>
                <br/>
            <input type="radio"/>
                <br/>
                SELECT {tableArename}.{tableApk}, {tableArename}.{tableAfield1}, MIN({tableArename}.{tableAfield1}), MAX({tableArename}.{tableAfield1})
                <br/>
                FROM {tableA} {tableArename}
                <br/>
                GROUP BY {tableArename}.{tableApk}
                <br/>
                <br/>
            <input type="radio"/>
            <br/>
                SELECT {tableArename}.{tableApk}, MIN({tableArename}.{tableAfield1}), MAX({tableArename}.{tableAfield1})
                <br/>
                FROM {tableB} {tableArename}
                <br/>
                GROUP BY {tableArename}.{tableApk}
                <br/>
                <br/>
            <input type="radio"/>
                <br/>
                SELECT {tableArename}.{tableApk}, {tableBrename}.{tableBfield1} MIN({tableArename}.{tableAfield1}), MAX({tableArename}.{tableAfield1})
                <br/>
                FROM {tableA} {tableArename}, {tableB} {tableBrename}
                <br/>
                WHERE {tableArename}.{tableApk} = {tableBrename}.{tableApk}
                <br/>
                GROUP BY {tableArename}.{tableApk}
                <br/>
                <br/>
        </>
    )
}

export default GroupByTwoTablesMultipleMinMaxChoice