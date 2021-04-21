import React from 'react';
import {randomData, randomStringCapitalized} from "../../utils/utils";
import Table from "../tables/table";

export default () => {
    const randomTableNameA = randomStringCapitalized(2);
    const randomTableNameB = randomStringCapitalized(2);
    const randomTableNameC = randomStringCapitalized(2);
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
    const schemaB = {
        schemaName: 'QUIZ_MAKER',
        tableName: randomTableNameB,
        columns: [
            {
                name: `${randomTableNameB}ID`,
                type: 'INT',
                primaryKey: true,
                autoIncrement: true,
                notNull: true
            },
            {
                name: `${randomTableNameB}1`,
                type: 'VARCHAR',
                size: 45
            },
            {
                name: `${randomTableNameB}2`,
                type: 'INT'
            },
            {
                name: `${randomTableNameB}3`,
                type: 'FLOAT'
            }
        ]
    };
    const schemaC = {
        schemaName: 'QUIZ_MAKER',
        tableName: randomTableNameC,
        columns: [
            {
                name: `${randomTableNameC}ID`,
                type: 'INT',
                primaryKey: true,
                autoIncrement: true,
                notNull: true
            },
            {
                name: `${randomTableNameC}1`,
                type: 'VARCHAR',
                size: 45
            },
            {
                name: `${randomTableNameC}2`,
                type: 'INT'
            },
            {
                name: `${randomTableNameC}3`,
                type: 'FLOAT'
            }
        ]
    };
    let tableDataA = randomData({
        schema: schemaA,
        rowCount: 3
    });
    let tableDataB = randomData({
        schema: schemaB,
        rowCount: 3
    });
    let tableDataC = randomData({
        schema: schemaC,
        rowCount: 3
    });

    return(
        <>
            <h2>DB Design Insert Into Select</h2>
            <div>
            Consider the following tables {randomTableNameA}, {randomTableNameB}, and {randomTableNameC}:
            <br/>
            <br/>

            <table>
                <tr>
                    <td>
                        <Table schema={schemaA} tableData={tableDataA}/>
                    </td>
                    <td>

                    </td>
                    <td>
                        <Table schema={schemaB} tableData={tableDataB}/>
                    </td>
                    <td>

                    </td>
                    <td>
                        <Table schema={schemaC} tableData={tableDataC}/>
                    </td>
                </tr>
            </table>
                Fill in the blanks below to copy records from {randomTableNameB} and {randomTableNameC} into {randomTableNameA}.<br/>
                All primary keys are auto generated and should be left to the database to figure out their
                value when creating new records.<br/>
                Do not insert primary keys since these are auto generated.<br/>
                Fill in the column names below in the same order as shown above.<br/>
                Copy the first two columns of {randomTableNameA} from the first two columns of {randomTableNameB} and the last column from {randomTableNameC}.<br/>
                Ignore the WHERE clause.
            <br/>
            <br/>
            INSERT [INTO] {randomTableNameA}<br/>
            (
                [{schemaA.columns[1].name}],
                [{schemaA.columns[2].name}],
                [{schemaA.columns[3].name}]
            )<br/>
            SELECT
            (
                [{schemaB.columns[1].name}] AS [{schemaA.columns[1].name}_1],
                [{schemaB.columns[2].name}] [AS] {schemaA.columns[2].name},
                {schemaC.columns[3].name} [AS_1] [{schemaA.columns[3].name}_1]
            )<br/>
            FROM {randomTableNameB}, {randomTableNameC}<br/>
            WHERE ...
            </div>
        </>
    )
}
