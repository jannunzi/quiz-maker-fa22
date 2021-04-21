import React from 'react';
import {randomData, randomStringCapitalized} from "../../utils/utils";
import Table from "../tables/table";

export default () => {
    const randomTableNameA = randomStringCapitalized(2);
    const schemaA = {
        schemaName: 'QUIZ_MAKER',
        tableName: randomTableNameA,
        columns: [
            {
                name: `${randomTableNameA}ID`,
                type: 'INT',
                primaryKey: true,
                autoIncrement: true,
                notNull: true
            },
            {
                name: `${randomTableNameA}1`,
                type: 'VARCHAR',
                size: 45
            },
            {
                name: `${randomTableNameA}2`,
                type: 'INT'
            },
            {
                name: `${randomTableNameA}3`,
                type: 'FLOAT'
            }
        ]
    };
    let tableDataA = randomData({
        schema: schemaA,
        rowCount: 3
    });
    let tableDataB = randomData({
        schema: schemaA,
        rowCount: 1
    });

    return(
        <>
            <h2>DB Design Insert Into Columns</h2>
            <div>
            Consider the following table {randomTableNameA}:
            <br/>
            <br/>
            <Table schema={schemaA} tableData={tableDataA}/>
                Fill in the blanks below to insert a new record that looks like this:
            <br/>
            <br/>
            <Table schema={schemaA} tableData={tableDataB}/>
                INSERT [INTO] {randomTableNameA}<br/>
                (
                [{schemaA.columns[0].name}],
                [{schemaA.columns[1].name}],
                [{schemaA.columns[2].name}],
                [{schemaA.columns[3].name}])<br/>
                [VALUES]<br/>
                ([{tableDataB[0][0]}], [{tableDataB[0][1]}], [{tableDataB[0][2]}], [{tableDataB[0][3]}])
            </div>
        </>
    )
}
